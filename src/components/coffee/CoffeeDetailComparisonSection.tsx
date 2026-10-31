import React from "react";
import { ArrowRight, X } from "lucide-react";

import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";
import { CoffeeComparison } from "@/components/ui/CoffeeComparison";
import type { Coffee } from "@/types";

interface CoffeeDetailComparisonSectionProps {
  coffee: Coffee;
  comparisonCoffee?: Coffee;
  onOpenPicker: () => void;
  onClearComparison: () => void;
}

export const CoffeeDetailComparisonSection: React.FC<
  CoffeeDetailComparisonSectionProps
> = ({
  coffee,
  comparisonCoffee,
  onOpenPicker,
  onClearComparison,
}) => {
  return (
    <Section className="bg-[#EAE2D6] !py-0">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <AnimatedElement animation={fadeInUp(150)}>
            <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[600px]">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                  Coffee comparison
                </p>

                <h2 className="font-serif text-[clamp(2.3rem,4vw,3.8rem)] font-normal leading-[1.08] tracking-[-0.04em] text-[#332A24]">
                  A study in contrast.
                </h2>

                <p className="mt-5 max-w-[440px] text-[13px] leading-[1.85] text-[#332A24]/65">
                  Every coffee tells a different story. Compare origins, roast
                  levels, and sensory characteristics to discover what sets
                  them apart.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenPicker}
                className="group inline-flex w-full items-center justify-between gap-6 border-b border-[#332A24] pb-3 text-left text-[#332A24] transition-colors hover:text-[#77765B] sm:w-auto sm:min-w-[240px]"
              >
                <span className="text-[13px] font-medium">
                  {comparisonCoffee ? "Change comparison" : "Choose a coffee"}
                </span>

                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </AnimatedElement>

          {comparisonCoffee ?
            <AnimatedElement animation={fadeInUp(250)}>
              <div className="border-t border-[#332A24]/15 pt-8">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[12px] text-[#332A24]/60">
                    Comparing{" "}
                    <span className="font-medium text-[#332A24]">
                      {coffee.name}
                    </span>{" "}
                    with{" "}
                    <span className="font-medium text-[#332A24]">
                      {comparisonCoffee.name}
                    </span>
                  </p>

                  <button
                    type="button"
                    onClick={onClearComparison}
                    className="inline-flex items-center gap-2 text-[12px] text-[#77765B] transition-colors hover:text-[#332A24]"
                  >
                    <X size={14} />
                    Remove comparison
                  </button>
                </div>

                <CoffeeComparison
                  coffee1={coffee}
                  coffee2={comparisonCoffee}
                />
              </div>
            </AnimatedElement>
          : <AnimatedElement animation={fadeInUp(250)}>
              <div className="grid grid-cols-1 gap-6 border-t border-[#332A24]/15 pt-8 sm:grid-cols-2 sm:items-center">
                <div>
                  <p className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] leading-snug text-[#332A24]">
                    Two coffees.
                    <br />
                    Two distinct characters.
                  </p>
                </div>

                <p className="max-w-[330px] text-[13px] leading-[1.8] text-[#332A24]/55 sm:ml-auto">
                  Select another coffee from the collection to see how its
                  profile compares with {coffee.name}.
                </p>
              </div>
            </AnimatedElement>
          }
        </div>
      </Container>
    </Section>
  );
};
