"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#2D2D2D] text-white py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl tracking-wider mb-4">福岡県産米「至高」</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            福岡県の豊かな自然が育んだ、<br />
                            とてつもなく美味しい新米を<br />
                            真心込めてお届けします。
                        </p>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg tracking-wider mb-4">お問い合わせ</h4>
                        <div className="space-y-3 text-white/60 text-sm">
                            <div className="flex items-center gap-3">
                                <Mail size={16} />
                                <span>katsuya.8776@icloud.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg tracking-wider mb-4">リンク</h4>
                        <nav className="space-y-2 text-white/60 text-sm">
                            <Link href="/tokushoho" className="block hover:text-white transition-colors">
                                特定商取引法に基づく表記
                            </Link>
                            <Link href="#" className="block hover:text-white transition-colors">
                                プライバシーポリシー
                            </Link>
                            <Link href="#" className="block hover:text-white transition-colors">
                                配送について
                            </Link>
                            <Link href="#" className="block hover:text-white transition-colors">
                                よくある質問
                            </Link>
                        </nav>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
                        <p>© 2026 福岡県産米「至高」. All rights reserved.</p>
                        <p className="text-xs">Made with ❤️ in Fukuoka</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
