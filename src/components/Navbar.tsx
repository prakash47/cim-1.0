"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Globe,
  Smartphone,
  Share2,
  Zap,
  MessageSquare,
  TrendingUp,
  Target,
  Palette,
  Headphones,
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Web Design & Development", description: "Custom websites that drive results", color: "bg-gradient-to-br from-[#008ac1] to-[#00b5ca]" },
  { icon: Smartphone, title: "Mobile App Development", description: "Native & cross-platform solutions", color: "bg-gradient-to-br from-[#6B00D7] to-[#bc3feb]" },
  { icon: Share2, title: "Social Media Marketing", description: "Engage and grow your audience", color: "bg-gradient-to-br from-[#00b5ca] to-[#00efd6]" },
  { icon: Zap, title: "AI Workflows & Automations", description: "Streamline your operations", color: "bg-gradient-to-br from-[#fab900] to-[#ee6500]" },
  { icon: MessageSquare, title: "AI-Powered Chatbots", description: "Intelligent customer support", color: "bg-gradient-to-br from-[#008ac1] to-[#bc3feb]" },
  { icon: TrendingUp, title: "Organic Growth & SEO", description: "Rank higher, reach more", color: "bg-gradient-to-br from-[#6db75c] to-[#4a9e3f]" },
  { icon: Target, title: "Performance Marketing", description: "Data-driven ad campaigns", color: "bg-gradient-to-br from-[#e53935] to-[#ff7043]" },
  { icon: Palette, title: "Brand Identity & Design", description: "Stand out with unique branding", color: "bg-gradient-to-br from-[#fab900] to-[#ee6500]" },
  { icon: Headphones, title: "Additional Support Services", description: "Ongoing assistance & maintenance", color: "bg-gradient-to-br from-[#4b277a] to-[#97288e]" },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const mobileThemeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Helper function to check if a nav item is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  // Active link styles
  const getNavLinkStyle = (path: string) => ({
    color: isActive(path) ? "var(--brand-purple)" : "var(--foreground)",
    backgroundColor: isActive(path) ? "color-mix(in srgb, var(--brand-purple) 10%, transparent)" : "transparent",
  });

  // next-themes
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    setIsThemeOpen(false);
    setIsThemeOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const isOutsideDesktop = themeDropdownRef.current && !themeDropdownRef.current.contains(target);
      const isOutsideMobile = mobileThemeRef.current && !mobileThemeRef.current.contains(target);

      if (isOutsideDesktop && isOutsideMobile) {
        setIsThemeOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b shadow-sm">
        <div className="mx-auto px-6 md:px-12 xl:px-16">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative overflow-hidden rounded-lg">
                  <Image src="/images/cim_Logo.png" alt="CIM Logo" height={80} width={180} className="lg:h-[75px] lg:w-[175px]" />
                </div>
              </Link>
            </div>
            <div />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className="sticky top-0 w-full z-50 backdrop-blur-sm border-b shadow-sm transition-colors duration-300"
      style={{
        // use the global background variable so dark mode works
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="mx-auto px-6 md:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-20 w-[180px] flex items-center justify-center overflow-hidden rounded-lg transition-transform group-hover:scale-105">
                <Image
                  src={isDark ? "/images/CIM-LOGO-White.png" : "/images/CIM-LOGO-Black.png"}
                  alt="CIM Logo"
                  height={80}
                  width={180}
                  className={"object-contain"}
                />
              </div>
            </Link>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-md font-medium transition-all"
                style={getNavLinkStyle("/")}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isActive("/") ? "color-mix(in srgb, var(--brand-purple) 15%, transparent)" : "var(--hover-bg)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isActive("/") ? "color-mix(in srgb, var(--brand-purple) 10%, transparent)" : "transparent")}
              >
                Home
              </Link>
              {/* Services Mega Menu */}
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg text-md font-medium transition-all"
                  style={{
                    color: isActive("/services") ? "var(--brand-purple)" : "var(--foreground)",
                    backgroundColor: isServicesOpen
                      ? "var(--hover-bg)"
                      : isActive("/services")
                        ? "color-mix(in srgb, var(--brand-purple) 10%, transparent)"
                        : "transparent",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isActive("/services") ? "color-mix(in srgb, var(--brand-purple) 15%, transparent)" : "var(--hover-bg)")}
                  onMouseLeave={(e) => {
                    if (!isServicesOpen) e.currentTarget.style.backgroundColor = isActive("/services") ? "color-mix(in srgb, var(--brand-purple) 10%, transparent)" : "transparent";
                  }}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-label="Services Menu"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Mega Menu Dropdown */}
                {isServicesOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 xl:-translate-x-[60%] lg:-translate-x-[55%] mt-2 w-screen lg:max-w-4xl xl:max-w-5xl">
                    <div
                      className="rounded-2xl shadow-2xl border p-8 overflow-hidden"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {services.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={index}
                              href={`/services/${service.title.toLowerCase().replace(/[&\s]+/g, "-")}`}
                              className="group p-4 rounded-xl transition-all duration-200 border hover:shadow-md"
                              style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--hover-bg)";
                                e.currentTarget.style.borderColor = "var(--border-color)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.borderColor = "transparent";
                              }}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${service.color} p-2.5 group-hover:scale-110 transition-transform shadow-lg`}>
                                  <Icon className="w-full h-full text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm font-semibold mb-1 transition-colors" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                  </h3>
                                  <p className="text-xs line-clamp-2" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border-color)" }}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                              Not sure which service you need?
                            </h4>
                            <p className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>
                              Let's discuss your project and find the perfect solution
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#008ac1] hover:to-[#008ac1] text-white rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Schedule Consultation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="px-4 py-2 rounded-lg text-md font-medium transition-all"
                style={getNavLinkStyle("/about")}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isActive("/about") ? "color-mix(in srgb, var(--brand-purple) 15%, transparent)" : "var(--hover-bg)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isActive("/about") ? "color-mix(in srgb, var(--brand-purple) 10%, transparent)" : "transparent")}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg text-md font-medium transition-all"
                style={getNavLinkStyle("/contact")}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isActive("/contact") ? "color-mix(in srgb, var(--brand-purple) 15%, transparent)" : "var(--hover-bg)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isActive("/contact") ? "color-mix(in srgb, var(--brand-purple) 10%, transparent)" : "transparent")}
              >
                Contact
              </Link>

              {/* Theme Toggle Button */}
              {/* Theme Dropdown */}
              <div className="relative" ref={themeDropdownRef}>
                <button
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                  className="p-2.5 rounded-lg transition-all hover:scale-110"
                  style={{ color: "var(--foreground)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  aria-label="Theme settings"
                  aria-expanded={isThemeOpen}
                >
                  {theme === 'system' ? (
                    <Monitor className="w-5 h-5 transition-transform" />
                  ) : isDark ? (
                    <Moon className="w-5 h-5 transition-transform" style={{ color: "var(--brand-blue)" }} />
                  ) : (
                    <Sun className="w-5 h-5 transition-transform" style={{ color: "var(--brand-yellow)" }} />
                  )}
                </button>

                {isThemeOpen && (
                  <div
                    className="absolute top-12 right-0 w-36 rounded-xl border shadow-xl p-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    {[
                      { name: "Light", value: "light", icon: Sun, color: "var(--brand-yellow)" },
                      { name: "Dark", value: "dark", icon: Moon, color: "var(--brand-blue)" },
                      { name: "System", value: "system", icon: Monitor, color: "var(--foreground)" },
                    ].map((mode) => {
                      const Icon = mode.icon;
                      const isSelected = theme === mode.value;
                      return (
                        <button
                          key={mode.value}
                          onClick={() => toggleTheme(mode.value)}
                          className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isSelected ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                            }`}
                          style={{
                            backgroundColor: isSelected ? "var(--hover-bg)" : "transparent",
                            color: "var(--foreground)"
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) e.currentTarget.style.backgroundColor = "var(--hover-bg)";
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
                          }}
                        >
                          <Icon className="w-4 h-4" style={{ color: mode.color }} />
                          <span>{mode.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}


              </div>

              <Link href="/contact" className="ml-2 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#008ac1] hover:to-[#008ac1] text-white px-6 py-2.5 rounded-full text-md font-medium transition-all shadow-lg shadow-[#008ac1]/30 hover:shadow-xl hover:shadow-[#008ac1]/40 hover:scale-105">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            {/* Mobile Theme Toggle - Cycle through modes for mobile simplicity or keep dropdown? 
                User asked for Dropdown. Let's start with a simpler cycle for mobile to save space, OR a small dropdown.
                The request said "in the toggle theme button... add existing modes... via a dropdown".
                Mobile might be cramped. Let's do a cycle for mobile for now or just the same dropdown logic?
                Actually, let's keep it simple and consistent: Dropdown for mobile too, or finding a way to integrate.
                
                However, for mobile, it's often easier to just cycle: Light -> Dark -> System -> Light.
                But user strictly asked for Dropdown.
                Let's stick to the desktop change first, but wait, the code I'm editing includes the mobile section? 
                No, this is the desktop section. 
                
                Ah, I see the mobile section in the file content around line 251.
                Let's double check if I should edit the mobile section too.
                Request: "Change the theme icons as per the selected theme."
                "in the navbar ... toggle theme button".
                It implies both.
                
                Let's try to adapt the mobile part too.
             */}
            <button
              ref={mobileThemeRef}
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="p-2 rounded-lg transition-colors relative"
              style={{ color: "var(--foreground)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              aria-label="Theme settings"
            >
              {theme === 'system' ? (
                <Monitor className="w-5 h-5" />
              ) : isDark ? (
                <Moon className="w-5 h-5" style={{ color: "var(--brand-blue)" }} />
              ) : (
                <Sun className="w-5 h-5" style={{ color: "var(--brand-yellow)" }} />
              )}
              {/* Mobile Dropdown */}
              {isThemeOpen && (
                <div
                  className="absolute top-10 right-0 w-32 rounded-xl border shadow-xl p-1 overflow-hidden z-50"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  {[
                    { name: "Light", value: "light", icon: Sun, color: "var(--brand-yellow)" },
                    { name: "Dark", value: "dark", icon: Moon, color: "var(--brand-blue)" },
                    { name: "System", value: "system", icon: Monitor, color: "var(--foreground)" },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    const isSelected = theme === mode.value;
                    return (
                      <div
                        key={mode.value}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTheme(mode.value);
                        }}
                        className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isSelected ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                          }`}
                        style={{
                          backgroundColor: isSelected ? "var(--hover-bg)" : "transparent",
                          color: "var(--foreground)"
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: mode.color }} />
                        <span>{mode.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </button>


            <button onClick={toggleMobileMenu} className="p-2 rounded-lg transition-colors" style={{ color: "var(--foreground)" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")} aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Services Accordion */}
            <div>
              <button onClick={toggleMobileServices} className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all" style={{ color: "var(--foreground)" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mobile Services List */}
              {isMobileServicesOpen && (
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link key={index} href={`/services/${service.title.toLowerCase().replace(/[&\s]+/g, "-")}`} onClick={toggleMobileMenu} className="flex items-center space-x-3 p-3 rounded-lg transition-all" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--hover-bg)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${service.color} p-2 shadow-md`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                            {service.title}
                          </h3>
                          <p className="text-xs truncate" style={{ color: "var(--secondary-text)" }}>
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={toggleMobileMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium transition-all"
              style={getNavLinkStyle("/about")}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isActive("/about") ? "color-mix(in srgb, var(--brand-blue) 15%, transparent)" : "var(--hover-bg)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isActive("/about") ? "color-mix(in srgb, var(--brand-blue) 10%, transparent)" : "transparent")}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium transition-all"
              style={getNavLinkStyle("/contact")}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isActive("/contact") ? "color-mix(in srgb, var(--brand-blue) 15%, transparent)" : "var(--hover-bg)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isActive("/contact") ? "color-mix(in srgb, var(--brand-blue) 10%, transparent)" : "transparent")}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={toggleMobileMenu} className="block w-full text-center bg-gradient-to-r from-[#008ac1] to-[#00b5ca] hover:from-[#008ac1] hover:to-[#008ac1] text-white px-6 py-3 rounded-full text-base font-medium transition-all shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}







