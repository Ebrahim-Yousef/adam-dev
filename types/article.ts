export type Category =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "Tailwind CSS"
  | "JavaScript"
  | "Performance"
  | "Accessibility";

export interface ArticleSection {
  heading: string;
  body: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: Category;
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  sections: ArticleSection[];
}
