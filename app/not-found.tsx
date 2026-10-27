import Link from "next/link";
import { FileQuestion, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        {/* الأيقونة */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 border border-blue-100 dark:border-blue-900/50 shadow-sm">
          <FileQuestion className="w-10 h-10" />
        </div>

        {/* النصوص والرسالة */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-(--text-primary) tracking-tight">
            404
          </h1>
          <h2 className="text-xl font-bold text-(--text-primary)">
            Page not found
          </h2>
          <p className="text-sm text-(--text-secondary) max-w-sm mx-auto">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved to another URL.
          </p>
        </div>

        {/* أزرار التوجيه */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-(--border-color) bg-(--bg-card) text-(--text-primary) text-sm font-semibold hover:bg-(--bg-secondary) transition-colors"
          >
            Explore Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
