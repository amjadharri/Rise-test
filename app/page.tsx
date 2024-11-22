import BuildArmy from "./components/build-army";
import EmailOptIn from "./components/common/EmailOptIn";
import DividerMenu from "./components/divider-menu";
import ExploreHero from "./components/explore-hero";
import FAQs from "./components/faqs/faqs";
import Features from "./components/features";
import GameEditionsGrid from "./components/game-edition";
import HeroSection from "./components/hero-section";
import HeroDetails from "./components/heros-detail-slider";
import HowToBuy from "./components/how-to-buy";
import FactionSlider from "./components/meme-kindom";
import Roadmap from "./components/roadmap";
import Tokenmoics from "./components/tokenomics";
import bg from "/public/assets/Tokenomics-bg.png";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <EmailOptIn />
      <DividerMenu />
      <Features />
      <div>
        <ExploreHero />
      </div>
      <HeroDetails />
      <FactionSlider />
      <BuildArmy />
      <div
        className="bg-cover bg-center min-h-screen bg-no-repeat "
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Tokenmoics />
        <Roadmap />
      </div>
      <div
        className="relative bg-bottom bg-cover  bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/editionBg.png')",
        }}
      >
        <GameEditionsGrid />
        <HowToBuy />
      </div>
      <FAQs />
    </div>
  );
}
