"use client";

import { ImageBlock as ImageBlockType } from "@/data/blog";
import Image from "next/image";

interface ImageBlockProps {
    block: ImageBlockType;
}

export default function ImageBlock({ block }: ImageBlockProps) {
    return (
        <figure className="my-8">
            <div className="relative w-full rounded-xl overflow-hidden border" style={{ borderColor: "var(--border-color)" }}>
                <Image
                    src={block.src}
                    alt={block.alt}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                />
            </div>
            {block.caption && (
                <figcaption
                    className="text-center text-sm mt-3 italic"
                    style={{ color: "var(--secondary-text)" }}
                >
                    {block.caption}
                </figcaption>
            )}
        </figure>
    );
}
