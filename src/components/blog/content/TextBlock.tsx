"use client";

import { TextBlock as TextBlockType } from "@/data/blog";

interface TextBlockProps {
    block: TextBlockType;
}

export default function TextBlock({ block }: TextBlockProps) {
    const id = block.content
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

    switch (block.variant) {
        case "h1":
            return (
                <h1
                    id={id}
                    className="text-3xl font-bold mb-6 mt-8 scroll-mt-24"
                    style={{ color: "var(--foreground)" }}
                >
                    {block.content}
                </h1>
            );
        case "h2":
            return (
                <h2
                    id={id}
                    className="text-2xl font-bold mb-4 mt-8 scroll-mt-24"
                    style={{ color: "var(--foreground)" }}
                >
                    {block.content}
                </h2>
            );
        case "h3":
            return (
                <h3
                    id={id}
                    className="text-xl font-bold mb-3 mt-6 scroll-mt-24"
                    style={{ color: "var(--foreground)" }}
                >
                    {block.content}
                </h3>
            );
        case "paragraph":
        default:
            return (
                <p
                    className="mb-4 leading-relaxed"
                    style={{ color: "var(--secondary-text)" }}
                    dangerouslySetInnerHTML={{
                        __html: block.content.replace(
                            /\*\*(.+?)\*\*/g,
                            "<strong style='color: var(--foreground)'>$1</strong>"
                        ),
                    }}
                />
            );
    }
}
