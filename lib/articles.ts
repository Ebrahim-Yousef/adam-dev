import { ARTICLES } from "@/data/articles";
import { Article, Category } from "@/types/article";

export function getAllArticles(): Article[] {
  return ARTICLES.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((article) => article.featured);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  currentSlug: string,
  category: Category,
  limit = 2,
): Article[] {
  return ARTICLES.filter(
    (article) => article.slug !== currentSlug && article.category === category,
  ).slice(0, limit);
}

export function filterArticles(
  articles: Article[],
  query?: string,
  category?: string,
): Article[] {
  return articles.filter((article) => {
    const matchesQuery = query
      ? article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
      : true;

    const matchesCategory =
      category && category !== "All"
        ? article.category.toLowerCase() === category.toLowerCase()
        : true;

    return matchesQuery && matchesCategory;
  });
}
