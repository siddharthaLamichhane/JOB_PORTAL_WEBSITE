import React from "react";
import { HeroSection } from "./HeroSection.jsx";
import { CategoryCrousel } from "./CategoryCrousel.jsx";
import { LatestJob } from "./LatestJob.jsx";
import { Footer } from "./Footer.jsx";
export const HomeShare = () => {
  return (
    <div>
      <HeroSection />
      <CategoryCrousel />
      <LatestJob />
      <Footer />
    </div>
  );
};
