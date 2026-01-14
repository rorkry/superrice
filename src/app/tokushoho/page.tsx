"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TokushohoPage() {
    return (
        <main className="min-h-screen bg-[#F5F3EE]">
            {/* Header */}
            <header className="bg-white border-b border-[#E8E4DE] sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-[#2D2D2D] hover:text-[#5B7B4A] transition-colors">
                        <ArrowLeft size={20} />
                        <span>トップページに戻る</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl text-[#2D2D2D] tracking-wider mb-8 text-center">
                        特定商取引法に基づく表記
                    </h1>

                    <div className="bg-white rounded-2xl shadow-sm border border-[#E8E4DE] p-8 md:p-12 space-y-8">
                        {/* 販売業者 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">販売業者</h2>
                            <p className="text-[#6B6B6B]">株式会社SAMURAI</p>
                        </div>

                        {/* 運営統括責任者名 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">運営統括責任者名</h2>
                            <p className="text-[#6B6B6B]">伊豆丸 勝也</p>
                        </div>

                        {/* 所在地 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">所在地</h2>
                            <p className="text-[#6B6B6B]">〒822-0001<br />福岡県直方市感田2827-1</p>
                        </div>

                        {/* 電話番号 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">電話番号</h2>
                            <p className="text-[#6B6B6B]">080-2718-1076</p>
                        </div>

                        {/* メールアドレス */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">メールアドレス</h2>
                            <p className="text-[#6B6B6B]">katsuya.8776@icloud.com</p>
                        </div>

                        {/* 商品代金以外の料金 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">商品代金以外の料金の説明</h2>
                            <p className="text-[#6B6B6B]">販売価格とは別に配送料がかかります。<br />消費税は商品代金に含まれています。</p>
                        </div>

                        {/* 申込有効期限 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">申込有効期限</h2>
                            <p className="text-[#6B6B6B]">ご注文から7日以内といたします。<br />ご注文後、上記期間を超えて連絡が取れなくなる場合は、キャンセルとさせていただく場合がございます。</p>
                        </div>

                        {/* 不良品 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">不良品</h2>
                            <p className="text-[#6B6B6B]">商品到着後速やかにご連絡ください。<br />商品に欠陥がある場合を除き、返品には応じかねますのでご了承ください。</p>
                        </div>

                        {/* 販売数量 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">販売数量</h2>
                            <p className="text-[#6B6B6B]">各商品ページにてご確認ください。</p>
                        </div>

                        {/* 引渡し時期 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">引渡し時期</h2>
                            <p className="text-[#6B6B6B]">ご注文を受けてから7日以内に発送いたします。<br />※天候や収穫状況により遅れる場合は別途ご連絡いたします。</p>
                        </div>

                        {/* お支払方法 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">お支払方法</h2>
                            <p className="text-[#6B6B6B]">・クレジットカード決済<br />・PayPay（導入予定）</p>
                        </div>

                        {/* お支払期限 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">お支払期限</h2>
                            <p className="text-[#6B6B6B]">・クレジットカード：ご注文時にお支払いが確定します。<br />・PayPay：ご注文時にお支払いが確定します。</p>
                        </div>

                        {/* 返品期限 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">返品期限</h2>
                            <p className="text-[#6B6B6B]">商品到着後7日以内とさせていただきます。<br />食品という性質上、お客様都合による返品・交換はお断りしております。</p>
                        </div>

                        {/* 返品送料 */}
                        <div>
                            <h2 className="text-lg font-medium text-[#2D2D2D] mb-2">返品送料</h2>
                            <p className="text-[#6B6B6B]">不良品に該当する場合の交換・返品につきましては、当店で送料を負担いたします。</p>
                        </div>
                    </div>

                    {/* Back to top link */}
                    <div className="mt-12 text-center">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#5B7B4A] hover:text-[#4A6A3A] transition-colors">
                            <ArrowLeft size={18} />
                            <span>トップページに戻る</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
