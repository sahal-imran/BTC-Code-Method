import React from "react";
import Slider from "../components/Home/CryptoPriceSlider/Slider";
import Hero from "../components/Home/Hero/Hero";
import Antivirious from "../components/Home/Antivirious/Antivirious";
import Features from "../components/Home/ImpressiveFeatures/Features";
import AsSeenOn from "../components/Home/AsSeenOn/AsSeenOn";
import GetStarted from "../components/Home/GetStarted/GetStarted";
import GrowingInvestors from "../components/Home/GrowingInvestors/GrowingInvestors";
import StayAhead from "../components/Home/StayAhead/StayAhead";
import FAQ from "../components/Home/FAQ's/FAQ";
import Highlights from "../components/Home/Highlights/Highlights";

function Homepage() {
  return (
    <>
      <Slider />
      <Hero />
      <Antivirious />
      <Features />
      <AsSeenOn />
      <GetStarted />
      <GrowingInvestors />
      <StayAhead />
      <FAQ />
      <Highlights />
    </>
  );
}

export default Homepage;
