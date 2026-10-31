import React from "react";
import { ArrowDownRight } from "lucide-react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";

interface BrewStudioHeroProps {
  onWorkspaceScroll?: () => void;
}

export const BrewStudioHero: React.FC<BrewStudioHeroProps> = ({
  onWorkspaceScroll,
}) => {
  return (
    <Section className="bg-[#F3EDE2] !py-0">
      <Container>
        <div className="pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
          <AnimatedElement animation={fadeInUp(150)}>
            <div className="flex items-center justify-between gap-5">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                AUREL / Brew Studio
              </span>

              <span className="hidden text-[11px] text-[#332A24]/45 sm:block">
                A little precision goes a long way
              </span>
            </div>

            <div className="mt-12 max-w-[950px]">
              <p className="mb-4 font-serif text-[clamp(1.3rem,2.5vw,2rem)] italic text-[#77765B]">
                Your next cup starts here.
              </p>

              <h1 className="font-serif text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.98] tracking-[-0.06em] text-[#332A24]">
                Make it
                <br />
                <span className="italic">your own.</span>
              </h1>
            </div>

            <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#332A24]/20 pt-5 sm:mt-14 sm:flex-row sm:items-end">
              <p className="max-w-[440px] text-[14px] leading-[1.85] text-[#332A24]/65">
                Choose how you brew, adjust your dose, and find the right
                balance of coffee and water. A useful starting point for a
                better cup.
              </p>

              <a
                href="#brew-workspace"
                onClick={onWorkspaceScroll}
                className="inline-flex w-fit items-center gap-2 text-[12px] font-medium text-[#332A24] transition-colors hover:text-[#77765B]"
              >
                Start brewing
                <ArrowDownRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </Section>
  );
};