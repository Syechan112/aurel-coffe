import React from "react";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

import { Container, Section, AnimatedElement } from "@/components/ui";

import { fadeInUp, fadeInLeft } from "@/hooks/useInViewAnimation";

import { ExplorerSidebar } from "@/components/explorer/ExplorerSidebar";
import { ExplorerResults } from "@/components/explorer/ExplorerResults";

import type { FlavorFamily, FlavorMatchResult, RoastLevel } from "@/types";

interface ExplorerWorkspaceProps {
  selectedFamilies: FlavorFamily[];
  roast: RoastLevel | undefined;
  hasFilters: boolean;
  recommendations: FlavorMatchResult[];
  flavorKey: string;
  onToggleFamily: (family: FlavorFamily) => void;
  onRoastChange: (roast: RoastLevel | undefined) => void;
  onClearAll: () => void;
}

export const ExplorerWorkspace: React.FC<ExplorerWorkspaceProps> = ({
  selectedFamilies,
  roast,
  hasFilters,
  recommendations,
  flavorKey,
  onToggleFamily,
  onRoastChange,
  onClearAll,
}) => {
  const activeFilterCount = selectedFamilies.length + (roast ? 1 : 0);

  const resultCount = recommendations.length;

  return (
    <Section id="explorer-content" className="scroll-mt-20 bg-[#F3EDE2] !py-0">
      <Container>
        <div className="py-12 sm:py-16 lg:py-20">
          {/* Workspace introduction */}
          <AnimatedElement animation={fadeInUp(150)}>
            <div className="mb-10 grid grid-cols-1 gap-5 md:mb-12 md:grid-cols-12 md:items-end md:gap-8">
              <div className="md:col-span-8">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                  Coffee discovery
                </p>

                <h2 className="font-serif text-[clamp(2.1rem,3.5vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.035em] text-[#332A24]">
                  Discover your selection.
                </h2>
              </div>

              <div className="md:col-span-4">
                <p className="max-w-[310px] text-[13px] leading-[1.8] text-[#332A24]/60 md:ml-auto">
                  Find coffees that match your palate. Refine your selection by
                  flavor and roast preference.
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* Workspace toolbar */}
          <AnimatedElement animation={fadeInUp(200)}>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-y border-[#332A24]/20 py-5 lg:mb-12">
              <div className="flex items-center gap-3">
                <SlidersHorizontal
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#77765B]"
                />

                <span className="text-[13px] font-medium text-[#332A24]">
                  Refine your coffee
                </span>

                {activeFilterCount > 0 && (
                  <span className="rounded-full bg-[#332A24] px-2.5 py-1 text-[10px] font-medium tabular-nums text-[#F3EDE2]">
                    {activeFilterCount}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-5 sm:gap-7">
                <span
                  aria-live="polite"
                  className="text-[12px] tabular-nums text-[#332A24]/60"
                >
                  {resultCount} {resultCount === 1 ? "coffee" : "coffees"}
                </span>

                {hasFilters && (
                  <button
                    type="button"
                    onClick={onClearAll}
                    className="group inline-flex items-center gap-2 text-[12px] text-[#77765B] transition-colors duration-200 hover:text-[#332A24]"
                  >
                    <RotateCcw
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-rotate-45"
                    />
                    Reset
                  </button>
                )}
              </div>
            </div>
          </AnimatedElement>

          {/* Discovery layout */}
          <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Sidebar */}
            <AnimatedElement
              animation={fadeInLeft(250)}
              className="min-w-0 lg:col-span-3"
            >
              <aside
                aria-label="Coffee filters"
                className="lg:sticky lg:top-28"
              >
                <div className="mb-7 hidden lg:block">
                  <p className="text-[13px] font-medium text-[#332A24]">
                    Your preferences
                  </p>

                  <p className="mt-2 text-[12px] leading-relaxed text-[#332A24]/50">
                    Select the flavors and roast you enjoy.
                  </p>
                </div>

                <ExplorerSidebar
                  selectedFamilies={selectedFamilies}
                  roast={roast}
                  hasFilters={hasFilters}
                  onToggleFamily={onToggleFamily}
                  onRoastChange={onRoastChange}
                  onClearAll={onClearAll}
                />
              </aside>
            </AnimatedElement>

            {/* Recommendations */}
            <AnimatedElement
              animation={fadeInUp(300)}
              className="min-w-0 lg:col-span-9"
            >
              <div className="min-w-0 lg:border-l lg:border-[#332A24]/15 lg:pl-10 xl:pl-14">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-medium text-[#332A24]">
                      {hasFilters ? "Selected for your taste" : "All coffees"}
                    </p>

                    <p className="mt-1 text-[12px] text-[#332A24]/50">
                      {hasFilters ?
                        "Based on your current preferences"
                      : "Explore the AUREL collection"}
                    </p>
                  </div>

                  <span className="text-[12px] tabular-nums text-[#77765B]">
                    {String(resultCount).padStart(2, "0")}
                  </span>
                </div>

                <div key={`${flavorKey}-${roast ?? "all"}`} className="min-w-0">
                  <ExplorerResults
                    recommendations={recommendations}
                    selectedFamilies={selectedFamilies}
                    hasFilters={hasFilters}
                    onRemoveFlavor={onToggleFamily}
                    onClearAll={onClearAll}
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </Section>
  );
};
