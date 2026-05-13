## ADDED Requirements

### Requirement: 开发环境容器编排

系统 SHALL 提供开发环境专用的 Docker 编排定义（例如 Compose 文件），使运维或开发者在服务器开发目录内可通过标准命令构建并启动服务。

#### Scenario: 开发目录启动

- **WHEN** 在服务器开发专用目录内使用文档给出的 compose 命令启动
- **THEN** 开发实例 SHALL 成功运行并对外提供可访问的 HTTP 服务

### Requirement: 开发环境配置注入

系统 SHALL 支持通过开发目录内的环境文件或等价机制注入开发环境变量，且该机制与生产环境配置路径分离。

#### Scenario: 开发变量独立

- **WHEN** 仅配置开发环境变量文件
- **THEN** 生产目录内的部署不得自动读取该开发文件作为唯一配置来源
