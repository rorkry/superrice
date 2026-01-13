"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryItems = [
    {
        title: "卵かけご飯",
        description: "新鮮な卵と新米の贅沢な組み合わせ",
        image: "/tkg.png",
    },
    {
        title: "塩むすび",
        description: "お米の甘みを最大限に引き出す",
        image: "/onigiri.png",
    },
    {
        title: "お茶漬け",
        description: "シンプルに、お米の美味しさを堪能",
        image: "/ochazuke.png",
    },
    {
        title: "ご飯定食",
        description: "主食の存在感が際立つ食卓",
        image: "/teishoku.png",
    },
];

function GalleryItem({
    item,
    index,
}: {
    item: (typeof galleryItems)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
        >
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl text-white font-medium tracking-wider mb-1">
                    {item.title}
                </h3>
                <p className="text-sm text-white/80">{item.description}</p>
            </div>
        </motion.div>
    );
}

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 md:py-32 bg-washi">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-[#8B7355] tracking-[0.5em]">GALLERY</span>
                    <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mt-4 tracking-wider">
                        おいしい食べ方
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={item.title} item={item} index={index} />
                    ))}
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg md:text-xl text-[#6B6B6B] italic tracking-wider">
                        「白いご飯が主役になる贅沢を、ぜひご堪能ください」
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
