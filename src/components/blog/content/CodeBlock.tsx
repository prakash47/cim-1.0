"use client";

import { CodeBlock as CodeBlockType } from "@/data/blog";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
    block: CodeBlockType;
}

export default function CodeBlock({ block }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(block.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-6 rounded-xl overflow-hidden border" style={{ borderColor: "#2d2d2d" }}>
            {/* Header with filename and copy button */}
            <div
                className="flex items-center justify-between px-4 py-2 border-b"
                style={{
                    backgroundColor: "#252525",
                    borderColor: "#2d2d2d",
                }}
            >
                <div className="flex items-center gap-2">
                    <span
                        className="text-xs font-medium px-2 py-0.5 rounded"
                        style={{
                            backgroundColor: "rgba(107, 0, 215, 0.2)",
                            color: "#a855f7",
                        }}
                    >
                        {block.language}
                    </span>
                    {block.filename && (
                        <span className="text-sm" style={{ color: "#9ca3af" }}>
                            {block.filename}
                        </span>
                    )}
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded transition-colors hover:bg-white/10"
                    style={{ color: "#9ca3af" }}
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5" />
                            Copied
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy
                        </>
                    )}
                </button>
            </div>
            {/* Code content */}
            <pre
                className="p-4 overflow-x-auto text-sm"
                style={{ backgroundColor: "#1e1e1e" }}
            >
                <code style={{ color: "#e0e0e0" }}>{block.code}</code>
            </pre>
        </div>
    );
}
