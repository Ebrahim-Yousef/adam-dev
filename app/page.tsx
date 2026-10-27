import Link from "next/link";
// import { ArrowRight, Code2, Cpu, Zap, ShieldCheck } from "lucide-react";
import { ArrowRight, Zap } from "lucide-react";
import { getFeaturedArticles, getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/blog/ArticleCard";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const latestArticles = getAllArticles().slice(0, 3);

  const categories = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Performance",
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 border-b border-(--border-color) bg-(--bg-secondary)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <Zap className="w-3.5 h-3.5" />
              <span>Engineering Publication & Technical Guides</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-(--text-primary) leading-tight">
              Build better apps with{" "}
              <span className="text-blue-600">precision & scale</span>.
            </h1>

            <p className="text-lg sm:text-xl text-(--text-secondary) leading-relaxed max-w-2xl mx-auto">
              Deep architectural insights, advanced patterns, and performance
              strategies for modern frontend engineers and web developers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                Explore Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/bookmarks"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-(--border-color) bg-(--bg-card) text-(--text-primary) font-semibold hover:bg-(--bg-secondary) transition-colors"
              >
                View Bookmarks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary)">
              Featured Engineering
            </h2>
            <p className="text-sm text-(--text-secondary) mt-1">
              Hand-picked foundational guides for modern developers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Category Shortcuts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl border border-(--border-color) bg-(--bg-secondary)">
          <h3 className="text-xl font-bold text-(--text-primary) mb-4 text-center">
            Explore by Technology
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className="px-4 py-2 rounded-lg border border-(--border-color) bg-(--bg-card) text-sm font-medium text-(--text-primary) hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary)">
              Latest Publications
            </h2>
            <p className="text-sm text-(--text-secondary) mt-1">
              Recent articles straight from the editor.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
