import React from "react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInLeft, fadeInUp } from "@/hooks/useInViewAnimation";

interface CraftIntroductionProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
}

export const CraftIntroduction: React.FC<CraftIntroductionProps> = ({
  eyebrow = "Our approach",
  headline = "Great coffee begins long before the first bean reaches the roaster.",
  description = "Every decision matters, from the people who grow the coffee to the precise moment we finish a roast. Our work is to preserve what makes each origin distinct.",
}) => (
  <Section className="bg-[#F3EDE2] !py-0">
    <Container>
      <div className="grid grid-cols-1 gap-8 border-b border-[#332A24]/20 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <AnimatedElement
          animation={fadeInLeft(150)}
          className="lg:col-span-4"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
            {eyebrow}
          </p>
        </AnimatedElement>

        <AnimatedElement
          animation={fadeInUp(250)}
          className="lg:col-span-8"
        >
          <h2 className="max-w-[780px] font-serif text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.17] tracking-[-0.035em] text-[#332A24]">
            {headline}
          </h2>

          <p className="mt-7 max-w-[560px] text-[14px] leading-[1.95] text-[#332A24]/65">
            {description}
          </p>
        </AnimatedElement>
      </div>
    </Container>
  </Section>
);