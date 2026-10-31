import React from "react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInLeft, fadeInUp } from "@/hooks/useInViewAnimation";

interface QualityStatementProps {
  statement?: string;
}

export const Phase03QualityAssurance: React.FC<QualityStatementProps> = ({
  statement = "If a batch misses its development curve by more than five seconds, it goes to our cold brew tank or staff supply, never under the single-origin label.",
}) => (
  <Section className="bg-[#F3EDE2] !py-0">
    <Container>
      <div className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <AnimatedElement
          animation={fadeInLeft(150)}
          className="lg:col-span-4"
        >
          <div className="flex items-center gap-4">
            <span className="font-serif text-[48px] leading-none tracking-[-0.05em] text-[#D7C6A8] sm:text-[64px]">
              03
            </span>

            <div className="h-px w-12 bg-[#332A24]/25" />

            <span className="text-[11px] uppercase tracking-[0.12em] text-[#77765B]">
              Cupping & QA
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement
          animation={fadeInUp(250)}
          className="lg:col-span-8"
        >
          <h2 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1.05] tracking-[-0.045em] text-[#332A24]">
            The morning cup.
          </h2>

          <p className="mt-8 max-w-[670px] font-serif text-[clamp(1.3rem,2.3vw,2rem)] leading-[1.5] text-[#332A24]/85">
            Every batch earns its place in the collection.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 text-[14px] leading-[1.95] text-[#332A24]/70 sm:grid-cols-2 sm:gap-10 sm:text-[15px]">
            <p>
              Every single batch is cupped the morning after roasting. No bag
              leaves the shelf until the batch has passed a blind sensory
              evaluation against the SCA protocol.
            </p>

            <p>
              We evaluate fragrance and aroma, flavor, aftertaste, acidity, body,
              balance, and clean cup. Each dimension contributes to our
              assessment of the coffee.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-[#77765B] pl-6 sm:pl-8">
            <p className="max-w-[640px] font-serif text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.6] text-[#332A24]">
              {statement}
            </p>
          </div>
        </AnimatedElement>
      </div>
    </Container>
  </Section>
);