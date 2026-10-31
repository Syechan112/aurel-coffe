import React from 'react';
import { getFeaturedCoffees, FLAVOR_FAMILY_OPTIONS } from '@/data/catalog';
import {
  HeroSection,
  TasteSection,
  FlavorInvitationSection,
  CuratedCollectionSection,
  OriginCraftSection,
  BrewingRitualSection,
} from '@/components/home';

export default function Home() {
  const featured = getFeaturedCoffees();
  const selectedFamilies = FLAVOR_FAMILY_OPTIONS.slice(0, 2);

  return (
    <>
      <HeroSection coffees={featured} />
      <TasteSection />
      <FlavorInvitationSection selectedFamilies={selectedFamilies} />
      <CuratedCollectionSection coffees={featured} />
      <OriginCraftSection />
      <BrewingRitualSection />
    </>
  );
}
