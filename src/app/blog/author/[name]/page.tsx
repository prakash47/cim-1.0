"use client";

import { getAuthorByName, getBlogPostsByAuthor } from "@/data/blog";
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

      {/* Author Profile Section */}
      <section className="px-6 md:px-12 xl:px-16 mb-16">
        <div
          className="rounded-2xl border p-8 md:p-12 overflow-hidden relative"
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
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={150}
                  height={150}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4"
                  style={{
                    borderColor: "var(--brand-purple)",
                  }}
                />
              </div>

              {/* Author Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{author.name}</h1>
                <p className="text-lg mb-4" style={{ color: "var(--secondary-text)" }}>
                  {author.bio}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-6 justify-center md:justify-start">
                  <div>
                    <p className="text-2xl font-bold text-[var(--brand-purple)]">
                      {authorPosts.length}
                    </p>
                    <p style={{ color: "var(--secondary-text)" }} className="text-sm">
                      {authorPosts.length === 1 ? "Post" : "Posts"}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[var(--brand-purple)]">
                      {new Set(authorPosts.map((p) => p.category)).size}
                    </p>
                    <p style={{ color: "var(--secondary-text)" }} className="text-sm">
                      Categories
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 justify-center md:justify-start">
                  {author.email && (
                    <a
                      href={`mailto:${author.email}`}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                        color: "var(--brand-purple)",
                      }}
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  {author.social?.linkedin && (
                    <a
                      href={author.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
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
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
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
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                        color: "var(--brand-purple)",
                      }}
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
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
