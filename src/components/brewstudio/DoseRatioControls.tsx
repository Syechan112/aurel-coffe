import React from "react";
import {
  formatRatio,
  methodDetails,
  type BrewMethod,
} from "./BrewStudioData";

interface DoseRatioControlsProps {
  coffeeGrams: number;
  ratio: number;
  selectedMethod: BrewMethod;
  onCoffeeGramsChange: (value: number) => void;
  onRatioChange: (value: number) => void;
}

export const DoseRatioControls: React.FC<DoseRatioControlsProps> = ({
  coffeeGrams,
  ratio,
  selectedMethod,
  onCoffeeGramsChange,
  onRatioChange,
}) => {
  const methodConfig = methodDetails[selectedMethod];
  const isEspresso = selectedMethod === "espresso";

  return (
    <>
      {/* Coffee dose */}
      <div className="mt-12 border-t border-[#332A24]/15 pt-8">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <label
              htmlFor="coffee-dose"
              className="block text-[13px] font-medium text-[#332A24]"
            >
              Coffee dose
            </label>

            <p className="mt-1 text-[12px] text-[#332A24]/50">
              How much ground coffee?
            </p>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="font-serif text-[38px] leading-none text-[#332A24]">
              {coffeeGrams}
            </span>
            <span className="text-[13px] text-[#332A24]/55">g</span>
          </div>
        </div>

        <input
          id="coffee-dose"
          type="range"
          min={isEspresso ? 7 : 10}
          max={isEspresso ? 30 : 60}
          step="1"
          value={coffeeGrams}
          onChange={(event) => onCoffeeGramsChange(Number(event.target.value))}
          className="w-full cursor-pointer accent-[#332A24]"
        />

        <div className="mt-3 flex justify-between text-[11px] text-[#332A24]/45">
          <span>{isEspresso ? "7g" : "10g"}</span>
          <span>{isEspresso ? "30g" : "60g"}</span>
        </div>
      </div>

      {/* Brew ratio */}
      <div className="mt-10 border-t border-[#332A24]/15 pt-8">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <label
              htmlFor="brew-ratio"
              className="block text-[13px] font-medium text-[#332A24]"
            >
              Brew ratio
            </label>

            <p className="mt-1 text-[12px] text-[#332A24]/50">
              Coffee to water
            </p>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="font-serif text-[38px] leading-none text-[#332A24]">
              1:{formatRatio(ratio)}
            </span>
          </div>
        </div>

        <input
          id="brew-ratio"
          type="range"
          min={methodConfig.minRatio}
          max={methodConfig.maxRatio}
          step={methodConfig.ratioStep}
          value={ratio}
          onChange={(event) => onRatioChange(Number(event.target.value))}
          className="w-full cursor-pointer accent-[#332A24]"
        />

        <div className="mt-3 flex justify-between gap-3 text-[11px] text-[#332A24]/45">
          <span>1:{methodConfig.minRatio}</span>
          <span>1:{methodConfig.maxRatio}</span>
        </div>

        <p className="mt-5 text-[12px] leading-relaxed text-[#332A24]/55">
          {isEspresso ?
            "For espresso, the ratio refers to the beverage yield in your cup."
          : "A lower ratio produces a more concentrated brew. A higher ratio uses more water."
          }
        </p>
      </div>
    </>
  );
};