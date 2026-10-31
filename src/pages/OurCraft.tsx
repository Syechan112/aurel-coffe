import React from "react";

import {
  CraftHero,
  CraftIntroduction,
  Phase01Sourcing,
  Phase02Roasting,
  Phase03QualityAssurance,
  CraftClosingCTA,
} from "@/components/ourcraft";

export default function OurCraft() {
  return (
    <>
      <CraftHero />
      <CraftIntroduction />
      <Phase01Sourcing />
      <Phase02Roasting />
      <Phase03QualityAssurance />
      <CraftClosingCTA />
    </>
  );
}
