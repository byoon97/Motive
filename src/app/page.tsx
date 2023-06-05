import Header from "@/components/LandingPage/Header";
import Image from "next/image";
import Banner from "@/components/LandingPage/Banner";
import Footer from "@/components/LandingPage/Footer";
import Content from "@/components/LandingPage/Content";
import CarbonNeutral from "@/components/LandingPage/CarbonNeutral";
import Experiences from "@/components/LandingPage/Experiences";
import Destination from "@/components/LandingPage/Destination";

export default function Home() {
  return (
    <div className="h-screen bg-white overflow-x-hidden">
      <Header />
      <Banner />
      <Content />
      <CarbonNeutral />
      <Experiences />
      <Destination />
    </div>
  );
}
