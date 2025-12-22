import { Metadata } from "next";

export const blogMetadata: Metadata = {
  title: "Blog & Insights | CIM - Digital Solutions",
  description:
    "Discover the latest trends, strategies, and insights in web development, digital marketing, UI/UX design, and business growth.",
  keywords: [
    "blog",
    "web development",
    "digital marketing",
    "UI/UX design",
    "SEO",
    "mobile apps",
    "AI automation",
  ],
  openGraph: {
    title: "Blog & Insights | CIM",
    description:
      "Discover the latest trends, strategies, and insights in web development, digital marketing, UI/UX design, and business growth.",
    type: "website",
    url: "https://cim.com/blog",
  },
};

export function generateBlogPostMetadata(
  title: string,
  excerpt: string,
  image: string,
  slug: string,
  publishedAt: string,
  author: string
): Metadata {
  const url = `https://cim.com/blog/${slug}`;

  return {
    title: `${title} | CIM Blog`,
    description: excerpt,
    keywords: ["blog", "article", "insights"],
    authors: [{ name: author }],
    openGraph: {
      title: title,
      description: excerpt,
      type: "article",
      url: url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: publishedAt,
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: excerpt,
      images: [image],
      creator: "@cim",
    },
  };
}

export function generateCategoryMetadata(category: string, postCount: number): Metadata {
  const url = `https://cim.com/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`;

  return {
    title: `${category} Articles | CIM Blog`,
    description: `Explore ${postCount} articles about ${category}. Learn from our experts on the latest trends and best practices.`,
    keywords: [category, "blog", "articles"],
    openGraph: {
      title: `${category} Articles | CIM Blog`,
      description: `Explore ${postCount} articles about ${category}.`,
      type: "website",
      url: url,
    },
  };
}

export function generateAuthorMetadata(
  name: string,
  bio: string,
  image: string,
  postCount: number
): Metadata {
  const url = `https://cim.com/blog/author/${name.toLowerCase().replace(/\s+/g, "-")}`;

  return {
    title: `${name} | CIM Blog`,
    description: `${bio} Read ${postCount} articles by ${name}.`,
    keywords: [name, "author", "blog"],
    openGraph: {
      title: `${name} | CIM Blog`,
      description: bio,
      type: "profile",
      url: url,
      images: [
        {
          url: image,
          width: 400,
          height: 400,
          alt: name,
        },
      ],
    },
  };
}
