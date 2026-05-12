import { ToolCard } from "@/components/tool-card";
import { toolCatalog } from "@/lib/tools";

export default function Home() {
  return (
    <div className="page-shell">
      <main className="container">
        <header className="hero">
          <p className="hero__tag">IceBox | 冰盒</p>
          <h1>一个可扩展的在线工具网站</h1>
          <p>
            当前版本提供基础站点框架、工具列表入口和工具详情页路由骨架，
            后续可以持续接入更多独立工具能力。
          </p>
        </header>

        <section className="section">
          <div className="section__title">
            <h2>工具列表</h2>
            <p>选择一个工具进入详情页，后续可在详情页逐步接入完整功能。</p>
          </div>
          <div className="tool-grid">
            {toolCatalog.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
