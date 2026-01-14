import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mincho",
});

export const metadata: Metadata = {
  title: "福岡県産 特選新米 | 至高の白米をお届け",
  description: "福岡県の豊かな自然が育んだ、とてつもなく美味しい新米をお届けします。水、土壌、生産者のこだわりが詰まった至高の一粒。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Shopify Buy Button Script */}
        <Script
          src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${shipporiMincho.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
