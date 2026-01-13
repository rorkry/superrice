"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
    { href: "#home", label: "ホーム", labelEn: "Home" },
    { href: "#products", label: "商品", labelEn: "Product" },
    { href: "#products", label: "ご購入", labelEn: "Shop" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#FAFAF8]/95 backdrop-blur-sm shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-2xl tracking-wider text-[#2D2D2D]">
                        福岡県のお米屋さん
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.labelEn}
                                href={item.href}
                                className="group flex flex-col items-center text-[#2D2D2D] hover:text-[#8B7355] transition-colors"
                            >
                                <span className="text-sm tracking-widest">{item.label}</span>
                                <span className="text-[10px] text-[#6B6B6B] group-hover:text-[#8B7355] tracking-wider">
                                    {item.labelEn}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-[#2D2D2D]"
                        aria-label="メニュー"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#FAFAF8] border-t border-[#E8E4DE]"
                    >
                        <div className="px-6 py-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.labelEn}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-[#2D2D2D] hover:text-[#8B7355] transition-colors"
                                >
                                    <span className="text-base tracking-widest">{item.label}</span>
                                    <span className="ml-2 text-xs text-[#6B6B6B]">{item.labelEn}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
