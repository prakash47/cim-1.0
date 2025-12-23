"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { categories, blogPosts, getCategorySlug } from "@/data/blog";
import SearchBar from "./SearchBar";
import {
    Code,
    Smartphone,
    TrendingUp,
    Bot,
    Palette,
    Search,
    Target,
    FileText,
    X,
    Home,
    ChevronDown,
    Grid3X3,
    Menu
} from "lucide-react";
import Link from "next/link";

// Category icons mapping - all 8 categories
const categoryIcons: Record<string, React.ReactNode> = {
    "Web Development": <Code className="w-4 h-4" />,
    "Mobile Apps": <Smartphone className="w-4 h-4" />,
    "Digital Marketing": <TrendingUp className="w-4 h-4" />,
    "AI & Automation": <Bot className="w-4 h-4" />,
    "UI/UX Design": <Palette className="w-4 h-4" />,
    "SEO": <Search className="w-4 h-4" />,
    "Business Strategy": <Target className="w-4 h-4" />,
    "Case Studies": <FileText className="w-4 h-4" />,
};

// Category colors mapping - all 8 categories
const categoryColors: Record<string, string> = {
    "Web Development": "#6B00D7",
    "Mobile Apps": "#00B5CA",
    "Digital Marketing": "#FF6B35",
    "AI & Automation": "#9B59B6",
    "UI/UX Design": "#E91E63",
    "SEO": "#27AE60",
    "Business Strategy": "#3498DB",
    "Case Studies": "#F39C12",
};

