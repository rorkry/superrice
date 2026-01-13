"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="炊きたての新米"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                {/* 新米バッジ */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-8"
                >
                    <div className="shinmai-badge w-28 h-28 md:w-36 md:h-36 shadow-lg">
                        <span className="text-2xl md:text-3xl font-bold">新米</span>
                        <span className="text-[10px] md:text-xs tracking-wider mt-1">NEW HARVEST</span>
                    </div>
                </motion.div>

                {/* メインテキスト */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-[0.2em] mb-4 drop-shadow-lg">
                        福岡県産
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 tracking-[0.3em] drop-shadow-md">
                        至高の白米をお届けします
                    </p>
                </motion.div>

                {/* スクロールインジケーター */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                    >
                        <motion.div className="w-1.5 h-3 bg-white/70 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
