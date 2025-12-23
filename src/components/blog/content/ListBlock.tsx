"use client";

import { ListBlock as ListBlockType } from "@/data/blog";

interface ListBlockProps {
    block: ListBlockType;
}

export default function ListBlock({ block }: ListBlockProps) {
    const ListTag = block.style === "numbered" ? "ol" : "ul";
    const listClass =
        block.style === "numbered"
            ? "list-decimal list-inside mb-4 space-y-2"
            : "list-disc list-inside mb-4 space-y-2";

    return (
        <ListTag className={listClass} style={{ color: "var(--secondary-text)" }}>
            {block.items.map((item, index) => (
                <li
                    key={index}
                    dangerouslySetInnerHTML={{
                        __html: item.replace(
                            /\*\*(.+?)\*\*/g,
                            "<strong style='color: var(--foreground)'>$1</strong>"
                        ),
                    }}
                />
            ))}
        </ListTag>
    );
}
