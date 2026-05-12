# IceBox（冰盒）

基于 NextJS（App Router）的工具网站基础框架，包含：

- 工具首页入口（工具列表）
- 工具详情页动态路由骨架（`/tools/[slug]`）
- TypeScript + ESLint 工程基线
- 目录结构与环境变量示例

## Getting Started

## 快速开始

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

构建生产包：

```bash
npm run build
```

启动生产服务：

```bash
npm run start
```

运行静态检查：

```bash
npm run lint
```

默认访问地址：`http://localhost:3000`

## 环境变量

复制示例文件并按需修改：

```bash
cp .env.example .env.local
```

示例变量：

- `NEXT_PUBLIC_SITE_NAME`：站点名称
- `NEXT_PUBLIC_SITE_DESCRIPTION`：站点描述

## 目录约定

请参考 `docs/structure.md`。
