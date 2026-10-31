import React from "react";
import { Check, RotateCcw } from "lucide-react";

import { FlavorWheel } from "@/components/flavor/FlavorWheel";
import type { FlavorFamily, RoastLevel } from "@/types";

interface ExplorerSidebarProps {
  selectedFamilies: FlavorFamily[];
  roast: RoastLevel | undefined;
  hasFilters: boolean;
  onToggleFamily: (family: FlavorFamily) => void;
  onRoastChange: (roast: RoastLevel | undefined) => void;
  onClearAll: () => void;
}

const ROAST_OPTIONS: {
  value: RoastLevel | undefined;
  label: string;
  description: string;
}[] = [
  {
    value: undefined,
    label: "Any roast",
    description: "Explore every profile",
  },
  {
    value: "light",
    label: "Light",
    description: "Bright & delicate",
  },
  {
    value: "medium",
    label: "Medium",
    description: "Balanced & smooth",
  },
  {
    value: "dark",
    label: "Dark",
    description: "Rich & intense",
  },
];

export const ExplorerSidebar: React.FC<ExplorerSidebarProps> = ({
  selectedFamilies,
  roast,
  hasFilters,
  onToggleFamily,
  onRoastChange,
  onClearAll,
}) => {
  return (
    <div className="min-w-0">
      {/* Flavor preferences */}
      <div>
        <div className="mb-7">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#77765B]">
              Flavor profile
            </p>

            <span className="text-[11px] tabular-nums text-[#332A24]/40">
              01 / 02
            </span>
          </div>

          <h3 className="font-serif text-[clamp(1.5rem,2vw,1.9rem)] font-normal leading-tight tracking-[-0.025em] text-[#332A24]">
            What flavors
            <br />
            speak to you?
          </h3>

          <p className="mt-3 max-w-[260px] text-[12px] leading-[1.75] text-[#332A24]/55">
            Select the notes you enjoy to shape your coffee recommendations.
          </p>
        </div>

        {/* Interactive flavor wheel */}
        <div className="mx-auto w-full max-w-[320px]">
          <FlavorWheel
            selectedFamilies={selectedFamilies}
            onToggleFamily={onToggleFamily}
            onClearAll={onClearAll}
          />
        </div>

        {selectedFamilies.length > 0 && (
          <p
            aria-live="polite"
            className="mt-4 text-center text-[12px] text-[#77765B]"
          >
            {selectedFamilies.length}{" "}
            {selectedFamilies.length === 1 ?
              "flavor selected"
            : "flavors selected"}
          </p>
        )}
      </div>

      {/* Roast preferences */}
      <div className="mt-10 border-t border-[#332A24]/15 pt-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-[#77765B]">
              Roast level
            </p>

            <h3 className="font-serif text-[clamp(1.4rem,2vw,1.7rem)] font-normal tracking-[-0.025em] text-[#332A24]">
              Your roast preference.
            </h3>
          </div>

          <span className="text-[11px] tabular-nums text-[#332A24]/40">
            02 / 02
          </span>
        </div>

        {/* Roast selection */}
        <div
          role="radiogroup"
          aria-label="Roast preference"
          className="border-t border-[#332A24]/10"
        >
          {ROAST_OPTIONS.map((option) => {
            const isSelected = roast === option.value;

            return (
              <label
                key={option.value ?? "any"}
                className="group flex cursor-pointer items-center justify-between gap-4 border-b border-[#332A24]/10 py-4 transition-colors duration-200"
              >
                <input
                  type="radio"
                  name="roast"
                  value={option.value ?? "any"}
                  checked={isSelected}
                  onChange={() => onRoastChange(option.value)}
                  className="sr-only"
                />

                <span className="flex min-w-0 flex-col gap-1">
                  <span
                    className={`text-[13px] font-medium transition-colors duration-200 ${
                      isSelected ? "text-[#332A24]" : (
                        "text-[#332A24]/65 group-hover:text-[#332A24]"
                      )
                    }`}
                  >
                    {option.label}
                  </span>

                  <span className="text-[11px] text-[#332A24]/45">
                    {option.description}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                    isSelected ?
                      "border-[#332A24] bg-[#332A24] text-[#F3EDE2]"
                    : "border-[#332A24]/25 bg-transparent text-transparent group-hover:border-[#332A24]/60"
                  }`}
                >
                  <Check size={12} strokeWidth={2} />
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Reset preferences */}
      {hasFilters && (
        <div className="mt-8">
          <button
            type="button"
            onClick={onClearAll}
            className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#77765B] transition-colors duration-200 hover:text-[#332A24]"
          >
            <RotateCcw
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-rotate-45"
            />
            Reset all preferences
          </button>
        </div>
      )}
    </div>
  );
};
