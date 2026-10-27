import { Article } from "@/types/article";

export const ARTICLES: Article[] = [
  {
    slug: "mastering-react-19-server-components",
    title: "Mastering React Server Components & Action Patterns",
    description:
      "Deep dive into React Server Components, server actions, optimistic updates, and performance optimization.",
    category: "React",
    publishedAt: "2026-03-15",
    readingTime: "6 min read",
    featured: true,
    sections: [
      {
        heading: "Understanding Server Components",
        body: "React Server Components allow developers to render components on the server, significantly reducing client-side bundle sizes while enabling seamless data access.",
        codeSnippet: {
          language: "tsx",
          code: `// Modern Server Component example
export default async function ProfilePage({ userId }: { userId: string }) {
  const user = await fetchUserData(userId);
  return <ProfileCard user={user} />;
}`,
        },
      },
      {
        heading: "Handling Actions & State",
        body: "Server Actions provide a seamless bridge between client UI events and server execution without manually fetching REST endpoints.",
      },
    ],
  },
  {
    slug: "nextjs-app-router-architecture",
    title: "Architecting Large-Scale Apps with Next.js App Router",
    description:
      "Best practices for directory structure, route groups, parallel routes, and streaming in Next.js.",
    category: "Next.js",
    publishedAt: "2026-03-10",
    readingTime: "8 min read",
    featured: true,
    sections: [
      {
        heading: "Route Organization",
        body: "Grouping routes using parentheses allows clean logical separation without altering URL path segments.",
        codeSnippet: {
          language: "text",
          code: `src/app/
├── (auth)/
│   ├── login/
│   └── register/
└── (dashboard)/
    ├── overview/
    └── settings/`,
        },
      },
    ],
  },
  {
    slug: "typescript-advanced-generics-for-react",
    title: "Advanced TypeScript Generics for React Developers",
    description:
      "Learn how to write strongly-typed polymorphic components and dynamic utility types in TypeScript.",
    category: "TypeScript",
    publishedAt: "2026-02-28",
    readingTime: "7 min read",
    featured: true,
    sections: [
      {
        heading: "Polymorphic Components",
        body: "Polymorphic components allow you to pass an 'as' prop to dictate which underlying HTML element or component is rendered.",
        codeSnippet: {
          language: "tsx",
          code: `type ButtonProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function Button<T extends React.ElementType = 'button'>({ as, ...props }: ButtonProps<T>) {
  const Component = as || 'button';
  return <Component {...props} />;
}`,
        },
      },
    ],
  },
  {
    slug: "tailwind-css-v4-modern-design-systems",
    title: "Building Modern Design Systems with Tailwind CSS",
    description:
      "How to structure CSS variables, design tokens, and utility classes for scalable theme management.",
    category: "Tailwind CSS",
    publishedAt: "2026-02-20",
    readingTime: "5 min read",
    featured: false,
    sections: [
      {
        heading: "CSS Variables Integration",
        body: "Tailwind CSS pairs exceptionally well with native CSS custom properties for instant dark mode switching.",
      },
    ],
  },
  {
    slug: "javascript-async-await-error-handling",
    title: "Robust Error Handling Patterns in Asynchronous JavaScript",
    description:
      "Avoid unhandled rejections with clean async/await patterns, custom error classes, and try/catch boundaries.",
    category: "JavaScript",
    publishedAt: "2026-02-12",
    readingTime: "6 min read",
    featured: false,
    sections: [
      {
        heading: "Async Error Boundaries",
        body: "Structuring asynchronous operations with tuple returns eliminates nested try/catch blocks.",
        codeSnippet: {
          language: "ts",
          code: `async function safeFetch<T>(promise: Promise<T>): Promise<[T | null, Error | null]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as Error];
  }
}`,
        },
      },
    ],
  },
  {
    slug: "frontend-web-performance-core-web-vitals",
    title: "Optimizing Core Web Vitals for Frontend Applications",
    description:
      "Practical strategies for improving LCP, INP, and CLS scores in modern single-page and SSR web apps.",
    category: "Performance",
    publishedAt: "2026-02-05",
    readingTime: "9 min read",
    featured: false,
    sections: [
      {
        heading: "Improving Interaction to Next Paint (INP)",
        body: "Break down long-running JavaScript tasks using requestIdleCallback or yielding to the main thread.",
      },
    ],
  },
  {
    slug: "web-accessibility-aria-guidelines",
    title: "Practical Web Accessibility (a11y) for Web Developers",
    description:
      "Ensure your web applications are inclusive with semantic markup, ARIA roles, and keyboard navigation.",
    category: "Accessibility",
    publishedAt: "2026-01-25",
    readingTime: "6 min read",
    featured: false,
    sections: [
      {
        heading: "Keyboard Navigation and Focus Rings",
        body: "Always ensure focus states are clearly visible for keyboard users using focus-visible utilities.",
      },
    ],
  },
  {
    slug: "state-management-react-query-tanstack",
    title: "Server State vs Client State in Modern React",
    description:
      "Why server state tools like TanStack Query simplify cache management and reduce complex global stores.",
    category: "React",
    publishedAt: "2026-01-15",
    readingTime: "7 min read",
    featured: false,
    sections: [
      {
        heading: "Separation of Concerns",
        body: "Keep global client state minimal. Fetching, caching, and synchronizing server data should be delegated to specialized query managers.",
      },
    ],
  },
];
