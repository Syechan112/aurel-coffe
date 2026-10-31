import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";
import { STEP_IMAGE_REF } from "@/data/imageRef";

const craftSteps = [
  {
    title: "The origin",
    description: "It begins with the people and places behind every harvest.",
    image: STEP_IMAGE_REF.origin,
    alt: "Coffee growing at its place of origin",
  },
  {
    title: "The process",
    description:
      "Careful selection and processing reveal each coffee's character.",
    image: STEP_IMAGE_REF.process,
    alt: "Coffee being carefully processed",
  },
  {
    title: "The roast",
    description: "Thoughtful roasting brings out the qualities already within.",
    image: STEP_IMAGE_REF.roast,
    alt: "Coffee beans during the roasting process",
  },
  {
    title: "The serving",
    description: "Sharing a warm cup turns a simple pause into a small ritual.",
    image: STEP_IMAGE_REF.serving,
    alt: "Freshly prepared coffee ready to serve",
  },
];

const stepLayouts = [
  "lg:col-span-7",
  "lg:col-span-4 lg:col-start-9 lg:pt-28",
  "lg:col-span-4 lg:col-start-2 lg:pt-16",
  "lg:col-span-6 lg:col-start-7",
];

const imageRatios = [
  "aspect-[5/4] lg:aspect-[6/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[5/4] lg:aspect-[6/5]",
];

export const OriginCraftSection: React.FC = () => {
  return (
    <Section
      id="origin-craft"
      className="overflow-hidden bg-[#F3EDE2] !py-20 md:!py-28 lg:!py-32"
    >
      <Container>
        {/* Editorial introduction */}
        <AnimatedElement animation={fadeInUp()}>
          <div className="mb-14 flex flex-col gap-7 md:mb-20 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[730px]">
              <p className="mb-6 text-[12px] font-medium tracking-[0.02em] text-[#77765B]">
                AUREL / Origin & Craft
              </p>

              <h2 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] font-normal leading-[1.06] tracking-[-0.045em] text-[#332A24]">
                A journey from
                <br />
                earth to cup.
              </h2>
            </div>

            <p className="max-w-[310px] text-[14px] leading-[1.85] text-[#332A24]/65">
              Good coffee is shaped long before it reaches your cup. Follow the
              care behind every step.
            </p>
          </div>
        </AnimatedElement>

        {/* Editorial photo sequence */}
        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-20">
          {craftSteps.map((step, index) => (
            <AnimatedElement
              key={step.title}
              animation={fadeInUp(150 + index * 100)}
              className={`min-w-0 ${stepLayouts[index]}`}
            >
              <article>
                {/* Photography */}
                <div className="overflow-hidden bg-[#D8C9B4]">
                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                    className={`block w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.025] ${imageRatios[index]}`}
                  />
                </div>

                {/* Caption */}
                <div className="mt-5 flex items-start gap-5 sm:mt-6">
                  <span className="min-w-[28px] pt-1 text-[11px] tabular-nums text-[#77765B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="max-w-[350px]">
                    <h3 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-normal tracking-[-0.025em] text-[#332A24]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-[1.8] text-[#332A24]/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedElement>
          ))}
        </div>

        {/* Closing navigation */}
        <AnimatedElement animation={fadeInUp()}>
          <div className="mt-16 flex flex-col gap-5 border-t border-[#332A24]/20 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
            <p className="text-[12px] text-[#332A24]/55">
              From thoughtful sourcing to the final pour.
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 self-start text-[13px] font-medium text-[#332A24] sm:self-auto"
            >
              Discover our approach
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
