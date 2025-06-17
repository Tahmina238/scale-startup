import Autopilot from "./components/autopilot/AutoPilot";
import Banner from "./components/banner/Banner";
import CodeBlueprint from "./components/codeBlueprint/CodeBlueprint";
import CodeCash from "./components/codeCash/CodeCash";
import CoreSolutions from "./components/core/CoreSolutions";
import Crisis from "./components/crisis/Crisis";
import Dominate from "./components/dominate/Dominate";
import Footer from "./components/footer/Footer";
import GreatProducts from "./components/greatProduct/GreatProducts";
import Hero from "./components/hero/Hero";
import HyperGrowth from "./components/hypreGrowth/HyperGrowth";
import Navbar from "./components/navbar/Navbar";
import Panic from "./components/panic/Panic";
import OurPortfolio from "./components/portfolio/OurPortfolio";
import RoadMap from "./components/roadMap/RoadMap";
import ScaleStartup from "./components/scaleStartup/ScaleStartup";
import ServiceLanding from "./components/service/ServiceLanding";
import StartupLanding from "./components/startup/StartupLanding";
import Subscribe from "./components/subscribe/Subscribe";
import Testimonial from "./components/testimonial/Testimonial";
import OurWorkProgress from "./components/workProgress/OurWorkProgress";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <CoreSolutions />
      <StartupLanding />
      <Testimonial />
      <ScaleStartup />
      <ServiceLanding />
      <OurWorkProgress />
      <OurPortfolio />
      <GreatProducts />
      <Dominate />
      <HyperGrowth />
      <CodeBlueprint />
      <RoadMap />
      <CodeCash />
      <Crisis />
      <Autopilot />
      {/* <Form/> */}
      <Subscribe />
      <Panic />
      <Footer />
    </div>
  );
}
