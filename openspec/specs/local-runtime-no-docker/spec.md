# local-runtime-no-docker Specification

## Purpose
TBD - created by archiving change multi-env-docker-deployment. Update Purpose after archive.
## Requirements
### Requirement: 本地无 Docker 可运行

系统 SHALL 支持开发者在未安装 Docker 的机器上，通过包管理器安装依赖并启动开发服务器完成日常开发。

#### Scenario: 本地启动成功

- **WHEN** 开发者在项目根目录执行依赖安装与开发启动命令
- **THEN** 应用 SHALL 在本地开发端口可访问，且该流程文档中不得将 Docker 列为前置条件

### Requirement: 本地质量检查脚本

系统 SHALL 提供可在本地直接执行的静态检查与生产构建命令，且不依赖容器运行时。

#### Scenario: 本地执行 lint 与 build

- **WHEN** 开发者在本地执行 lint 与 build 脚本
- **THEN** 命令 SHALL 在无需 Docker 的情况下完成执行并返回明确结果

