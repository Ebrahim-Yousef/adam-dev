import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import {
  getArticleBySlug,
  getAllArticles,
  getRelatedArticles,
} from "@/lib/articles";
import { BookmarkButton } from "@/components/blog/BookmarkButton";
import { ArticleCard } from "@/components/blog/ArticleCard";

export const instant = false;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.category);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back to Blog */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-(--text-secondary) hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6 border-b border-(--border-color) pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            {article.category}
          </span>
          <div className="flex items-center gap-4">
            <BookmarkButton slug={article.slug} />
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-(--text-primary) tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-(--text-secondary) leading-relaxed">
          {article.description}
        </p>

        <div className="flex items-center gap-6 text-sm text-(--text-muted) pt-2">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {article.publishedAt}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {article.readingTime}
          </span>
        </div>
      </header>

      {/* Article Content Sections */}
      <div className="space-y-10">
        {article.sections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-2xl font-bold text-(--text-primary) tracking-tight">
              {section.heading}
            </h2>
            <p className="text-base text-(--text-secondary) leading-relaxed">
              {section.body}
            </p>

            {section.codeSnippet && (
              <div className="my-6 rounded-xl overflow-hidden border border-(--border-color) bg-slate-950 text-slate-100">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-mono">
                  <span>{section.codeSnippet.language.toUpperCase()}</span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-(--border-color) pt-12 space-y-6">
          <h3 className="text-2xl font-bold text-(--text-primary)">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
