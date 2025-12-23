"use client";

import { CalloutBlock as CalloutBlockType } from "@/data/blog";
import { Info, AlertTriangle, Lightbulb, FileText } from "lucide-react";

interface CalloutBlockProps {
    block: CalloutBlockType;
}

const calloutStyles = {
    info: {
        bg: "color-mix(in srgb, var(--brand-blue) 10%, transparent)",
        border: "var(--brand-blue)",
        icon: Info,
    },
    warning: {
        bg: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
        border: "var(--brand-orange)",
        icon: AlertTriangle,
    },
    tip: {
        bg: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
        border: "var(--brand-seo)",
        icon: Lightbulb,
    },
    note: {
        bg: "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
        border: "var(--brand-purple)",
        icon: FileText,
    },
};

export default function CalloutBlock({ block }: CalloutBlockProps) {
    const style = calloutStyles[block.variant];
    const Icon = style.icon;

    return (
        <div
            className="my-6 p-4 rounded-xl border-l-4"
            style={{
                backgroundColor: style.bg,
                borderLeftColor: style.border,
            }}
        >
            <div className="flex items-start gap-3">
                <Icon
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: style.border }}
                />
                <div className="flex-1">
                    {block.title && (
                        <p
                            className="font-semibold mb-1"
                            style={{ color: "var(--foreground)" }}
                        >
                            {block.title}
                        </p>
                    )}
                    <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                        dangerouslySetInnerHTML={{
                            __html: block.content.replace(
                                /\*\*(.+?)\*\*/g,
                                "<strong style='color: var(--foreground)'>$1</strong>"
                            ),
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
