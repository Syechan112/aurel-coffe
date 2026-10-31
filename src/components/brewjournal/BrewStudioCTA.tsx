import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Container, Section, AnimatedElement } from "@/components/ui";

import { fadeInUp } from "@/hooks/useInViewAnimation";

interface BrewStudioCTAProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const BrewStudioCTA: React.FC<BrewStudioCTAProps> = ({
  eyebrow = "A little practice goes a long way",
  headline = "Now, make\nsomething good.",
  description = "You've read the notes. Now it's your turn to experiment. Find your ratio, adjust the details, and make a cup that feels right to you.",
  ctaLabel = "Let's brew something",
  ctaHref = "/brew-studio",
}) => {
  const headlineLines = headline
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <Section className="relative overflow-hidden bg-[#DCCDB7] !py-0">
      <Container>
        <div className="relative py-20 sm:py-28 lg:py-36">
          <AnimatedElement animation={fadeInUp(150)}>
            <div className="max-w-[960px]">
              <p className="mb-9 font-serif text-[18px] italic text-[#77765B] sm:mb-12 sm:text-[22px]">
                {eyebrow}
              </p>

              <h2 className="font-serif text-[clamp(3.5rem,8vw,8.5rem)] font-normal leading-[0.98] tracking-[-0.06em] text-[#332A24]">
                {headlineLines.map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    <span
                      className={
                        index === headlineLines.length - 1 ?
                          "italic text-[#77765B]"
                        : ""
                      }
                    >
                      {line}
                    </span>
                  </React.Fragment>
                ))}
              </h2>
            </div>
          </AnimatedElement>

          <AnimatedElement animation={fadeInUp(250)}>
            <div className="mt-12 flex flex-col gap-9 sm:mt-16 lg:ml-auto lg:max-w-[410px]">
              <p className="text-[15px] leading-[1.9] text-[#332A24]/75">
                {description}
              </p>

              <Link
                to={ctaHref}
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#332A24] px-7 py-4 text-[13px] font-medium text-[#F3EDE2] transition-all duration-300 hover:bg-[#77765B]"
              >
                {ctaLabel}

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </AnimatedElement>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-20 hidden font-serif text-[260px] italic leading-none text-[#332A24]/[0.035] lg:block"
          >
            b.
          </div>
        </div>
      </Container>
    </Section>
  );
};
