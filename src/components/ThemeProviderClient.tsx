// src/components/ThemeProviderClient.tsx
"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
    return (
        // Put ThemeProvider inside <body> (see layout.tsx below).
        // disable enableColorScheme to avoid injecting style=color-scheme on <html>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableColorScheme={false}>
            {children}
        </ThemeProvider>
    );
}
