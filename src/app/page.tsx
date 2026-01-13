import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import ProductSection from "@/components/ProductSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <ProductSection />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
