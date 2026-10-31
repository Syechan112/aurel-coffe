import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";
import { CoffeeCard } from "@/components/coffee/CoffeeCard";
import type { Coffee } from "@/types";

interface CuratedCollectionProps {
  coffees: Coffee[];
}

export const CuratedCollectionSection: React.FC<CuratedCollectionProps> = ({
  coffees,
}) => {
  const selectedCoffees = coffees.slice(0, 3);

  if (selectedCoffees.length === 0) return null;

  return (
    <Section
      id="curated-collection"
      className="bg-[#F3EDE2] !py-20 md:!py-28 lg:!py-32"
    >
      <Container>
        {/* Editorial introduction */}
        <AnimatedElement
          animation={fadeInUp()}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-[760px]">
              <p className="mb-6 text-[12px] font-medium tracking-[0.02em] text-[#77765B]">
                AUREL / The Coffee Edit
              </p>

              <h2 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.045em] text-[#332A24]">
                A considered
                <br />
                selection.
              </h2>
            </div>

            <div className="max-w-[300px] lg:pb-2">
              <p className="text-[14px] leading-[1.85] text-[#332A24]/65">
                Three coffees, each with a character of its own. Chosen for the
                moments worth making time for.
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Editorial product composition */}
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          {selectedCoffees[0] && (
            <AnimatedElement
              animation={fadeInUp(150)}
              className="min-w-0 md:col-span-2 lg:col-span-6"
            >
              <div className="lg:pr-4">
                <CoffeeCard coffee={selectedCoffees[0]} />
              </div>
            </AnimatedElement>
          )}

          <div className="grid min-w-0 grid-cols-1 gap-y-12 md:col-span-2 md:grid-cols-2 md:gap-x-7 lg:col-span-6 lg:items-start lg:gap-x-8 lg:pt-20">
            {selectedCoffees.slice(1).map((coffee, index) => (
              <AnimatedElement
                key={coffee.slug}
                animation={fadeInUp(250 + index * 100)}
                className="min-w-0"
              >
                <CoffeeCard coffee={coffee} />
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Collection navigation */}
        <AnimatedElement animation={fadeInUp()}>
          <div className="mt-14 flex flex-col gap-6 border-t border-[#332A24]/20 pt-7 sm:flex-row sm:items-center sm:justify-between md:mt-20">
            <p className="text-[12px] text-[#332A24]/55">
              Explore the complete AUREL coffee collection.
            </p>

            <Link
              to="/collection"
              className="group inline-flex items-center gap-3 self-start text-[13px] font-medium text-[#332A24] sm:self-auto"
            >
              View all coffees
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </AnimatedElement>
      </Container>
    </Section>
  );
};
