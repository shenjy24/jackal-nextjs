## 1. 文档与目录约定

- [x] 1.1 在 `README` 或 `docs` 中编写「本地 / 开发 / 生产」三层说明及服务器双目录部署约定
- [x] 1.2 明确开发与生产 compose 的项目名、网络名或容器前缀，避免同机冲突

## 2. 本地环境（无 Docker）

- [x] 2.1 核对并文档化 `npm install`、`npm run dev`、`npm run lint`、`npm run build` 的本地使用方式
- [x] 2.2 确认文档中不将 Docker 列为本地开发前置条件

## 3. Docker 构建与编排

- [x] 3.1 新增根目录或多阶段 `Dockerfile`，完成生产构建与精简运行镜像
- [x] 3.2 在 `deploy/dev`（或约定目录）新增开发用 `docker-compose` 及示例环境文件
- [x] 3.3 在 `deploy/prod`（或约定目录）新增生产用 `docker-compose` 及示例环境文件
- [x] 3.4 可选：为开发环境提供源码卷挂载说明或覆盖文件，与生产行为差异写入文档

## 4. 环境变量与脚本

- [x] 4.1 补充各环境示例 env（如 `.env.development.example`、`.env.production.example` 或 compose 用 `env.example`），禁止提交真实密钥
- [x] 4.2 提供 `deploy/dev` 与 `deploy/prod` 下的启动/停止/重建辅助脚本（Shell 或文档内等价命令块）

## 5. 验证

- [x] 5.1 在干净环境中按文档执行本地流程自检（无 Docker）
- [x] 5.2 在具备 Docker 的环境按文档分别验证开发与生产 compose 可启动（可用 CI 或手动说明）
