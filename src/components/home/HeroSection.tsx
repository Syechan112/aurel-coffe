import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";
import { BACKGROUND_IMAGE_REF } from "@/data/imageRef";
import type { Coffee } from "@/types";

interface HeroSectionProps {
  coffees: Coffee[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ coffees }) => {
  const featuredCoffee = coffees[0];

  return (
    <Section
      dark
      id="hero"
      className="relative isolate overflow-hidden bg-[#382E28] !py-0"
    >
      {/* Background photography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed lg:bg-[position:center_55%]"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE_REF.homeHero})`,
        }}
      />

      {/* Directional overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#211913]/85
          via-[#211913]/55
          to-[#211913]/20
        "
      />

      {/* Overall tonal balance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#211913]/15"
      />

      <div className="relative z-10">
        <Container>
          <div className="flex min-h-svh flex-col pt-[76px]">
            {/* Main hero */}
            <div className="flex flex-1 items-center py-16 sm:py-20 lg:py-24">
              <div className="w-full max-w-[720px]">
                <AnimatedElement animation={fadeInUp(200)}>
                  <p className="mb-7 text-[12px] font-medium uppercase tracking-[0.14em] text-[#D7C6A8] sm:mb-8">
                    Aurel Coffee Roastery
                  </p>
                </AnimatedElement>

                <AnimatedElement animation={fadeInUp(350)}>
                  <h1 className="max-w-[720px] font-serif text-[clamp(3.25rem,6.3vw,5.5rem)] font-normal leading-[1.08] tracking-[-0.035em] text-[#F3EDE2]">
                    Coffee for
                    <br />
                    <span className="text-[#D7C6A8]">slower moments.</span>
                  </h1>
                </AnimatedElement>

                <AnimatedElement animation={fadeInUp(500)}>
                  <div className="mt-8 max-w-[390px] sm:mt-10">
                    <p className="text-[14px] font-normal leading-[1.85] text-[#F3EDE2]/75 sm:text-[15px]">
                      Thoughtfully sourced and carefully roasted. Made to bring
                      a little more meaning to your everyday coffee ritual.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
                      <Link
                        to="/flavor-explorer"
                        className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-[#E6D7C2] px-6 py-3 text-[13px] font-medium text-[#332A24] transition-colors duration-300 hover:bg-[#F3EDE2]"
                      >
                        Find your coffee
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>

                      <Link
                        to="/collection"
                        className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#F3EDE2]/85 transition-colors duration-300 hover:text-[#F3EDE2]"
                      >
                        Explore collection
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            {/* Featured coffee */}
            {featuredCoffee && (
              <AnimatedElement animation={fadeInUp(650)}>
                <div className="border-t border-[#F3EDE2]/20">
                  <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:py-7">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#D7C6A8]/75">
                        Featured coffee
                      </span>

                      <h2 className="font-serif text-[23px] font-normal tracking-[-0.02em] text-[#F3EDE2]">
                        {featuredCoffee.name}
                      </h2>
                    </div>

                    <div className="flex items-center justify-between gap-8 sm:justify-end">
                      <div className="flex flex-col gap-1">
                        <span className="text-[12px] text-[#F3EDE2]/75">
                          {featuredCoffee.originCountry}
                        </span>

                        <span className="text-[12px] text-[#D7C6A8]/60">
                          {featuredCoffee.tastingNotes.slice(0, 2).join(" · ")}
                        </span>
                      </div>

                      <Link
                        to="/collection"
                        aria-label={`Explore ${featuredCoffee.name}`}
                        className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F3EDE2]/30 text-[#F3EDE2] transition-all duration-300 hover:border-[#E6D7C2] hover:bg-[#E6D7C2] hover:text-[#332A24]"
                      >
                        <ArrowRight
                          size={17}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            )}
          </div>
        </Container>
      </div>
    </Section>
  );
};