export default function BlogNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);

    // Handle scroll effect - hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 10);

            // Only apply hide behavior on mobile/tablet (less than 1280px)
            if (window.innerWidth < 1280) {
                if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                    // Scrolling down & past threshold - hide
                    setIsHidden(true);
                } else {
                    // Scrolling up - show
                    setIsHidden(false);
                }
            } else {
                setIsHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowCategoryDropdown(false);
            }
            // Only close mobile menu if click is outside both the menu AND the button
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(e.target as Node) &&
                mobileMenuButtonRef.current &&
                !mobileMenuButtonRef.current.contains(e.target as Node)
            ) {
                setShowMobileMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Read search parameter from URL
    useEffect(() => {
        const searchFromUrl = searchParams.get("search");
        if (searchFromUrl) {
            setSearchQuery(searchFromUrl);
        } else {
            setSearchQuery("");
        }
    }, [searchParams]);

    // Get category counts
    const categoryCounts: Record<string, number> = {};
    blogPosts.forEach((post) => {
        categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    });

    // Handle search
    const handleSearch = useCallback(
        (query: string) => {
            setSearchQuery(query);
            if (query) {
                setSelectedCategory(null);
                router.push(`/blog?search=${encodeURIComponent(query)}`);
            }
        },
        [router]
    );

    // Handle category selection
    const handleCategorySelect = useCallback(
        (category: string | null) => {
            setSelectedCategory(category);
            setSearchQuery("");
            setShowCategoryDropdown(false);
            setShowMobileMenu(false);
            if (category) {
                router.push(`/blog/category/${getCategorySlug(category)}`);
            } else {
                router.push("/blog");
            }
        },
        [router]
    );

    // Clear filters
    const handleClear = useCallback(() => {
        setSearchQuery("");
        setSelectedCategory(null);
        router.push("/blog");
    }, [router]);

    const hasActiveFilters = searchQuery || selectedCategory;

    return (
        <>
            <nav
                className={`sticky top-0 z-[100] border-b transition-all duration-300 ${isScrolled ? "backdrop-blur-xl shadow-lg" : "backdrop-blur-md"
                    } ${isHidden ? "xl:translate-y-0 -translate-y-full" : "translate-y-0"}`}
                style={{
                    backgroundColor: isScrolled
                        ? "color-mix(in srgb, var(--background) 98%, transparent)"
                        : "color-mix(in srgb, var(--background) 95%, transparent)",
                    borderColor: "var(--border-color)",
                }}
            >
                <div className="px-4 sm:px-6 md:px-12 xl:px-16">
                    {/* Main Navigation Row */}
                    <div className="flex items-center justify-between gap-2 sm:gap-3 py-2.5 sm:py-3 xl:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link
                                href="/blog"
                                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 xl:px-4 py-1.5 sm:py-2 xl:py-2.5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm xl:text-base transition-all duration-200 whitespace-nowrap ${pathname === "/blog" && !hasActiveFilters
                                    ? "shadow-md"
                                    : "hover:bg-[var(--hover-bg)]"
                                    }`}
                                style={{
                                    backgroundColor:
                                        pathname === "/blog" && !hasActiveFilters
                                            ? "var(--brand-purple)"
                                            : "transparent",
                                    color:
                                        pathname === "/blog" && !hasActiveFilters ? "white" : "var(--foreground)",
                                }}
                            >
                                <Home className="w-4 h-4 xl:w-5 xl:h-5" />
                                <span className="hidden sm:inline">Blog</span>
                            </Link>

                            {hasActiveFilters && (
                                <button
                                    onClick={handleClear}
                                    className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold border transition-all duration-200 hover:border-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 whitespace-nowrap"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        color: "var(--secondary-text)",
                                    }}
                                >
                                    <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    <span className="hidden xs:inline sm:inline">Clear</span>
                                </button>
                            )}
                        </div>

                        {/* Center: Search Bar (Desktop & Tablet) */}
                        <div className="hidden md:flex flex-1 max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-2 xl:mx-4">
                            <SearchBar
                                onSearch={handleSearch}
                                value={searchQuery}
                                placeholder="Search articles, tags, authors..."
                            />
                        </div>

                        {/* Right: Categories (Desktop) */}
                        <div className="hidden xl:flex items-center gap-2">
                            {categories.slice(0, 3).map((category) => {
                                const categorySlug = getCategorySlug(category);
                                const isActive =
                                    pathname === `/blog/category/${categorySlug}` || selectedCategory === category;
                                const color = categoryColors[category] || "var(--brand-purple)";

                                return (
                                    <button
                                        key={category}
                                        onClick={() => handleCategorySelect(category)}
                                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border hover:scale-105 whitespace-nowrap"
                                        style={{
                                            backgroundColor: isActive
                                                ? `color-mix(in srgb, ${color} 12%, transparent)`
                                                : "transparent",
                                            color: isActive ? color : "var(--foreground)",
                                            borderColor: isActive ? color : "var(--border-color)",
                                        }}
                                    >
                                        {categoryIcons[category]}
                                        <span>{category}</span>
                                        <span
                                            className="px-1.5 py-0.5 rounded-md text-[10px] font-bold"
                                            style={{
                                                backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)`,
                                                color: color,
                                            }}
                                        >
                                            {categoryCounts[category] || 0}
                                        </span>
                                    </button>
                                );
                            })}

                            {/* More Categories Dropdown (Desktop) */}
                            {categories.length > 3 && (
                                <div ref={dropdownRef} className="relative">
                                    <button
                                        onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border hover:scale-105 ${showCategoryDropdown
                                            ? "border-[var(--brand-purple)] bg-[color-mix(in_srgb,var(--brand-purple)_12%,transparent)]"
                                            : "border-[var(--border-color)]"
                                            }`}
                                        style={{
                                            color: showCategoryDropdown ? "var(--brand-purple)" : "var(--foreground)",
                                        }}
                                    >
                                        <Grid3X3 className="w-4 h-4" />
                                        <span>More</span>
                                        <ChevronDown
                                            className={`w-3.5 h-3.5 transition-transform duration-200 ${showCategoryDropdown ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {showCategoryDropdown && (
                                        <div
                                            className="absolute right-0 top-full mt-2 w-64 rounded-2xl border shadow-2xl overflow-hidden z-[200] animate-slideDown"
                                            style={{
                                                backgroundColor: "var(--background)",
                                                borderColor: "var(--border-color)",
                                            }}
                                        >
                                            <div className="p-3">
                                                <p
                                                    className="px-3 py-2 text-xs font-bold uppercase tracking-wider"
                                                    style={{ color: "var(--secondary-text)" }}
                                                >
                                                    More Categories
                                                </p>
                                                {categories.slice(3).map((category) => {
                                                    const categorySlug = getCategorySlug(category);
                                                    const isActive =
                                                        pathname === `/blog/category/${categorySlug}` ||
                                                        selectedCategory === category;
                                                    const color = categoryColors[category] || "var(--brand-purple)";

                                                    return (
                                                        <button
                                                            key={category}
                                                            onClick={() => handleCategorySelect(category)}
                                                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-[var(--hover-bg)]"
                                                            style={{
                                                                color: isActive ? color : "var(--foreground)",
                                                            }}
                                                        >
                                                            <span style={{ color: color }}>{categoryIcons[category]}</span>
                                                            <span className="flex-1 text-left">{category}</span>
                                                            <span
                                                                className="px-2 py-0.5 rounded-md text-xs font-bold"
                                                                style={{
                                                                    backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
                                                                    color: color,
                                                                }}
                                                            >
                                                                {categoryCounts[category] || 0}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            ref={mobileMenuButtonRef}
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="xl:hidden flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border transition-all duration-200 hover:bg-[var(--hover-bg)]"
                            style={{
                                borderColor: showMobileMenu ? "var(--brand-purple)" : "var(--border-color)",
                                backgroundColor: showMobileMenu ? "color-mix(in srgb, var(--brand-purple) 10%, transparent)" : "transparent",
                                color: "var(--foreground)"
                            }}
                        >
                            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                            <ChevronDown
                                className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${showMobileMenu ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Mobile Search Bar Row */}
                    <div className="md:hidden pb-2.5 sm:pb-3">
                        <SearchBar
                            onSearch={handleSearch}
                            value={searchQuery}
                            placeholder="Search articles..."
                        />
                    </div>

                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {showMobileMenu && (
                <div
                    ref={mobileMenuRef}
                    className="xl:hidden absolute left-0 right-0 z-[99] border-b shadow-2xl animate-slideDown backdrop-blur-xl"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--background) 98%, transparent)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <div className="px-4 sm:px-6 md:px-12 py-3">
                        <p
                            className="px-2 py-2 text-xs font-bold uppercase tracking-wider"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Categories
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {categories.map((category) => {
                                const categorySlug = getCategorySlug(category);
                                const isActive =
                                    pathname === `/blog/category/${categorySlug}` || selectedCategory === category;
                                const color = categoryColors[category] || "var(--brand-purple)";

                                return (
                                    <button
                                        key={category}
                                        onClick={() => handleCategorySelect(category)}
                                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border"
                                        style={{
                                            backgroundColor: isActive
                                                ? `color-mix(in srgb, ${color} 12%, transparent)`
                                                : "transparent",
                                            color: isActive ? color : "var(--foreground)",
                                            borderColor: isActive ? color : "var(--border-color)",
                                        }}
                                    >
                                        <span style={{ color: color }}>{categoryIcons[category]}</span>
                                        <span className="flex-1 text-left truncate">{category}</span>
                                        <span
                                            className="px-1.5 py-0.5 rounded-md text-[10px] font-bold"
                                            style={{
                                                backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)`,
                                                color: color,
                                            }}
                                        >
                                            {categoryCounts[category] || 0}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

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

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
}