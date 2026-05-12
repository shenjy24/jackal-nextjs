## Why

当前项目将定位为工具网站，需要支持多个独立工具页面的持续扩展。先建立 NextJS 前端基础框架与工具站信息架构，可以降低新工具接入成本，并统一页面体验与工程规范。

## What Changes

- 初始化一个基于 NextJS（App Router）的 Web 前端项目基础框架。
- 提供标准化目录结构（页面路由、公共组件、工具函数、静态资源）。
- 集成基础工程能力：TypeScript、ESLint、基础脚本（dev/build/start/lint）。
- 提供工具网站首页与工具详情页的基础页面骨架，作为后续工具功能开发模板。
- 预留环境变量与配置管理入口，便于后续对接后端接口与部署环境。
- 预留工具模块注册与展示区域，支持后续按模块扩展多个工具。

## Capabilities

### New Capabilities
- `nextjs-project-bootstrap`: 定义 NextJS 前端基础工程的初始化、目录结构与启动能力。
- `frontend-foundation-layout`: 定义全局布局、基础页面骨架与公共样式入口能力。
- `frontend-engineering-baseline`: 定义 TypeScript、Lint 与脚本等工程化基线能力。
- `tool-site-information-architecture`: 定义工具网站首页、工具列表入口与工具详情页路由骨架能力。

### Modified Capabilities
无

## Impact

- 受影响代码：新增前端应用源码目录、配置文件与脚手架文件。
- 受影响依赖：新增 NextJS、React、TypeScript 及配套开发依赖。
- 受影响系统：前端本地开发流程与后续 CI 构建流程将基于该框架执行。
- API 影响：本次不引入具体业务 API，仅提供后续对接的结构与入口。
