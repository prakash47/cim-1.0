"use client";

import { BlogPost, ContentBlock } from "@/data/blog";
import {
    TextBlock,
    ListBlock,
    ImageBlock,
    CodeBlock,
    QuoteBlock,
    CalloutBlock,
    TableBlock,
} from "./content";
import { JSX } from "react";

interface BlogContentRendererProps {
    post: BlogPost;
}

// Legacy markdown content renderer (backwards compatible)
function renderMarkdownContent(content: string): JSX.Element[] {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let isInList = false;
    let key = 0;

    const flushList = () => {
        if (currentList.length > 0) {
            elements.push(
                <ul
                    key={key++}
                    className="list-disc list-inside mb-4 space-y-2"
                    style={{ color: "var(--secondary-text)" }}
                >
                    {currentList.map((item, i) => (
                        <li
                            key={i}
                            dangerouslySetInnerHTML={{
                                __html: item.replace(
                                    /\*\*(.+?)\*\*/g,
                                    "<strong>$1</strong>"
                                ),
                            }}
                        />
                    ))}
                </ul>
            );
            currentList = [];
            isInList = false;
        }
    };

    for (const line of lines) {
        const trimmedLine = line.trim();

        if (!trimmedLine) {
            flushList();
            continue;
        }

        const h1Match = trimmedLine.match(/^#\s+(.+)$/);
        const h2Match = trimmedLine.match(/^##\s+(.+)$/);
        const h3Match = trimmedLine.match(/^###\s+(.+)$/);

        if (h1Match) {
            flushList();
            const text = h1Match[1];
            const id = text
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-");
            elements.push(
                <h1 key={key++} id={id} className="text-3xl font-bold mb-6 mt-8 scroll-mt-24">
                    {text}
                </h1>
            );
            continue;
        }

        if (h2Match) {
            flushList();
            const text = h2Match[1];
            const id = text
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-");
            elements.push(
                <h2 key={key++} id={id} className="text-2xl font-bold mb-4 mt-8 scroll-mt-24">
                    {text}
                </h2>
            );
            continue;
        }

        if (h3Match) {
            flushList();
            const text = h3Match[1];
            const id = text
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-");
            elements.push(
                <h3 key={key++} id={id} className="text-xl font-bold mb-3 mt-6 scroll-mt-24">
                    {text}
                </h3>
            );
            continue;
        }

        if (trimmedLine.startsWith("- ")) {
            isInList = true;
            currentList.push(trimmedLine.substring(2));
            continue;
        }

        flushList();
        elements.push(
            <p
                key={key++}
                className="mb-4 leading-relaxed"
                style={{ color: "var(--secondary-text)" }}
                dangerouslySetInnerHTML={{
                    __html: trimmedLine.replace(
                        /\*\*(.+?)\*\*/g,
                        "<strong style='color: var(--foreground)'>$1</strong>"
                    ),
                }}
            />
        );
    }

    flushList();
    return elements;
}

// Modular content block renderer
function renderContentBlock(block: ContentBlock): JSX.Element {
    switch (block.type) {
        case "text":
            return <TextBlock key={block.id} block={block} />;
        case "list":
            return <ListBlock key={block.id} block={block} />;
        case "image":
            return <ImageBlock key={block.id} block={block} />;
        case "code":
            return <CodeBlock key={block.id} block={block} />;
        case "quote":
            return <QuoteBlock key={block.id} block={block} />;
        case "callout":
            return <CalloutBlock key={block.id} block={block} />;
        case "table":
            return <TableBlock key={block.id} block={block} />;
        default:
            return <></>;
    }
}

export default function BlogContentRenderer({ post }: BlogContentRendererProps) {
    // If contentBlocks exists and has items, use modular rendering
    if (post.contentBlocks && post.contentBlocks.length > 0) {
        return (
            <div className="blog-content">
                {post.contentBlocks.map((block) => renderContentBlock(block))}
            </div>
        );
    }

    // Otherwise, fall back to legacy markdown rendering
    return (
        <div className="blog-content">
            {renderMarkdownContent(post.content)}
        </div>
    );
}
