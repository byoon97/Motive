import Header from "@/components/LandingPage/Header";
import Image from "next/image";
import Banner from "@/components/LandingPage/Banner";
import Footer from "@/components/LandingPage/Footer";
import Content from "@/components/LandingPage/Content";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto h-screen bg-neutral-50">
        <Header />
        <Banner />
        <Content />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
