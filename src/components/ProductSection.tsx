"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
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
        shopifyProductId: "14929620435310",
        shopifyComponentId: "product-component-1768379354680",
    },
    {
        id: 2,
        name: "福岡県産米",
        weight: "25kg",
        type: "玄米",
        price: "¥19,800",
        image: "/ricebag.png",
        shopifyProductId: "14929622991214",
        shopifyComponentId: "product-component-1768379493293",
    },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const shopifyInitialized = useRef(false);

    useEffect(() => {
        // Shopify情報がない商品はスキップ
        if (!product.shopifyProductId || !product.shopifyComponentId || shopifyInitialized.current) {
            return;
        }

        // ShopifyBuyが読み込まれるまで待つ
        const initShopify = () => {
            if (typeof window !== 'undefined' && (window as any).ShopifyBuy) {
                const ShopifyBuy = (window as any).ShopifyBuy;

                const client = ShopifyBuy.buildClient({
                    domain: 'x9eycg-yb.myshopify.com',
                    storefrontAccessToken: '680b43c0e523431c58dbd29e5eb4661c',
                });

                ShopifyBuy.UI.onReady(client).then(function (ui: any) {
                    ui.createComponent('product', {
                        id: product.shopifyProductId,
                        node: document.getElementById(product.shopifyComponentId),
                        moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
                        options: {
                            "product": {
                                "styles": {
                                    "product": {
                                        "@media (min-width: 601px)": {
                                            "max-width": "100%",
                                            "margin-left": "0px",
                                            "margin-bottom": "0px"
                                        }
                                    },
                                    "button": {
                                        "font-family": "inherit",
                                        "font-size": "14px",
                                        "padding-top": "14px",
                                        "padding-bottom": "14px",
                                        ":hover": {
                                            "background-color": "#4A6A3A"
                                        },
                                        "background-color": "#5B7B4A",
                                        ":focus": {
                                            "background-color": "#4A6A3A"
                                        },
                                        "border-radius": "8px",
                                        "padding-left": "24px",
                                        "padding-right": "24px"
                                    }
                                },
                                "contents": {
                                    "img": false,
                                    "title": false,
                                    "price": false
                                },
                                "buttonDestination": "checkout",
                                "text": {
                                    "button": "ご購入に進む"
                                }
                            },
                            "modalProduct": {
                                "contents": {
                                    "img": false,
                                    "imgWithCarousel": true,
                                    "button": false,
                                    "buttonWithQuantity": true
                                },
                                "text": {
                                    "button": "カートに入れる"
                                }
                            },
                            "cart": {
                                "text": {
                                    "title": "買い物かご",
                                    "total": "小計",
                                    "empty": "カートが空になっています。",
                                    "button": "ご購入に進む"
                                }
                            },
                        },
                    });
                });

                shopifyInitialized.current = true;
            }
        };

        // スクリプトが読み込まれていない場合は待つ
        if ((window as any).ShopifyBuy) {
            initShopify();
        } else {
            const checkInterval = setInterval(() => {
                if ((window as any).ShopifyBuy) {
                    initShopify();
                    clearInterval(checkInterval);
                }
            }, 100);

            return () => clearInterval(checkInterval);
        }
    }, [product.shopifyProductId, product.shopifyComponentId]);

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

                {/* Shopify Buy Button */}
                {product.shopifyComponentId ? (
                    <div id={product.shopifyComponentId} className="shopify-buy-button" />
                ) : (
                    /* プレースホルダーボタン（Shopify設定待ち） */
                    <div className="shopify-buy-button-placeholder">
                        <button
                            disabled
                            className="w-full flex items-center justify-center gap-2 bg-gray-400 text-white py-3 px-6 rounded-lg cursor-not-allowed">
                            <ShoppingCart size={18} />
                            <span className="tracking-wider">準備中</span>
                        </button>
                    </div>
                )}
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
