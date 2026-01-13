"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const storyItems = [
    {
        title: "水",
        subtitle: "清らかな湧水",
        description: "福岡県の山間部から湧き出る清らかな水が、お米を一粒一粒丁寧に育てます。ミネラル豊富な水は、お米に独特の甘みを与えます。",
        image: "/river.png",
        imageAlt: "清らかな水",
    },
    {
        title: "土壌",
        subtitle: "肥沃な大地",
        description: "何世代にもわたって大切にされてきた田んぼ。有機物を豊富に含む土壌が、栄養たっぷりのお米を育てます。",
        image: "/field.png",
        imageAlt: "田んぼの風景",
    },
    {
        title: "生産者",
        subtitle: "匠の技",
        description: "代々受け継がれてきた米作りの技術。毎日田んぼに足を運び、稲の声に耳を傾ける。そんな丁寧な仕事が、最高のお米を生み出します。",
        image: "/farmer.png",
        imageAlt: "農家の手",
    },
];

function StoryItem({
    item,
    index,
}: {
    item: (typeof storyItems)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
        >
            {/* Image */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <span className="text-sm text-[#8B7355] tracking-[0.3em]">
                        {item.subtitle}
                    </span>
                    <h3 className="text-4xl md:text-5xl text-[#2D2D2D] mt-2 mb-6 tracking-wider">
                        {item.title}
                    </h3>
                    <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg">
                        {item.description}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function Story() {
    return (
        <section id="story" className="py-24 md:py-32 bg-washi">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm text-[#8B7355] tracking-[0.5em]">OUR STORY</span>
                    <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mt-4 tracking-wider">
                        私たちのこだわり
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Story Items */}
                <div className="space-y-24 md:space-y-32">
                    {storyItems.map((item, index) => (
                        <StoryItem key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
