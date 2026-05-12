# IceBox（冰盒）

基于 NextJS（App Router）的工具网站基础框架，包含：

- 工具首页入口（工具列表）
- 工具详情页动态路由骨架（`/tools/[slug]`）
- TypeScript + ESLint 工程基线
- 目录结构与环境变量示例
- 本地 / 开发 / 生产三层运行说明与 Docker 部署文件（见 `docs/docker-deploy.md`）

## 环境与部署（概览）

| 环境 | 是否需要 Docker | 说明 |
|------|-----------------|------|
| **本地** | 否 | 仓库根目录直接使用 npm，**不以 Docker 为前置条件**。 |
| **开发** | 是 | 在服务器**独立目录**（如 `/opt/icebox-dev`）中使用 `deploy/dev` 下的 Compose。 |
| **生产** | 是 | 在服务器**另一独立目录**（如 `/opt/icebox-prod`）中使用 `deploy/prod` 下的 Compose。 |

开发与生产在同机并存时，Compose 项目名、网络名与默认端口已区分（详见 `docs/docker-deploy.md`）。

## 快速开始（本地，无 Docker）

前置：安装 **Node.js** 与 **npm**（建议主版本与 `Dockerfile` 中一致，当前为 **22**）。

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

运行静态检查：

```bash
npm run lint
```

构建生产包：

```bash
npm run build
```

启动生产构建结果（用于本地冒烟）：

```bash
npm run start
```

默认访问地址：`http://localhost:3000`

## Docker 部署（开发 / 生产）

完整步骤、目录隔离约定、端口与网络命名见：**[docs/docker-deploy.md](docs/docker-deploy.md)**。

开发目录快速入口：

```bash
cd deploy/dev
cp env.example .env
# Linux 可选：chmod +x up.sh down.sh rebuild.sh
./up.sh
```

生产目录快速入口：

```bash
cd deploy/prod
cp env.example .env
./rebuild.sh
```

## 环境变量

本地可任选其一复制后按需修改：

```bash
cp .env.example .env.local
# 或
cp .env.development.example .env.local
```

Docker 各环境使用 `deploy/dev/env.example` 与 `deploy/prod/env.example`：复制为同目录下的 `.env`（**勿将真实密钥提交仓库**）。

示例变量含义：

- `NEXT_PUBLIC_SITE_NAME`：站点名称
- `NEXT_PUBLIC_SITE_DESCRIPTION`：站点描述

## 目录约定

- 应用源码与路由：见 [docs/structure.md](docs/structure.md)
- 部署与容器说明：见 [docs/docker-deploy.md](docs/docker-deploy.md)
