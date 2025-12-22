"use client";

import { getBlogPostBySlug, getBlogPostsByCategory, getAuthorById } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { Calendar, Clock, User, Share2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";

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
            The blog post you're looking for doesn't exist.
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

  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen pb-5"
    >
      {/* Back Button */}
      <div className="px-6 md:px-12 xl:px-16 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-[var(--brand-purple)] hover:underline transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                  style={{
                    backgroundColor: "var(--brand-purple)",
                  }}
                >
                  {post.category}
                </span>
                <span style={{ color: "var(--secondary-text)" }} className="text-sm">
                  {formattedDate}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 pb-6 border-b" style={{ borderColor: "var(--border-color)" }}>
                <Link
                  href={`/blog/author/${post.author.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center space-x-3 group"
                >
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold group-hover:text-[var(--brand-purple)] transition-colors">
                      {post.author.name}
                    </p>
                    <p style={{ color: "var(--secondary-text)" }} className="text-sm">
                      Author
                    </p>
                  </div>
                </Link>

                <div className="flex items-center space-x-2" style={{ color: "var(--secondary-text)" }}>
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime} min read</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        });
                      }
                    }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[var(--hover-bg)]"
                  >
                    <Share2 className="w-5 h-5 text-[var(--brand-purple)]" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-invert max-w-none mb-12"
              style={{
                "--tw-prose-body": "var(--foreground)",
                "--tw-prose-headings": "var(--foreground)",
                "--tw-prose-links": "var(--brand-purple)",
                "--tw-prose-code": "var(--brand-purple)",
                "--tw-prose-hr": "var(--border-color)",
              } as React.CSSProperties}
            >
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {paragraph.replace("# ", "")}
                    </h1>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-6 mb-2">
                      {paragraph.replace("- ", "")}
                    </li>
                  );
                }
                if (paragraph.trim() === "") {
                  return <div key={index} className="h-4" />;
                }
                return (
                  <p key={index} className="mb-4 leading-relaxed text-base">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mb-12 pb-12 border-b" style={{ borderColor: "var(--border-color)" }}>
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border hover:border-[var(--brand-purple)]"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                      color: "var(--brand-purple)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar currentPostSlug={slug} />
          </div>
        </div>
      </div>
    </main>
  );
}
