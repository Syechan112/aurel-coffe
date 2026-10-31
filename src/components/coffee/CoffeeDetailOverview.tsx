import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/hooks/useInViewAnimation";
import { SensoryProfile } from "@/components/ui/SensoryProfile";
import { Badge } from "@/components/ui/Badge";
import type { Coffee } from "@/types";

interface CoffeeDetailOverviewProps {
  coffee: Coffee;
}

export const CoffeeDetailOverview: React.FC<CoffeeDetailOverviewProps> = ({
  coffee,
}) => {
  return (
    <Section className="bg-[#F3EDE2] !py-0">
      <Container>
        <div className="pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
          {/* Breadcrumb */}
          <AnimatedElement animation={fadeInUp(150)}>
            <Link
              to="/collection"
              className="group mb-10 inline-flex items-center gap-3 text-[12px] text-[#332A24]/60 transition-colors hover:text-[#332A24] sm:mb-12"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to collection
            </Link>
          </AnimatedElement>

          {/* Product presentation */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-20">
            {/* Product image */}
            <AnimatedElement
              animation={fadeInLeft(250)}
              className="lg:col-span-6"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#E8DFD2]">
                <img
                  src={coffee.image}
                  alt={coffee.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedElement>

            {/* Coffee information */}
            <AnimatedElement
              animation={fadeInRight(350)}
              className="lg:col-span-6"
            >
              <div className="lg:pt-4">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                    {coffee.originCountry}
                  </p>

                  <span className="text-[11px] text-[#332A24]/45">
                    AUREL Coffee Collection
                  </span>
                </div>

                <h1 className="max-w-[650px] font-serif text-[clamp(3rem,5.5vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.045em] text-[#332A24]">
                  {coffee.name}
                </h1>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="roast" value={coffee.roastLevel} />

                  <Badge
                    variant="process"
                    value={coffee.process || "washed"}
                  />
                </div>

                <p className="mt-8 max-w-[510px] text-[14px] leading-[1.95] text-[#332A24]/70 sm:text-[15px]">
                  {coffee.description}
                </p>

                {/* Tasting notes */}
                <div className="mt-10 border-t border-[#332A24]/15 pt-7">
                  <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#77765B]">
                    Tasting notes
                  </p>

                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {coffee.tastingNotes.map((note, index) => (
                      <React.Fragment key={note}>
                        {index > 0 && (
                          <span className="text-[#332A24]/25">/</span>
                        )}

                        <span className="font-serif text-[17px] capitalize text-[#332A24] sm:text-[19px]">
                          {note}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Sensory profile */}
                <div className="mt-9 border-t border-[#332A24]/15 pt-7">
                  <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#77765B]">
                    Sensory profile
                  </p>

                  <SensoryProfile sensory={coffee.sensory} labels={true} />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </Section>
  );
};
