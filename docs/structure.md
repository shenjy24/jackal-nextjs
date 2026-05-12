# 前端目录结构说明

本项目基于 NextJS App Router，当前约定如下：

- `src/app/`：路由层，包含首页与 `tools/[slug]` 工具详情页。
- `src/components/`：可复用展示组件。
- `src/lib/`：工具函数与工具注册数据。
- `public/`：静态资源与占位素材。

新增工具建议流程：

1. 在 `src/lib/tools.ts` 中登记工具元信息（`slug`、名称、描述、状态）。
2. 在 `src/app/tools/[slug]/page.tsx` 中根据 `slug` 扩展工具渲染逻辑。
3. 如工具逻辑复杂，可在 `src/components/` 下新增独立组件进行拆分。
