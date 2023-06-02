import Header from "@/components/LandingPage/Header";
import Image from "next/image";
import Banner from "@/components/LandingPage/Banner";
import Footer from "@/components/LandingPage/Footer";
import Content from "@/components/LandingPage/Content";

export default function Home() {
  return (
    <div className="max-w-7xl h-screen bg-neutral-50 overflow-x-hidden">
      <Header />
      <Banner />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}
