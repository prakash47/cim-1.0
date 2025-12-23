"use client";

import { TableBlock as TableBlockType } from "@/data/blog";

interface TableBlockProps {
    block: TableBlockType;
}

export default function TableBlock({ block }: TableBlockProps) {
    return (
        <div className="my-6 overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border-color)" }}>
            <table className="w-full text-sm">
                <thead>
                    <tr style={{ backgroundColor: "var(--hover-bg)" }}>
                        {block.headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-4 py-3 text-left font-semibold border-b"
                                style={{
                                    color: "var(--foreground)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {block.rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="transition-colors"
                            style={{ backgroundColor: "var(--card-bg)" }}
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-4 py-3 border-b"
                                    style={{
                                        color: "var(--secondary-text)",
                                        borderColor: "var(--border-color)",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: cell.replace(
                                            /\*\*(.+?)\*\*/g,
                                            "<strong style='color: var(--foreground)'>$1</strong>"
                                        ),
                                    }}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
