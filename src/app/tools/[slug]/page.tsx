import Link from "next/link";
import { notFound } from "next/navigation";
import { getToolBySlug } from "@/lib/tools";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="page-shell">
      <main className="container">
        <div className="tool-detail__back">
          <Link href="/">返回工具首页</Link>
        </div>
        <article className="tool-detail">
          <h1>{tool.name}</h1>
          <p>{tool.description}</p>
          <section>
            <h2>功能状态</h2>
            <p>当前为占位页面，后续将在该路由下逐步实现工具完整能力。</p>
          </section>
        </article>
      </main>
    </div>
  );
}
