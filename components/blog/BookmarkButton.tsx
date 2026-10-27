"use client";

import { useSyncExternalStore } from "react";
import { Bookmark } from "lucide-react";

interface BookmarkButtonProps {
  slug: string;
}

// دالة اشتراك حقيقية لتنبيه الـ Store عند حدوث أي تغيير في المفضلة
const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("adam_bookmarks_updated", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("adam_bookmarks_updated", callback);
  };
};

export function BookmarkButton({ slug }: BookmarkButtonProps) {
  const isBookmarked = useSyncExternalStore(
    subscribe,
    () => {
      if (typeof window === "undefined") return false;
      try {
        const bookmarks: string[] = JSON.parse(
          localStorage.getItem("adam_dev_bookmarks") || "[]",
        );
        return bookmarks.includes(slug);
      } catch {
        return false;
      }
    },
    () => false, // القيمة الموحدة للـ SSR لمنع أخطاء الـ Hydration
  );

  const toggleBookmark = () => {
    try {
      const bookmarks: string[] = JSON.parse(
        localStorage.getItem("adam_dev_bookmarks") || "[]",
      );
      let updated: string[];

      if (bookmarks.includes(slug)) {
        updated = bookmarks.filter((s) => s !== slug);
      } else {
        updated = [...bookmarks, slug];
      }

      localStorage.setItem("adam_dev_bookmarks", JSON.stringify(updated));

      // إطلاق حدث لتشغيل الـ subscribe وتحديث واجهة الزر فوراً
      window.dispatchEvent(new Event("adam_bookmarks_updated"));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      onClick={toggleBookmark}
      aria-label="Bookmark article"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-colors ${
        isBookmarked
          ? "bg-blue-600 text-white border-blue-600"
          : "border-(--border-color) bg-(--bg-card) text-(--text-primary) hover:bg-(--bg-secondary)"
      }`}
    >
      <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
      <span>{isBookmarked ? "Saved" : "Save Article"}</span>
    </button>
  );
}
