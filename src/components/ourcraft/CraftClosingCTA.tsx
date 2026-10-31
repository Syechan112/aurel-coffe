import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Container, Section, AnimatedElement } from "@/components/ui";

import { fadeInUp } from "@/hooks/useInViewAnimation";

interface CraftClosingCTAProps {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  eyebrow?: string;
}

export const CraftClosingCTA: React.FC<CraftClosingCTAProps> = ({
  heading = "Discover what\ncare tastes like.",
  description = "Every coffee in our collection carries an open sensory profile. Explore its acidity, body, sweetness, and bitterness.",
  ctaLabel = "Explore the collection",
  ctaHref = "/collection",
  eyebrow = "Beyond the process",
}) => {
  const headingLines = heading
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <Section className="relative overflow-hidden bg-[#EAE2D6] !py-0">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <AnimatedElement animation={fadeInUp(150)}>
            {/* Section identity */}
            <div className="mb-12 flex items-center justify-between gap-5 border-b border-[#332A24]/20 pb-5 sm:mb-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                {eyebrow}
              </p>

              <span className="hidden text-[11px] text-[#332A24]/45 sm:block">
                AUREL / The next chapter
              </span>
            </div>

            {/* Editorial composition */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-8">
                <h2 className="max-w-[850px] font-serif text-[clamp(2.8rem,5.5vw,6rem)] font-normal leading-[1.08] tracking-[-0.045em] text-[#332A24]">
                  {headingLines.map((line, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h2>
              </div>

              <div className="lg:col-span-4">
                <div className="max-w-[350px] lg:ml-auto">
                  <p className="text-[14px] leading-[1.9] text-[#332A24]/65">
                    {description}
                  </p>

                  <Link
                    to={ctaHref}
                    className="group mt-8 inline-flex items-center gap-5 border-b border-[#332A24] pb-3 text-[13px] font-medium text-[#332A24] transition-colors duration-300 hover:border-[#77765B] hover:text-[#77765B]"
                  >
                    {ctaLabel}

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Closing detail */}
            <div className="mt-16 flex items-center justify-between gap-5 border-t border-[#332A24]/15 pt-5 sm:mt-20">
              <span className="text-[11px] text-[#332A24]/45">
                From our craft to your cup.
              </span>

              <span className="font-serif text-[16px] italic text-[#77765B]">
                AUREL.
              </span>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </Section>
  );
};
