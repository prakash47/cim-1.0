"use client";

import { QuoteBlock as QuoteBlockType } from "@/data/blog";

interface QuoteBlockProps {
    block: QuoteBlockType;
}

export default function QuoteBlock({ block }: QuoteBlockProps) {
    return (
        <blockquote
            className="my-6 pl-6 border-l-4 italic"
            style={{
                borderColor: "var(--brand-purple)",
                color: "var(--secondary-text)",
            }}
        >
            <p className="text-lg mb-2">{block.content}</p>
            {block.author && (
                <cite
                    className="text-sm not-italic font-medium"
                    style={{ color: "var(--foreground)" }}
                >
                    — {block.author}
                </cite>
            )}
        </blockquote>
    );
}
