import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";
import { BACKGROUND_IMAGE_REF } from "@/data/imageRef";

const brewingPrinciples = [
  {
    label: "Dose",
    value: "1:16",
    description: "A balanced starting ratio of coffee to water.",
  },
  {
    label: "Water",
    value: "92–96°C",
    description: "A useful temperature range for many filter brews.",
  },
  {
    label: "Time",
    value: "2:30–4:00",
    description: "A starting window for pour-over brewing.",
  },
];

export const BrewingRitualSection: React.FC = () => {
  return (
    <Section
      id="brewing-ritual"
      className="overflow-hidden bg-[#EAE2D5] !py-20 md:!py-28 lg:!py-32"
    >
      <Container>
        {/* Editorial heading */}
        <AnimatedElement animation={fadeInUp(150)}>
          <div className="mb-12 grid grid-cols-1 gap-8 md:mb-16 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p className="mb-6 text-[12px] font-medium text-[#77765B]">
                AUREL / Brewing Ritual
              </p>

              <h2 className="max-w-[800px] font-serif text-[clamp(3.2rem,6vw,6.5rem)] font-normal leading-[1.02] tracking-[-0.045em] text-[#332A24]">
                A better cup
                <br />
                begins here.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-[330px] text-[14px] leading-[1.85] text-[#332A24]/65 lg:ml-auto">
                Brewing is a practice of attention. A few thoughtful adjustments
                can change the way every cup tastes.
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Brewing photography */}
        <AnimatedElement animation={fadeInUp(250)}>
          <figure>
            <div className="overflow-hidden bg-[#D7C6A8]">
              <img
                src={BACKGROUND_IMAGE_REF.brewingRitual}
                alt="Hand brewing specialty coffee"
                loading="lazy"
                className="block aspect-[4/3] w-full object-cover object-center sm:aspect-[16/9] lg:aspect-[21/9]"
              />
            </div>

            <figcaption className="mt-3 text-[11px] text-[#332A24]/50">
              The quiet craft of brewing.
            </figcaption>
          </figure>
        </AnimatedElement>

        {/* Brewing guide */}
        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[#332A24]/20 pt-9 lg:mt-20 lg:grid-cols-12 lg:gap-12 lg:pt-12">
          {/* Guide introduction */}
          <AnimatedElement animation={fadeInUp(350)} className="lg:col-span-4">
            <div className="max-w-[300px]">
              <p className="mb-4 text-[12px] text-[#77765B]">The essentials</p>

              <h3 className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-normal leading-[1.15] tracking-[-0.03em] text-[#332A24]">
                Small details.
                <br />
                Better brewing.
              </h3>

              <p className="mt-5 text-[13px] leading-[1.8] text-[#332A24]/60">
                Start with these simple guidelines, then adjust to suit your
                coffee and personal taste.
              </p>
            </div>
          </AnimatedElement>

          {/* Brewing parameters */}
          <AnimatedElement animation={fadeInUp(450)} className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
              {brewingPrinciples.map((principle) => (
                <div key={principle.label}>
                  <p className="mb-5 text-[12px] font-medium text-[#77765B]">
                    {principle.label}
                  </p>

                  <p className="font-serif text-[clamp(2.2rem,3.5vw,3.25rem)] font-normal leading-none tracking-[-0.035em] text-[#332A24]">
                    {principle.value}
                  </p>

                  <p className="mt-4 max-w-[200px] text-[12px] leading-[1.8] text-[#332A24]/60">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 border-t border-[#332A24]/20 pt-7">
              <Link
                to="/brew-studio"
                className="group inline-flex items-center gap-4 text-[13px] font-medium text-[#332A24]"
              >
                Explore Brew Studio
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#332A24]/30 transition-colors duration-300 group-hover:border-[#332A24] group-hover:bg-[#332A24] group-hover:text-[#F3EDE2]">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </Section>
  );
};



