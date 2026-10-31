import React from "react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/hooks/useInViewAnimation";

interface CraftPhaseItem {
  title: string;
  detail: string;
}

interface Phase02RoastingProps {
  categories?: CraftPhaseItem[];
}

export const Phase02Roasting: React.FC<Phase02RoastingProps> = ({
  categories = [
    { title: "Light", detail: "Floral & bright" },
    { title: "Medium", detail: "Sweet & balanced" },
    { title: "Dark", detail: "Deep & expressive" },
  ],
}) => (
  <Section className="bg-[#EAE2D6] !py-0">
    <Container>
      <div className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <AnimatedElement
          animation={fadeInUp(150)}
          className="lg:col-span-12"
        >
          <div className="flex items-center gap-4">
            <span className="font-serif text-[48px] leading-none tracking-[-0.05em] text-[#B9A98D] sm:text-[64px]">
              02
            </span>

            <div className="h-px w-12 bg-[#332A24]/25" />

            <span className="text-[11px] uppercase tracking-[0.12em] text-[#77765B]">
              The Roast
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement
          animation={fadeInLeft(250)}
          className="lg:col-span-7"
        >
          <h2 className="max-w-[700px] font-serif text-[clamp(2.8rem,5vw,5.5rem)] leading-[1.05] tracking-[-0.045em] text-[#332A24]">
            The roast curve
            <br />
            as a blueprint.
          </h2>

          <p className="mt-9 max-w-[570px] font-serif text-[clamp(1.3rem,2vw,1.8rem)] leading-[1.5] text-[#332A24]/85">
            A precise balance between heat, time, and the character of the bean.
          </p>
        </AnimatedElement>

        <AnimatedElement
          animation={fadeInRight(350)}
          className="lg:col-span-5"
        >
          <div className="space-y-6 text-[14px] leading-[1.95] text-[#332A24]/70 sm:text-[15px] lg:pt-3">
            <p>
              We roast on a cast-iron drum roaster equipped with four
              thermocouples measuring bean temperature, air temperature, exhaust,
              and rate of rise (RoR).
            </p>

            <p>
              Every profile is logged digitally and compared against our reference
              curve.
            </p>

            <p>
              Our goal is never dark or light for the sake of dogma. Light roasts
              preserve floral aromatics and bright acids in high-density, washed
              African coffees.
            </p>

            <p>
              Medium roasts build caramel sweetness in natural Brazilians and
              Colombians without sacrificing varietal character.
            </p>

            <p>
              A few intentional dark roasts, like our Mandheling, bring cedar,
              smoke, and cacao to the forefront.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement
          animation={fadeInUp(450)}
          className="lg:col-span-12"
        >
          <div className="mt-6 grid grid-cols-1 border-t border-[#332A24]/20 pt-8 sm:grid-cols-3">
            {categories.map((item, index) => (
              <div
                key={item.title}
                className={`py-5 sm:py-3 ${
                  index > 0 ?
                    "border-t border-[#332A24]/15 sm:border-t-0 sm:border-l sm:pl-8"
                  : ""
                }`}
              >
                <p className="font-serif text-[24px] text-[#332A24]">
                  {item.title}
                </p>

                <p className="mt-1 text-[12px] text-[#332A24]/55">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </Container>
  </Section>
);