import React from "react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInLeft, fadeInRight } from "@/hooks/useInViewAnimation";

export const Phase01Sourcing = () => (
  <Section className="bg-[#F3EDE2] !py-0">
    <Container>
      <div className="grid grid-cols-1 gap-10 border-b border-[#332A24]/20 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <AnimatedElement
          animation={fadeInLeft(150)}
          className="lg:col-span-5"
        >
          <div className="lg:sticky lg:top-32">
            <div className="mb-10 flex items-center gap-4">
              <span className="font-serif text-[48px] leading-none tracking-[-0.05em] text-[#D7C6A8] sm:text-[64px]">
                01
              </span>

              <div className="h-px w-12 bg-[#332A24]/25" />

              <span className="text-[11px] uppercase tracking-[0.12em] text-[#77765B]">
                Sourcing
              </span>
            </div>

            <h2 className="max-w-[420px] font-serif text-[clamp(2.8rem,4.5vw,5rem)] leading-[1.05] tracking-[-0.045em] text-[#332A24]">
              Sourcing
              <br />
              with a name.
            </h2>
          </div>
        </AnimatedElement>

        <AnimatedElement
          animation={fadeInRight(250)}
          className="lg:col-span-7"
        >
          <div className="max-w-[660px] lg:pt-24">
            <p className="mb-8 font-serif text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.4] text-[#332A24]">
              We believe origin should be more than a country printed on a bag.
            </p>

            <div className="space-y-6 text-[14px] leading-[2] text-[#332A24]/70 sm:text-[15px]">
              <p>
                We don't buy "Ethiopian coffee" or "South American blends."
                We buy lots from specific washing stations, single estates,
                and cooperatives where we know the manager's name.
              </p>

              <p>
                Every purchase contract includes a transparency sheet:
                altitude, varietal breakdown, screen size, and processing
                window.
              </p>

              <p>
                We cup pre-shipment samples three times before committing. If
                the moisture level is above 11.5% or water activity exceeds
                0.60 aw, we decline.
              </p>

              <p>
                Green coffee is living seed. If it isn't dried and stored with
                precision, no roaster on earth can save it.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#332A24]/15 pt-6">
              <div>
                <p className="font-serif text-[clamp(2rem,3vw,3rem)] tracking-[-0.04em] text-[#332A24]">
                  11.5%
                </p>

                <p className="mt-2 text-[11px] leading-relaxed text-[#332A24]/50">
                  Maximum accepted moisture
                </p>
              </div>

              <div>
                <p className="font-serif text-[clamp(2rem,3vw,3rem)] tracking-[-0.04em] text-[#332A24]">
                  0.60
                </p>

                <p className="mt-2 text-[11px] leading-relaxed text-[#332A24]/50">
                  Maximum water activity (aw)
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Container>
  </Section>
);