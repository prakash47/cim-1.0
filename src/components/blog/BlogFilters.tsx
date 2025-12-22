"use client";

import { categories, blogPosts } from "@/data/blog";
import SearchBar from "./SearchBar";
import { BookOpen, Layers, TrendingUp, Sparkles, X } from "lucide-react";

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
    "Web Development": <Layers className="w-4 h-4" />,
    "Digital Marketing": <TrendingUp className="w-4 h-4" />,
    "Business": <Sparkles className="w-4 h-4" />,
    "Design": <BookOpen className="w-4 h-4" />,
};

interface BlogFiltersProps {
    searchQuery: string;
    selectedCategory: string | null;
    isTagSearch?: boolean;
    onSearch: (query: string) => void;
    onCategorySelect: (category: string | null) => void;
    onClear: () => void;
}

export default function BlogFilters({
    searchQuery,
    selectedCategory,
    isTagSearch = false,
    onSearch,
    onCategorySelect,
    onClear,
}: BlogFiltersProps) {
    // Get category post counts
    const categoryCounts: Record<string, number> = {};
    blogPosts.forEach((post) => {
        categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    });

    const hasActiveFilters = searchQuery || selectedCategory;

    return (
        <div
            id="search-section"
            className="rounded-2xl border p-6 scroll-mt-24"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Search Bar Row */}
            <div className="flex items-center gap-3 mb-6">
                <div className="flex-1">
                    <SearchBar onSearch={onSearch} value={searchQuery} />
                </div>
                {hasActiveFilters && (
                    <button
                        onClick={onClear}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm border transition-all duration-200 hover:bg-[var(--hover-bg)] whitespace-nowrap"
                        style={{
                            borderColor: "var(--border-color)",
                            color: "var(--secondary-text)",
                        }}
                    >
                        <X className="w-4 h-4" />
                        Clear
                    </button>
                )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => onCategorySelect(null)}
                    className="px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border"
                    style={{
                        backgroundColor: !selectedCategory ? "var(--brand-purple)" : "transparent",
                        color: !selectedCategory ? "white" : "var(--foreground)",
                        borderColor: !selectedCategory ? "var(--brand-purple)" : "var(--border-color)",
                    }}
                >
                    <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        All
                        <span
                            className="px-2 py-0.5 rounded-full text-xs"
                            style={{
                                backgroundColor: !selectedCategory
                                    ? "rgba(255,255,255,0.2)"
                                    : "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                                color: !selectedCategory ? "white" : "var(--brand-purple)",
                            }}
                        >
                            {blogPosts.length}
                        </span>
                    </span>
                </button>

                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategorySelect(category)}
                        className="px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 border hover:border-[var(--brand-purple)]"
                        style={{
                            backgroundColor:
                                selectedCategory === category
                                    ? "color-mix(in srgb, var(--brand-purple) 15%, transparent)"
                                    : "transparent",
                            color: selectedCategory === category ? "var(--brand-purple)" : "var(--foreground)",
                            borderColor: selectedCategory === category ? "var(--brand-purple)" : "var(--border-color)",
                        }}
                    >
                        <span className="flex items-center gap-2">
                            {categoryIcons[category] || <Layers className="w-4 h-4" />}
                            {category}
                            <span
                                className="px-2 py-0.5 rounded-full text-xs"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 15%, transparent)",
                                    color: "var(--brand-purple)",
                                }}
                            >
                                {categoryCounts[category] || 0}
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
