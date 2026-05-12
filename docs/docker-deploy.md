# IceBox（冰盒）部署与环境分层

本文约定三套环境：**本地**、**开发（Docker）**、**生产（Docker）**。本地开发**不以 Docker 为前置条件**；开发与生产在服务器上应使用**两个独立目录**分别部署，通过目录隔离配置与 Compose 项目，而不是仅靠同一目录下切换启动参数。

## 1. 三层环境对照

| 层级 | 典型位置 | 启动方式 | 说明 |
|------|-----------|----------|------|
| 本地 | 工程师本机仓库根目录 | `npm install` / `npm run dev` / `npm run lint` / `npm run build` | 无需安装 Docker。 |
| 开发 | 服务器目录，例如 `/opt/icebox-dev` | `deploy/dev` 下 `docker compose` | 宿主机端口默认 **3001**，见下文 Compose 隔离。 |
| 生产 | 服务器目录，例如 `/opt/icebox-prod` | `deploy/prod` 下 `docker compose` | 宿主机端口默认 **3000**。 |

## 2. 服务器目录隔离（推荐）

在同一台主机上可同时运行开发与生产实例，前提是：

1. **克隆两份代码到不同路径**（或同一仓库两次 checkout），例如：
   - 开发：`/opt/icebox-dev/repo`
   - 生产：`/opt/icebox-prod/repo`
2. **各自目录内**维护独立的 `.env`（由 `env.example` 复制而来，**勿提交仓库**）。
3. 仅在对应目录执行 `docker compose`，避免在同一目录混用两套 `env_file`。

## 3. Compose 与网络隔离（避免同机冲突）

| 项目 | 开发 `deploy/dev` | 生产 `deploy/prod` |
|------|-------------------|---------------------|
| Compose 项目名（`name`） | `icebox-dev` | `icebox-prod` |
| 默认网络名 | `icebox_dev_net` | `icebox_prod_net` |
| Web 容器名 | `icebox-dev-web` | `icebox-prod-web` |
| 宿主机端口 | `3001` → 容器 `3000` | `3000` → 容器 `3000` |

若同机端口冲突，可编辑对应 `docker-compose.yml` 中的 `ports` 左侧宿主机端口。

## 4. 本地开发（无 Docker）

前置：**Node.js** 与 **npm**（版本建议与生产构建所用 `Dockerfile` 中 Node 主版本一致，当前为 22）。

```bash
npm install
npm run dev
```

质量检查与生产构建校验：

```bash
npm run lint
npm run build
npm run start
```

可选环境变量：复制根目录 `.env.example` 或 `.env.development.example` 为 `.env.local` 后按需修改。

## 5. 开发环境（Docker）

在服务器**开发专用目录**中：

```bash
cd deploy/dev
cp env.example .env
# 编辑 .env
chmod +x up.sh down.sh rebuild.sh   # Linux 首次可选
./up.sh
```

默认挂载仓库根目录到容器内 `/app`，并通过命名卷保留容器内 `node_modules` 与 `.next`，避免与宿主机（尤其 Windows）二进制不兼容；首次启动时入口脚本会在缺少依赖时执行 `npm ci`。

**与生产差异**：开发容器运行 `next dev`，并可选挂载源码以热更新；生产镜像为 `next build` 后的 **standalone** 产物，仅运行 `node server.js`，不挂载源码。

若需关闭源码挂载（与生产行为更接近），可编辑 `deploy/dev/docker-compose.yml` 删除 `volumes` 中 `../../:/app` 及相关卷后重建。

## 6. 生产环境（Docker）

在服务器**生产专用目录**中：

```bash
cd deploy/prod
cp env.example .env
# 编辑 .env，至少填写 NEXT_PUBLIC_*（会参与镜像构建内联）
chmod +x up.sh down.sh rebuild.sh   # Linux 首次可选
./rebuild.sh
```

说明：`NEXT_PUBLIC_*` 在 Next.js 中于 **构建阶段** 写入客户端产物，因此生产镜像构建会从 `deploy/prod/.env`（Compose 默认读取同目录 `.env` 做变量替换）传入 `build.args`。修改公网可见文案后需**重新 build 镜像**再 `up`。

## 7. 常用命令（等价于脚本）

开发目录 `deploy/dev`：

```bash
docker compose up -d
docker compose down
docker compose build && docker compose up -d
```

生产目录 `deploy/prod`：

```bash
docker compose up -d
docker compose down
docker compose build && docker compose up -d
```

## 8. Docker 验证（可选）

在已安装 Docker 的机器上，于仓库根目录可执行：

```bash
docker compose -f deploy/dev/docker-compose.yml config
docker compose -f deploy/prod/docker-compose.yml config
```

用于校验 Compose 语法与变量引用；完整启动仍需在各自目录准备 `.env` 后执行 `up.sh` 或 `docker compose up -d`。

若当前环境未安装 Docker CLI（例如部分本地开发机），请在**具备 Docker 的服务器或 CI Runner** 上执行上述命令或按第 5、6 节完整拉起容器验证。

## 9. 根目录 Dockerfile 说明

- **多阶段**：`deps` → `builder`（`npm run build`，`next.config` 已启用 `output: "standalone"`）→ `runner`（仅运行 standalone）。
- **development**：用于开发 Compose，默认 `next dev` 监听 `0.0.0.0:3000`。
- 构建上下文为**仓库根目录**（与 `deploy/*/docker-compose.yml` 中 `context: ../..` 一致）。
