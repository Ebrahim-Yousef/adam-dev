"use client";

import { useSyncExternalStore, useMemo } from "react";
import Link from "next/link";
import { Bookmark, ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/blog/ArticleCard";

const emptySubscribe = () => () => {};

export default function BookmarksPage() {
  const bookmarksJson = useSyncExternalStore(
    emptySubscribe,
    () => localStorage.getItem("adam_dev_bookmarks") || "[]",
    () => "[]",
  );

  // تثبيت مرجع المقالات المحفوظة لمنع مشاكل إعادة الـ Reconciliation
  const bookmarkedArticles = useMemo(() => {
    try {
      const savedSlugs: string[] = JSON.parse(bookmarksJson);
      const all = getAllArticles();
      return all.filter((article) => savedSlugs.includes(article.slug));
    } catch {
      return [];
    }
  }, [bookmarksJson]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="max-w-2xl space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-(--text-primary) tracking-tight">
          Saved Bookmarks
        </h1>
        <p className="text-base text-(--text-secondary)">
          Access your personal collection of saved technical articles and
          guides.
        </p>
      </div>

      {bookmarkedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-4 rounded-2xl border border-dashed border-(--border-color) bg-(--bg-secondary)">
          <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 mb-4">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-(--text-primary) mb-1">
            No saved articles yet
          </h3>
          <p className="text-sm text-(--text-secondary) max-w-sm mx-auto mb-6">
            You haven&apos;t bookmarked any articles yet. Browse our blog and
            click &quot;Save Article&quot; to keep articles for later.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
