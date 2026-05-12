export type ToolDefinition = {
  slug: string;
  name: string;
  description: string;
  status: "planned" | "beta" | "ready";
};

export const toolCatalog: ToolDefinition[] = [
  {
    slug: "json-formatter",
    name: "JSON 格式化",
    description: "粘贴 JSON 文本并快速格式化，便于调试接口数据。",
    status: "planned",
  },
  {
    slug: "base64-converter",
    name: "Base64 编解码",
    description: "支持文本与 Base64 的相互转换，覆盖日常编码调试场景。",
    status: "planned",
  },
];

export const getToolBySlug = (slug: string): ToolDefinition | undefined =>
  toolCatalog.find((tool) => tool.slug === slug);
