import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
}

export default function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const router = useRouter();
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const authorSlug = post.author.name.toLowerCase().replace(/\s+/g, "-");

  const handleCardClick = () => {
    router.push(`/blog/${post.slug}`);
  };

  const handleAuthorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/blog/author/${authorSlug}`);
  };

  if (variant === "featured") {
    return (
      <article
        onClick={handleCardClick}
        className="group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:border-[var(--brand-purple)]"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: "var(--brand-purple)" }}>
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 group-hover:text-[var(--brand-purple)] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--secondary-text)" }}>
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4 pb-4 border-b" style={{ borderColor: "var(--border-color)" }}>
            <div className="flex items-center space-x-4 text-xs" style={{ color: "var(--secondary-text)" }}>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              onClick={handleAuthorClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium hover:text-[var(--brand-purple)] transition-colors">
                {post.author.name}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[var(--brand-purple)]" />
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article
        onClick={handleCardClick}
        className="group cursor-pointer flex gap-4 p-4 rounded-lg border transition-all duration-300 hover:bg-[var(--hover-bg)]"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold line-clamp-2 mb-2 group-hover:text-[var(--brand-purple)] transition-colors">
            {post.title}
          </h4>
          <div className="flex items-center space-x-3 text-xs" style={{ color: "var(--secondary-text)" }}>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article
      onClick={handleCardClick}
      className="group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-[var(--brand-purple)]"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{
            backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
            color: "var(--brand-purple)",
          }}>
            {post.category}
          </span>
          <span className="text-xs flex items-center space-x-1" style={{ color: "var(--secondary-text)" }}>
            <Clock className="w-3 h-3" />
            <span>{post.readTime}m</span>
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-[var(--brand-purple)] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--secondary-text)" }}>
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
          <div
            onClick={handleAuthorClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs font-medium hover:text-[var(--brand-purple)] transition-colors">
              {post.author.name}
            </span>
          </div>
          <span className="text-xs" style={{ color: "var(--secondary-text)" }}>
            {formattedDate}
          </span>
        </div>
      </div>
    </article>
  );
}

