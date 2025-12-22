"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Search, X, Clock, Tag, User, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { blogPosts, getAllTags } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  value?: string;
}

interface Suggestion {
  type: "post" | "tag" | "author" | "category";
  title: string;
  subtitle?: string;
  url: string;
  image?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search articles, tags, authors...", value = "" }: SearchBarProps) {
  const [query, setQuery] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync internal query state with external value prop
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Generate suggestions based on query
  const suggestions = useMemo((): Suggestion[] => {
    if (!query || query.length < 2) return [];

    const q = query.toLowerCase();
    const results: Suggestion[] = [];

    // Search posts
    const matchingPosts = blogPosts
      .filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q)
      )
      .slice(0, 4)
      .map((post) => ({
        type: "post" as const,
        title: post.title,
        subtitle: `${post.readTime} min read • ${post.category}`,
        url: `/blog/${post.slug}`,
        image: post.image,
      }));
    results.push(...matchingPosts);

    // Search tags
    const allTags = getAllTags();
    const matchingTags = allTags
      .filter((tag) => tag.toLowerCase().includes(q))
      .slice(0, 3)
      .map((tag) => ({
        type: "tag" as const,
        title: tag,
        subtitle: `Browse ${tag} articles`,
        url: `/blog?tag=${encodeURIComponent(tag)}`,
      }));
    results.push(...matchingTags);

    // Search authors
    const uniqueAuthors = Array.from(new Set(blogPosts.map((p) => JSON.stringify(p.author)))).map((a) =>
      JSON.parse(a)
    );
    const matchingAuthors = uniqueAuthors
      .filter((author) => author.name.toLowerCase().includes(q))
      .slice(0, 2)
      .map((author) => ({
        type: "author" as const,
        title: author.name,
        subtitle: "View author profile",
        url: `/blog/author/${author.name.toLowerCase().replace(/\s+/g, "-")}`,
        image: author.image,
      }));
    results.push(...matchingAuthors);

    // Search categories
    const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
    const matchingCategories = categories
      .filter((cat) => cat.toLowerCase().includes(q))
      .slice(0, 2)
      .map((cat) => ({
        type: "category" as const,
        title: cat,
        subtitle: `Explore ${cat} category`,
        url: `/blog/category/${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`,
      }));
    results.push(...matchingCategories);

