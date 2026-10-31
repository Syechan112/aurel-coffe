import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

import { CollectionOptionModal } from "@/components/collection/CollectionOptionModal";
import {
  ORIGIN_OPTIONS,
  ROAST_OPTIONS,
  PROCESS_OPTIONS,
  FLAVOR_FAMILY_OPTIONS,
} from "@/data/catalog";
import type { RoastLevel, Process, FlavorFamily } from "@/types";

interface CollectionFiltersProps {
  origin: string | undefined;
  roast: RoastLevel | undefined;
  process: Process | undefined;
  flavors: FlavorFamily[];
  onFilterChange: (
    newParams: Record<string, string | string[] | undefined>,
  ) => void;
  onClearAll: () => void;
}

const formatLabel = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const CollectionFilters: React.FC<CollectionFiltersProps> = ({
  origin,
  roast,
  process,
  flavors,
  onFilterChange,
  onClearAll,
}) => {
  const [selection, setSelection] = useState<"origin" | "process" | null>(
    null,
  );

  const toggleFlavor = (flavor: FlavorFamily) => {
    onFilterChange({
      flavor:
        flavors.includes(flavor) ?
          flavors.filter((item) => item !== flavor)
        : [...flavors, flavor],
    });
  };

  const hasFilters = origin || roast || process || flavors.length > 0;
  const selectionConfig =
    selection === "origin" ?
      {
        title: "Choose origin",
        description: "Select country where your coffee was grown.",
        options: ORIGIN_OPTIONS.map((value) => ({ value, label: value })),
        selectedValue: origin,
        onSelect: (value: string | undefined) =>
          onFilterChange({ origin: value }),
      }
    : selection === "process" ?
      {
        title: "Choose process",
        description: "Select method used to prepare coffee cherries.",
        options: PROCESS_OPTIONS.map((value) => ({
          value,
          label: formatLabel(value),
        })),
        selectedValue: process,
        onSelect: (value: string | undefined) =>
          onFilterChange({ process: value as Process | undefined }),
      }
    : undefined;

  return (
    <>
      <div className="space-y-8 pr-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg text-ink">Filters</h3>
          {hasFilters && (
            <button
              type="button"
              onClick={onClearAll}
              className="text-xs text-[#71675D] underline underline-offset-2 hover:text-ink"
            >
              Reset all
            </button>
          )}
        </div>

        <div>
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#77765B]">
            Flavor family
          </p>
          <div className="flex flex-wrap gap-2">
            {FLAVOR_FAMILY_OPTIONS.map((flavor) => {
              const active = flavors.includes(flavor);
              return (
                <button
                  key={flavor}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleFlavor(flavor)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77765B] ${
                    active ?
                      "bg-[#332A24] text-[#F3EDE2]"
                    : "bg-[#D7C6A8]/30 text-[#332A24] hover:bg-[#D7C6A8]/60"
                  }`}
                >
                  {formatLabel(flavor)}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#77765B]">
            Roast level
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              aria-pressed={roast === undefined}
              onClick={() => onFilterChange({ roast: undefined })}
              className={`rounded-md border px-3 py-2.5 text-left text-[12px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77765B] ${
                roast === undefined ?
                  "border-[#332A24] bg-[#332A24] text-[#F3EDE2]"
                : "border-[#332A24]/15 text-[#332A24] hover:border-[#332A24]/40"
              }`}
            >
              All roasts
            </button>
            {ROAST_OPTIONS.map((level) => {
              const selected = roast === level;
              return (
                <button
                  key={level}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onFilterChange({ roast: level })}
                  className={`rounded-md border px-3 py-2.5 text-left text-[12px] font-medium capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77765B] ${
                    selected ?
                      "border-[#332A24] bg-[#332A24] text-[#F3EDE2]"
                    : "border-[#332A24]/15 text-[#332A24] hover:border-[#332A24]/40"
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-[#77765B]">
            Origin & process
          </p>
          <button
            type="button"
            onClick={() => setSelection("origin")}
            aria-haspopup="dialog"
            className="flex w-full items-center justify-between border-b border-[#332A24]/15 py-3 text-left text-[13px] text-[#332A24] transition-colors hover:border-[#332A24]/45"
          >
            <span>
              <span className="mr-2 text-[#332A24]/50">Origin</span>
              <span className={origin ? "" : "text-[#332A24]/50"}>
                {origin || "All origins"}
              </span>
            </span>
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => setSelection("process")}
            aria-haspopup="dialog"
            className="flex w-full items-center justify-between border-b border-[#332A24]/15 py-3 text-left text-[13px] text-[#332A24] transition-colors hover:border-[#332A24]/45"
          >
            <span>
              <span className="mr-2 text-[#332A24]/50">Process</span>
              <span className={process ? "capitalize" : "text-[#332A24]/50"}>
                {process ? formatLabel(process) : "All processes"}
              </span>
            </span>
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {selectionConfig && (
        <CollectionOptionModal
          open={Boolean(selection)}
          {...selectionConfig}
          onClose={() => setSelection(null)}
        />
      )}
    </>
  );
};
