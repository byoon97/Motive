import Banner from "@/components/LandingPage/Banner";
import Content from "@/components/LandingPage/Content";
import CarbonNeutral from "@/components/LandingPage/CarbonNeutral";
import Experiences from "@/components/LandingPage/Experiences";
import Destination from "@/components/LandingPage/Destination";
import FAQ from "@/components/LandingPage/FAQ";

//https://www.prisma.io/nextjs

export default function Home() {

  return (
    <div className="h-screen bg-white overflow-x-hidden">
      <Banner />
      <Content />
      <CarbonNeutral />
      <Experiences />
      <Destination cities={[]} />
      <FAQ />
    </div>
  );
}