    return results.slice(0, 10);
  }, [query]);

  // Handle input change - NO IMMEDIATE SEARCH TRIGGER
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      setSelectedIndex(-1);
      setShowSuggestions(value.length >= 2);
    },
    []
  );

  // Handle search submission (Enter key or search button)
  const handleSearch = useCallback(() => {
    if (query.trim()) {
      onSearch?.(query);
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  }, [query, onSearch]);

  // Handle clear
  const handleClear = useCallback(() => {
    setQuery("");
    setShowSuggestions(false);
    setSelectedIndex(-1);
    onSearch?.("");
    inputRef.current?.focus();
  }, [onSearch]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          window.location.href = suggestions[selectedIndex].url;
        } else {
          handleSearch();
        }
        return;
      }

      if (!showSuggestions || suggestions.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
          break;
        case "Escape":
          setShowSuggestions(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    },
    [showSuggestions, suggestions, selectedIndex, handleSearch]
  );

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get icon for suggestion type
  const getIcon = (type: Suggestion["type"]) => {
    switch (type) {
      case "post":
        return <Clock className="w-4 h-4" />;
      case "tag":
        return <Tag className="w-4 h-4" />;
      case "author":
        return <User className="w-4 h-4" />;
      case "category":
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  // Get type badge color
  const getTypeBadge = (type: Suggestion["type"]) => {
    const badges = {
      post: { label: "Article", color: "var(--brand-purple)" },
      tag: { label: "Tag", color: "var(--brand-cyan)" },
      author: { label: "Author", color: "#10b981" },
      category: { label: "Category", color: "#f59e0b" },
    };
    return badges[type];
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="relative rounded-xl border-2 transition-all duration-300 shadow-sm"
        style={{
          backgroundColor: "var(--background)",
          borderColor: isFocused ? "var(--brand-purple)" : "var(--border-color)",
          boxShadow: isFocused
            ? "0 0 0 3px color-mix(in srgb, var(--brand-purple) 10%, transparent)"
            : "none",
        }}
      >
        {/* Search Icon */}
        <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Search
            className="w-4 h-4 lg:w-5 lg:h-5 transition-all duration-300"
            style={{
              color: "var(--brand-purple)",
              opacity: isFocused ? 1 : 0.7
            }}
          />
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => {
            setIsFocused(true);
            if (query.length >= 2) setShowSuggestions(true);
          }}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 lg:pl-12 pr-16 lg:pr-20 py-2.5 lg:py-3 rounded-xl text-sm lg:text-base font-medium focus:outline-none transition-all duration-200"
          style={{
            backgroundColor: "transparent",
            color: "var(--foreground)",
          }}
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          aria-expanded={showSuggestions}
        />

        {/* Action Buttons */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {query && (
            <button
              onClick={handleClear}
              className="p-1.5 lg:p-2 rounded-lg transition-all duration-200 hover:bg-[var(--hover-bg)] group"
              aria-label="Clear search"
              type="button"
            >
              <X
                className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:rotate-90"
                style={{ color: "var(--secondary-text)" }}
              />
            </button>
          )}

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-lg font-semibold text-white text-xs lg:text-sm transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center gap-1"
            style={{
              backgroundColor: query.length >= 2 ? "var(--brand-purple)" : "var(--secondary-text)",
              opacity: query.length >= 2 ? 1 : 0.5,
              cursor: query.length >= 2 ? "pointer" : "not-allowed",
            }}
            disabled={query.length < 2}
            aria-label="Search"
            type="button"
          >
            <span className="hidden sm:inline">Go</span>
            <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </button>
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          id="search-suggestions"
          role="listbox"
          className="absolute top-full left-0 right-0 mt-2 rounded-xl border-2 overflow-hidden z-[200] shadow-2xl animate-slideDown"
          style={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border-color)",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 border-b flex items-center justify-between"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" style={{ color: "var(--brand-purple)" }} />
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--brand-purple)" }}>
                Quick Results
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                color: "var(--brand-purple)"
              }}
            >
              {suggestions.length}
            </span>
          </div>

          {/* Suggestions List */}
          <div className="p-2">
            <div className="max-h-[300px] lg:max-h-[400px] overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                {suggestions.map((suggestion, index) => {
                  const badge = getTypeBadge(suggestion.type);
                  return (
                    <Link
                      key={`${suggestion.type}-${suggestion.title}-${index}`}
                      href={suggestion.url}
                      role="option"
                      aria-selected={selectedIndex === index}
                      className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group"
                      style={{
                        backgroundColor:
                          selectedIndex === index
                            ? "color-mix(in srgb, var(--brand-purple) 10%, transparent)"
                            : "transparent",
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => {
                        setShowSuggestions(false);
                        setSelectedIndex(-1);
                      }}
                    >
                      {/* Image or Icon */}
                      {suggestion.image ? (
                        <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-transparent group-hover:ring-[var(--brand-purple)] transition-all">
                          <Image
                            src={suggestion.image}
                            alt={suggestion.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                            color: "var(--brand-purple)",
                          }}
                        >
                          {getIcon(suggestion.type)}
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${badge.color} 15%, transparent)`,
                              color: badge.color,
                            }}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <p className="font-semibold text-sm truncate group-hover:text-[var(--brand-purple)] transition-colors" style={{ color: "var(--foreground)" }}>
                          {suggestion.title}
                        </p>
                        {suggestion.subtitle && (
                          <p className="text-xs truncate" style={{ color: "var(--secondary-text)" }}>
                            {suggestion.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Arrow */}
                      <ArrowRight
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0"
                        style={{ color: "var(--brand-purple)" }}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className="px-4 py-2.5 border-t"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "color-mix(in srgb, var(--brand-purple) 3%, transparent)"
            }}
          >
            <div className="flex items-center gap-3 text-[10px] lg:text-xs" style={{ color: "var(--secondary-text)" }}>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold"
                  style={{ backgroundColor: "var(--hover-bg)" }}
                >
                  ↑↓
                </kbd>
                <span className="hidden sm:inline">navigate</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold"
                  style={{ backgroundColor: "var(--hover-bg)" }}
                >
                  ⏎
                </kbd>
                <span className="hidden sm:inline">select</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold"
                  style={{ backgroundColor: "var(--hover-bg)" }}
                >
                  Esc
                </kbd>
                <span className="hidden sm:inline">close</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {showSuggestions && query.length >= 2 && suggestions.length === 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 rounded-xl border-2 p-6 lg:p-8 text-center z-[200] shadow-2xl animate-slideDown"
          style={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border-color)",
          }}
        >
          <div
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center"
            style={{
              backgroundColor: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
            }}
          >
            <Search className="w-7 h-7 lg:w-8 lg:h-8" style={{ color: "var(--brand-purple)" }} />
          </div>
          <h3 className="text-base lg:text-lg font-bold mb-2">No results found</h3>
          <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
            No matches for "<span className="font-semibold" style={{ color: "var(--brand-purple)" }}>{query}</span>"
          </p>
          <button
            onClick={handleClear}
            className="px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "var(--brand-purple)",
            }}
          >
            Clear Search
          </button>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--brand-purple) 30%, transparent);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: color-mix(in srgb, var(--brand-purple) 50%, transparent);
        }
      `}</style>
    </div>
  );
}