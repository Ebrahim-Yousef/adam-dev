import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col justify-between p-6 rounded-xl border border-(--border-color) bg-(--bg-card) hover:border-blue-500/50 transition-all hover:shadow-lg group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            {article.category}
          </span>
          <div className="flex items-center gap-3 text-xs text-(--text-muted)">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>
        </div>

        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-xl font-bold text-(--text-primary) group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
            {article.title}
          </h3>
        </Link>

        <p className="text-sm text-(--text-secondary) line-clamp-3 mb-6 leading-relaxed">
          {article.description}
        </p>
      </div>

      <Link
        href={`/blog/${article.slug}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition-colors mt-auto"
      >
        Read Article
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </article>
  );
}
