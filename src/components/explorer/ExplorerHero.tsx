import React from "react";

import { Container, Section, AnimatedElement } from "@/components/ui";

import { fadeInUp, fadeInRight } from "@/hooks/useInViewAnimation";

interface ExplorerHeroProps {
  coffeeCount: number;
}

export const ExplorerHero: React.FC<ExplorerHeroProps> = ({ coffeeCount }) => {
  return (
    <Section
      id="explorer-hero"
      dark
      className="relative isolate overflow-hidden bg-[#332A24] !py-0"
    >
      <Container>
        <div className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14">
          {/* Section identity */}
          <AnimatedElement animation={fadeInUp(150)}>
            <div className="flex items-center justify-between gap-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#D7C6A8]/75">
                AUREL / Flavor Explorer
              </p>

              <span className="hidden text-[11px] text-[#F3EDE2]/45 sm:block">
                An exploration of taste
              </span>
            </div>
          </AnimatedElement>

          {/* Editorial composition */}
          <div className="mt-14 sm:mt-16 lg:mt-20">
            <AnimatedElement animation={fadeInUp(250)}>
              <div className="flex flex-col">
                <p className="mb-3 font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-normal tracking-[-0.025em] text-[#D7C6A8]">
                  Discover your kind of
                </p>

                <h1 className="font-sans text-[clamp(4.4rem,12.5vw,12rem)] font-normal uppercase leading-[0.82] tracking-[-0.09em] text-[#F3EDE2]">
                  Coffee.
                </h1>
              </div>
            </AnimatedElement>

            {/* Supporting copy */}
            <AnimatedElement animation={fadeInRight(350)}>
              <div className="mt-10 flex flex-col gap-6 sm:mt-12 lg:flex-row lg:items-end lg:justify-between">
                <p className="max-w-[390px] text-[14px] leading-[1.85] text-[#F3EDE2]/65">
                  Explore coffee through the flavors you enjoy. Refine your
                  preferences and discover a selection shaped around your taste.
                </p>

                <div className="flex items-baseline gap-3 lg:pb-1">
                  <span className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#D7C6A8]">
                    {String(coffeeCount).padStart(2, "0")}
                  </span>

                  <span className="text-[12px] text-[#F3EDE2]/50">
                    coffees to discover
                  </span>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Closing line */}
          <AnimatedElement animation={fadeInUp(450)}>
            <div className="mt-12 border-t border-[#F3EDE2]/20 sm:mt-14 lg:mt-16" />
          </AnimatedElement>
        </div>
      </Container>
    </Section>
  );
};
