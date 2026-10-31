import React from "react";
import { RotateCcw } from "lucide-react";
import {
  methods,
  methodDetails,
  type BrewMethod,
} from "./BrewStudioData";

interface MethodSelectorProps {
  selectedMethod: BrewMethod;
  onSelectMethod: (nextMethod: BrewMethod) => void;
}

export const MethodSelector: React.FC<MethodSelectorProps> = ({
  selectedMethod,
  onSelectMethod,
}) => {
  return (
    <div>
      <p className="mb-5 text-[12px] font-medium text-[#332A24]">
        How are you brewing?
      </p>

      <div className="grid grid-cols-2 gap-3">
        {methods.map((item) => {
          const config = methodDetails[item];
          const active = selectedMethod === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => onSelectMethod(item)}
              aria-pressed={active}
              className={`min-h-[112px] rounded-xl border p-4 text-left transition-all duration-200 sm:p-5 ${
                active ?
                  "border-[#332A24] bg-[#332A24] text-[#F3EDE2]"
                : "border-[#332A24]/15 bg-[#F3EDE2]/60 text-[#332A24] hover:border-[#332A24]/50"
              }`}
            >
              <span
                className={`mb-5 block h-2 w-2 rounded-full ${
                  active ? "bg-[#D7C6A8]" : "border border-[#332A24]/40"
                }`}
              />

              <span className="block font-serif text-[19px] leading-tight">
                {config.shortName}
              </span>

              <span
                className={`mt-1.5 block text-[11px] leading-snug ${
                  active ? "text-[#F3EDE2]/60" : "text-[#332A24]/50"
                }`}
              >
                {config.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};