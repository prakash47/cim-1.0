import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProviderClient from "@/components/ThemeProviderClient"; // client wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CIM - Digital Solutions",
  description:
    "Web Design, Mobile App Development, UI/UX Branding, and Digital Marketing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head />
      {/* Put ThemeProviderClient inside the <body> */}
      <body className={`${inter.className} antialiased bg-white dark:bg-black text-gray-900 dark:text-white`}>
        <ThemeProviderClient>
          <Navbar />
          {children}
          <Footer />
        </ThemeProviderClient>
      </body>
    </html>
  );
}
