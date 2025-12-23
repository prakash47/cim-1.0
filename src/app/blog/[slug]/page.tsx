"use client";

import { getBlogPostBySlug, getBlogPostsByCategory, getAuthorById, getCategorySlug } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { Calendar, Clock, User, Share2, ArrowLeft, List, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState, useEffect, JSX } from "react";

// Type for table of contents items
interface TocItem {
  id: string;
  text: string;
  level: number;
}

// Function to extract headings from content
function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }

  return headings;
}

// Table of Contents Component
function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState<string>("");
  const headings = useMemo(() => extractHeadings(content), [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map((h) => document.getElementById(h.id));
      const validElements = headingElements.filter(Boolean) as HTMLElement[];

      for (let i = validElements.length - 1; i >= 0; i--) {
        const element = validElements[i];
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div
      className="rounded-xl border p-5 mb-6"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-[var(--brand-purple)]" />
        <h3 className="text-lg font-bold">Table of Contents</h3>
      </div>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeId === heading.id
              ? "bg-[color-mix(in_srgb,var(--brand-purple)_10%,transparent)] text-[var(--brand-purple)] font-medium"
              : "hover:bg-[var(--hover-bg)]"
              }`}
            style={{
              paddingLeft: `${(heading.level - 1) * 12 + 12}px`,
              color: activeId === heading.id ? "var(--brand-purple)" : "var(--secondary-text)",
            }}
          >
            {activeId === heading.id && (
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
            )}
            <span className="line-clamp-1">{heading.text}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = useMemo(() => getBlogPostBySlug(slug), [slug]);
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return getBlogPostsByCategory(post.category)
      .filter((p) => p.id !== post.id)
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <main
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        className="min-h-screen pt-20 pb-16 px-6 md:px-12 xl:px-16"
      >
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p style={{ color: "var(--secondary-text)" }} className="mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200"
            style={{
              backgroundColor: "var(--brand-purple)",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const authorSlug = post.author.name.toLowerCase().replace(/\s+/g, "-");

  // Function to convert markdown content to HTML with proper heading IDs
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let isInList = false;
    let key = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={key++} className="list-disc list-inside mb-4 space-y-2" style={{ color: "var(--secondary-text)" }}>
            {currentList.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
            ))}
          </ul>
        );
        currentList = [];
        isInList = false;
      }
    };

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (!trimmedLine) {
        flushList();
        continue;
      }

      const h1Match = trimmedLine.match(/^#\s+(.+)$/);
      const h2Match = trimmedLine.match(/^##\s+(.+)$/);
      const h3Match = trimmedLine.match(/^###\s+(.+)$/);

      if (h1Match) {
        flushList();
        const text = h1Match[1];
        const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
        elements.push(
          <h1 key={key++} id={id} className="text-3xl font-bold mb-6 mt-8 scroll-mt-24">
            {text}
          </h1>
        );
        continue;
      }

      if (h2Match) {
        flushList();
        const text = h2Match[1];
        const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
        elements.push(
          <h2 key={key++} id={id} className="text-2xl font-bold mb-4 mt-8 scroll-mt-24">
            {text}
          </h2>
        );
        continue;
      }

      if (h3Match) {
        flushList();
        const text = h3Match[1];
        const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
        elements.push(
          <h3 key={key++} id={id} className="text-xl font-bold mb-3 mt-6 scroll-mt-24">
            {text}
          </h3>
        );
        continue;
      }

      if (trimmedLine.startsWith("- ")) {
        isInList = true;
        currentList.push(trimmedLine.substring(2));
        continue;
      }

      flushList();
      elements.push(
        <p
          key={key++}
          className="mb-4 leading-relaxed"
          style={{ color: "var(--secondary-text)" }}
          dangerouslySetInnerHTML={{ __html: trimmedLine.replace(/\*\*(.+?)\*\*/g, "<strong style='color: var(--foreground)'>$1</strong>") }}
        />
      );
    }

    flushList();
    return elements;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen pb-16"
    >
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: "var(--card-bg)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: "radial-gradient(ellipse at top, var(--brand-purple), transparent 70%)",
          }}
        />

        <div className="relative px-6 md:px-12 xl:px-16 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--secondary-text)" }}>
            <Link href="/blog" className="hover:text-[var(--brand-purple)] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <Link
              href={`/blog/category/${getCategorySlug(post.category)}`}
              className="hover:text-[var(--brand-purple)] transition-colors"
            >
              {post.category}
            </Link>
            <span>/</span>
            <span className="text-[var(--foreground)] line-clamp-1">{post.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              {/* Category & Date */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Link
                  href={`/blog/category/${getCategorySlug(post.category)}`}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "var(--brand-purple)" }}
                >
                  {post.category}
                </Link>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--secondary-text)" }}>
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--secondary-text)" }}>
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                {post.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <Link
                  href={`/blog/author/${authorSlug}`}
                  className="flex items-center gap-3 group"
                >
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2"
                    style={{ borderColor: "var(--border-color)" }}
                  />
                  <div>
                    <p className="font-semibold group-hover:text-[var(--brand-purple)] transition-colors">
                      {post.author.name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                      {post.author.title}
                    </p>
                  </div>
                </Link>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 border hover:border-[var(--brand-purple)] hover:text-[var(--brand-purple)]"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--foreground)",
                  }}
                >
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
              </div>
            </div>

            {/* Right Side - Featured Image */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ backgroundColor: "var(--brand-purple)" }}
              />
              <div className="relative aspect-[5/3] rounded-2xl overflow-hidden border shadow-xl"
                style={{ borderColor: "var(--border-color)" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="px-6 md:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none rounded-2xl border p-6 md:p-10"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t" style={{ borderColor: "var(--border-color)" }}>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:border-[var(--brand-purple)]"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                      color: "var(--brand-purple)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <TableOfContents content={post.content} />
              <BlogSidebar currentPostSlug={slug} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
