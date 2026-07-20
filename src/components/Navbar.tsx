import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingProducts from "@/components/TrendingProducts";
import GoldCollection from "@/components/GoldCollection";
import DiamondCollection from "@/components/DiamondCollection";
import NewArrivals from "@/components/NewArrivals";
import OfferBanner from "@/components/OfferBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <TrendingProducts />
      <GoldCollection />
      <DiamondCollection />
      <NewArrivals />
      <OfferBanner />
      <Footer />
    </>
  );
}