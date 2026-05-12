import Link from "next/link";
import type { ToolDefinition } from "@/lib/tools";

const statusLabel: Record<ToolDefinition["status"], string> = {
  planned: "规划中",
  beta: "测试中",
  ready: "可用",
};

type ToolCardProps = {
  tool: ToolDefinition;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="tool-card">
      <div className="tool-card__meta">
        <span className="tool-status">{statusLabel[tool.status]}</span>
      </div>
      <h2>{tool.name}</h2>
      <p>{tool.description}</p>
      <Link href={`/tools/${tool.slug}`} className="tool-card__link">
        打开工具
      </Link>
    </article>
  );
}
