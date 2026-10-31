import React from "react";
import { Coffee, Droplets } from "lucide-react";
import {
  formatWeight,
  formatRatio,
  type BrewMethod,
} from "./BrewStudioData";

interface BrewRecipePanelProps {
  methodName: string;
  coffeeGrams: number;
  ratio: number;
  isEspresso: boolean;
  grind: string;
  temp: string;
  time: string;
  outputGrams: number;
}

export const BrewRecipePanel: React.FC<BrewRecipePanelProps> = ({
  methodName,
  coffeeGrams,
  ratio,
  isEspresso,
  grind,
  temp,
  time,
  outputGrams,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#332A24] text-[#F3EDE2]">
      <div className="p-7 sm:p-9 lg:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#D7C6A8]/75">
            Your recipe
          </span>

          <span className="flex items-center gap-2 text-[11px] text-[#F3EDE2]/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D7C6A8]" />
            Live
          </span>
        </div>

        <h3 className="mt-8 font-serif text-[clamp(2rem,3vw,3rem)] leading-tight tracking-[-0.035em]">
          {methodName}
        </h3>

        <p className="mt-2 text-[13px] text-[#F3EDE2]/50">
          1:{formatRatio(ratio)} brewing ratio
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 border-b border-[#F3EDE2]/20 pb-9">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[#D7C6A8]/70">
              <Coffee size={14} strokeWidth={1.5} />
              <span className="text-[11px]">Coffee</span>
            </div>

            <p className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] leading-none tracking-[-0.045em]">
              {coffeeGrams}
              <span className="ml-1 text-[17px] text-[#D7C6A8]">
                g
              </span>
            </p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-[#D7C6A8]/70">
              <Droplets size={14} strokeWidth={1.5} />
              <span className="text-[11px]">
                {isEspresso ? "Yield" : "Water"}
              </span>
            </div>

            <p className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] leading-none tracking-[-0.045em]">
              {formatWeight(outputGrams)}
              <span className="ml-1 text-[17px] text-[#D7C6A8]">
                g
              </span>
            </p>
          </div>
        </div>

        <div className="mt-9 space-y-5">
          {[
            {
              label: "Grind size",
              value: grind,
            },
            {
              label: "Water temperature",
              value: temp,
            },
            {
              label: "Brew time",
              value: time,
            },
          ].map((detail) => (
            <div
              key={detail.label}
              className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1"
            >
              <span className="text-[12px] text-[#F3EDE2]/50">
                {detail.label}
              </span>

              <span className="text-right text-[13px] text-[#F3EDE2]/90">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#F3EDE2]/15 bg-[#F3EDE2]/[0.04] px-7 py-5 sm:px-9 lg:px-10">
        <p className="text-[12px] leading-[1.7] text-[#F3EDE2]/55">
          {isEspresso ?
            "Target yield is the espresso collected in your cup, not the water added to the machine."
          : "Use this recipe as a starting point. Adjust grind and brew time to suit your coffee."
          }
        </p>
      </div>
    </div>
  );
};