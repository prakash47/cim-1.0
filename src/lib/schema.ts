import { BlogPost, Author } from "@/data/blog";

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.image,
      url: `https://cim.com/blog/author/${post.author.name.toLowerCase().replace(/\s+/g, "-")}`,
    },
    publisher: {
      "@type": "Organization",
      name: "CIM",
      logo: {
        "@type": "ImageObject",
        url: "https://cim.com/images/cim_Logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cim.com/blog/${post.slug}`,
    },
    articleBody: post.content,
    keywords: post.tags.join(", "),
  };
}

export function generateBlogCollectionSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: url,
    publisher: {
      "@type": "Organization",
      name: "CIM",
      logo: {
        "@type": "ImageObject",
        url: "https://cim.com/images/cim_Logo.png",
      },
    },
  };
}

export function generateAuthorSchema(author: Author, postCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.bio,
    image: author.image,
    email: author.email,
    url: `https://cim.com/blog/author/${author.name.toLowerCase().replace(/\s+/g, "-")}`,
    sameAs: [
      author.social?.twitter,
      author.social?.linkedin,
      author.social?.github,
    ].filter(Boolean),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CIM",
    url: "https://cim.com",
    logo: "https://cim.com/images/cim_Logo.png",
    description: "Web Design, Mobile App Development, UI/UX Branding, and Digital Marketing Services",
    sameAs: [
      "https://twitter.com/cim",
      "https://linkedin.com/company/cim",
      "https://instagram.com/cim",
    ],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
