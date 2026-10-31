import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";
import { FLAVOR_FAMILY_OPTIONS } from "@/data/catalog";
import { BACKGROUND_IMAGE_REF } from "@/data/imageRef";

export const TasteSection: React.FC = () => {
  return (
    <Section
      id="taste-atlas"
      className="overflow-hidden bg-[#F3EDE2] !py-20 md:!py-28 lg:!py-32"
    >
      <Container>
        {/* Editorial heading */}
        <div className="pb-10 md:pb-14 lg:pb-16">
          <AnimatedElement animation={fadeInUp(200)}>
            <div className="flex items-center justify-between gap-6">
              <span className="text-[11px] font-medium tracking-[0.02em] text-[#77765B]">
                AUREL / Taste
              </span>

              <span className="hidden text-[11px] text-[#332A24]/50 sm:block">
                A study of coffee & character
              </span>
            </div>
          </AnimatedElement>

          <div className="mt-14 md:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 items-end gap-7 lg:grid-cols-12 lg:gap-8">
              {/* Headline */}
              <AnimatedElement
                animation={fadeInUp(300)}
                className="lg:col-span-8"
              >
                <p className="mb-2 text-[15px] font-normal tracking-[-0.02em] text-[#332A24] sm:text-[17px]">
                  A world of
                </p>

                <h2 className="font-sans text-[clamp(4.5rem,11.5vw,11rem)] font-normal leading-[0.82] tracking-[-0.085em] text-[#332A24]">
                  FLAVOR.
                </h2>
              </AnimatedElement>

              {/* Supporting copy */}
              <AnimatedElement
                animation={fadeInUp(450)}
                className="lg:col-span-4"
              >
                <div className="max-w-[310px] lg:ml-auto lg:pb-1">
                  <p className="text-[13px] font-normal leading-[1.8] text-[#332A24]/70 sm:text-[14px]">
                    Every coffee carries its own character. Explore the notes,
                    textures, and aromas that make each cup distinct.
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>

        {/* Full-width editorial photography */}
        <AnimatedElement animation={fadeInUp(500)}>
          <div className="relative w-full overflow-hidden bg-[#D7C6A8]">
            <img
              src={BACKGROUND_IMAGE_REF.taste}
              alt="An editorial exploration of specialty coffee"
              loading="lazy"
              className="
                block
                aspect-[4/3] w-full
                object-cover object-center
                sm:aspect-[16/9]
                lg:aspect-[21/9]
              "
            />
          </div>
        </AnimatedElement>

        {/* Flavor navigation */}
        <AnimatedElement animation={fadeInUp(600)}>
          <div className="flex flex-col gap-7 border-b border-[#332A24]/20 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:py-9">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-8">
              {FLAVOR_FAMILY_OPTIONS.map((family) => (
                <span
                  key={family}
                  className="font-serif text-[18px] font-normal capitalize tracking-[-0.025em] text-[#332A24] sm:text-[20px]"
                >
                  {family}
                </span>
              ))}
            </div>

            <Link
              to="/flavor-explorer"
              className="group inline-flex shrink-0 items-center gap-3 self-start text-[13px] font-medium text-[#332A24] sm:self-auto"
            >
              Explore flavors
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
