"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
    {
        id: 1,
        name: "福岡県産米",
        weight: "10kg",
        type: "精米済",
        price: "¥8,800",
        image: "/ricebag.png",
        popular: true,
    },
    {
        id: 2,
        name: "福岡県産米",
        weight: "25kg",
        type: "玄米",
        price: "¥19,800",
        image: "/ricebag.png",
    },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover-lift border border-[#E8E4DE]"
        >
            {/* Image Container */}
            <div className="relative aspect-square bg-[#F5F3EE] p-6">
                {product.popular && (
                    <span className="absolute top-4 left-4 bg-[#8B7355] text-white text-xs px-3 py-1 rounded-full tracking-wider">
                        人気No.1
                    </span>
                )}
                <div className="relative w-full h-full rice-shadow">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="p-6 text-center">
                <h3 className="text-lg text-[#2D2D2D] tracking-wider mb-2">{product.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                    <p className="text-2xl font-medium text-[#2D2D2D]">{product.weight}</p>
                    <span className="bg-[#5B7B4A] text-white text-xs px-2 py-1 rounded">{product.type}</span>
                </div>
                <div className="mb-6">
                    <p className="text-2xl text-[#8B7355] font-bold">{product.price}</p>
                    <p className="text-sm text-[#5B7B4A] font-medium mt-1">送料込み</p>
                </div>

                {/* TODO: ここにShopifyのボタンコードを貼り付ける */}
                {/* Shopify Buy Button Placeholder */}
                <div className="shopify-buy-button-placeholder">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#5B7B4A] hover:bg-[#4A6A3A] text-white py-3 px-6 rounded-lg transition-colors duration-300">
                        <ShoppingCart size={18} />
                        <span className="tracking-wider">カートに入れる</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProductSection() {
    return (
        <section id="products" className="py-24 md:py-32 bg-[#F5F3EE]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-[#8B7355] tracking-[0.5em]">PRODUCTS</span>
                    <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mt-4 tracking-wider">
                        商品ラインナップ
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm text-[#5B7B4A] font-medium mt-12"
                >
                    ※ 全て送料込みの価格です
                </motion.p>
            </div>
        </section>
    );
}
