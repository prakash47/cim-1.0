"use client";

import { getAuthorByName, getBlogPostsByAuthor, getCategorySlug } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import { Mail, Linkedin, Twitter, Github, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function AuthorPage() {
  const params = useParams();
  const name = params.name as string;

  const authorName = name.replace(/-/g, " ");
  const author = useMemo(() => getAuthorByName(authorName), [authorName]);
  const authorPosts = useMemo(() => {
    if (!author) return [];
    return getBlogPostsByAuthor(author.id);
  }, [author]);

  if (!author) {
    return (
      <main
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        className="min-h-screen pt-20 pb-16 px-6 md:px-12 xl:px-16"
      >
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Author Not Found</h1>
          <p style={{ color: "var(--secondary-text)" }} className="mb-8">
            The author you're looking for doesn't exist.
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

  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen pb-5"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: "radial-gradient(ellipse at top, var(--brand-purple), transparent 70%)",
          }}
        />

        <div className="relative px-6 md:px-12 xl:px-16 py-8 md:py-12">

          {/* Author Profile Card */}
          <div
            className="rounded-3xl border p-8 md:p-10 overflow-hidden relative"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
              }}
            />

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Left: Author Image & Quick Actions */}
                <div className="flex flex-col items-center lg:items-center">
                  {/* Author Image with Ring */}
                  <div className="relative mb-6 ">
                    <div
                      className="absolute -inset-2 rounded-full opacity-30"
                      style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))" }}
                    />
                    <Image
                      src={author.image}
                      alt={author.name}
                      width={180}
                      height={180}
                      className="relative w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4"
                      style={{ borderColor: "var(--background)" }}
                    />
                    {/* Verified Badge */}
                    <div
                      className="absolute bottom-2 right-2 w-10 h-10 rounded-full flex items-center justify-center border-4"
                      style={{
                        backgroundColor: "var(--brand-purple)",
                        borderColor: "var(--background)"
                      }}
                      title="Verified Author"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mb-4">
                    {author.social?.linkedin && (
                      <a
                        href={author.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border hover:border-[var(--brand-purple)]"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                          borderColor: "var(--border-color)",
                          color: "var(--brand-purple)",
                        }}
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {author.social?.twitter && (
                      <a
                        href={author.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border hover:border-[var(--brand-purple)]"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                          borderColor: "var(--border-color)",
                          color: "var(--brand-purple)",
                        }}
                        title="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {author.social?.github && (
                      <a
                        href={author.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border hover:border-[var(--brand-purple)]"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                          borderColor: "var(--border-color)",
                          color: "var(--brand-purple)",
                        }}
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Contact Button */}
                  {author.email && (
                    <a
                      href={`mailto:${author.email}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
                      style={{ backgroundColor: "var(--brand-purple)" }}
                    >
                      <Mail className="w-4 h-4" />
                      Get in Touch
                    </a>
                  )}
                </div>

                {/* Center & Right: Author Details */}
                <div className="lg:col-span-2">
                  {/* Name & Title */}
                  <div className="text-center lg:text-left mb-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{author.name}</h1>
                    <p className="text-lg font-medium" style={{ color: "var(--brand-purple)" }}>
                      Content Writer & Industry Expert
                    </p>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "var(--secondary-text)" }}>
                      About
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                      {author.bio}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "var(--secondary-text)" }}>
                      Expertise
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(authorPosts.map((p) => p.category))).map((category) => (
                        <Link
                          key={category}
                          href={`/blog/category/${getCategorySlug(category)}`}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border hover:border-[var(--brand-purple)] hover:text-[var(--brand-purple)]"
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                            color: "var(--brand-purple)",
                            borderColor: "var(--border-color)",
                          }}
                        >
                          {category}
                        </Link>
                      ))}
                      {authorPosts
                        .flatMap((p) => p.tags)
                        .filter((tag, idx, arr) => arr.indexOf(tag) === idx)
                        .slice(0, 6)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                            style={{
                              borderColor: "var(--border-color)",
                              color: "var(--secondary-text)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className="p-4 rounded-xl text-center border"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 5%, transparent)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-purple)" }}>
                        {authorPosts.length}
                      </div>
                      <div className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                        {authorPosts.length === 1 ? "Article" : "Articles"}
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-xl text-center border"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 5%, transparent)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-cyan)" }}>
                        {new Set(authorPosts.map((p) => p.category)).size}
                      </div>
                      <div className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                        Categories
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-xl text-center border"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 5%, transparent)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-purple)" }}>
                        {authorPosts.reduce((acc, p) => acc + p.readTime, 0)}
                      </div>
                      <div className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                        Min Read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author's Posts */}
      <section className="px-6 md:px-12 xl:px-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Articles by {author.name}</h2>
          <p style={{ color: "var(--secondary-text)" }}>
            {authorPosts.length} {authorPosts.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {authorPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div
            className="rounded-xl border p-12 text-center"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <h3 className="text-lg font-semibold mb-2">No articles yet</h3>
            <p style={{ color: "var(--secondary-text)" }}>
              This author hasn't published any articles yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
