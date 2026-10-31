import React, { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";
import {
  methodDetails,
  methods,
  type BrewMethod,
} from "./BrewStudioData";
import { MethodSelector } from "./MethodSelector";
import { DoseRatioControls } from "./DoseRatioControls";
import { BrewRecipePanel } from "./BrewRecipePanel";

interface BrewStudioWorkspaceProps {
  initialMethod?: BrewMethod;
}

export const BrewStudioWorkspace: React.FC<BrewStudioWorkspaceProps> = ({
  initialMethod = "pour-over",
}) => {
  const [method, setMethod] = useState<BrewMethod>(initialMethod);
  const [coffeeGrams, setCoffeeGrams] = useState(20);
  const [ratio, setRatio] = useState(16);

  const selectedMethod = methodDetails[method];
  const outputGrams = coffeeGrams * ratio;
  const isEspresso = method === "espresso";

  const selectMethod = (nextMethod: BrewMethod) => {
    const config = methodDetails[nextMethod];

    setMethod(nextMethod);
    setCoffeeGrams(config.defaultDose);
    setRatio(config.defaultRatio);
  };

  const resetRecipe = () => {
    setCoffeeGrams(selectedMethod.defaultDose);
    setRatio(selectedMethod.defaultRatio);
  };

  return (
    <Section id="brew-workspace" className="bg-[#EAE2D6] !py-0">
      <Container>
        <div className="py-14 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-24">
            {/* Recipe controls */}
            <div className="min-w-0">
              <div className="mb-10 flex items-center justify-between gap-5">
                <div>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                    The setup
                  </p>

                  <h2 className="font-serif text-[32px] tracking-[-0.035em] text-[#332A24] sm:text-[40px]">
                    Find your balance.
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={resetRecipe}
                  className="inline-flex shrink-0 items-center gap-2 text-[12px] text-[#332A24]/60 transition-colors hover:text-[#332A24]"
                >
                  <RotateCcw size={14} strokeWidth={1.5} />
                  Reset
                </button>
              </div>

              {/* Method selection */}
              <MethodSelector
                selectedMethod={method}
                onSelectMethod={selectMethod}
              />

              {/* Coffee dose and ratio */}
              <DoseRatioControls
                coffeeGrams={coffeeGrams}
                ratio={ratio}
                selectedMethod={method}
                onCoffeeGramsChange={setCoffeeGrams}
                onRatioChange={setRatio}
              />
            </div>

            {/* Live recipe */}
            <div className="min-w-0">
              <div className="lg:sticky lg:top-28">
                <BrewRecipePanel
                  methodName={selectedMethod.name}
                  coffeeGrams={coffeeGrams}
                  ratio={ratio}
                  isEspresso={isEspresso}
                  grind={selectedMethod.grind}
                  temp={selectedMethod.temp}
                  time={selectedMethod.time}
                  outputGrams={outputGrams}
                />

                <p className="mt-5 text-[11px] leading-relaxed text-[#332A24]/45">
                  Measurements update automatically as you adjust your recipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};