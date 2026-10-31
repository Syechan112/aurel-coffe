import React, { useMemo, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

import { Container, Section, AnimatedElement } from "@/components/ui";

import { fadeInUp, fadeInLeft } from "@/hooks/useInViewAnimation";

import { CoffeeCard } from "@/components/coffee/CoffeeCard";
import { CollectionHero } from "@/components/collection/CollectionHero";
import { CollectionFilters } from "@/components/collection/CollectionFilters";
import { CollectionMobileDrawer } from "@/components/collection/CollectionMobileDrawer";
import { CollectionActiveFilters } from "@/components/collection/CollectionActiveFilters";

import { COFFEE_CATALOG } from "@/data/catalog";
import { getCatalogWithFilters } from "@/lib/recommendationEngine";
import { useCollectionFilters } from "@/hooks/useCollectionFilters";

import { CollectionOptionModal } from "@/components/collection/CollectionOptionModal";

import type { RoastLevel, SortOption } from "@/types";

const SORT_OPTIONS: {
  value: SortOption;
  label: string;
}[] = [
  { value: "name-asc", label: "Name: A to Z" },
  { value: "roast-intensity", label: "Roast intensity" },
];

export default function Collection() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortModalOpen, setSortModalOpen] = useState(false);

  const {
    filterProps,
    sortBy,
    updateFilters,
    clearAll,
    toggleFlavor,
    hasActiveFilters,
    activeFilterCount,
  } = useCollectionFilters();

  const { origin, roast, process, flavors } = filterProps;

  const coffees = useMemo(() => {
    let result = getCatalogWithFilters(COFFEE_CATALOG, {
      origin,
      roast,
      process,
      flavors,
    });

    if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "roast-intensity") {
      const order: Record<RoastLevel, number> = {
        light: 1,
        medium: 2,
        dark: 3,
      };

      result = [...result].sort(
        (a, b) => order[a.roastLevel] - order[b.roastLevel],
      );
    }

    return result;
  }, [origin, roast, process, flavors, sortBy]);

  const currentSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortBy)?.label ??
    "Name: A to Z";

  return (
    <>
      <CollectionHero coffeeCount={COFFEE_CATALOG.length} />

      <Section className="bg-[#F3EDE2] !py-0">
        <Container>
          <div className="pb-16 sm:pb-20 lg:pb-24">
            {/* Catalog toolbar */}
            <AnimatedElement animation={fadeInUp(200)}>
              <div className="mb-9 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-y border-[#332A24]/20 py-5 sm:mb-12">
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="inline-flex items-center gap-2.5 text-[13px] font-medium text-[#332A24] transition-colors hover:text-[#77765B] md:hidden"
                  >
                    <SlidersHorizontal size={17} strokeWidth={1.5} />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#332A24] px-1 text-[10px] text-[#F3EDE2]">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>

                  <p
                    aria-live="polite"
                    className="text-[12px] tabular-nums text-[#332A24]/60"
                  >
                    Showing {coffees.length}{" "}
                    {coffees.length === 1 ? "coffee" : "coffees"}
                  </p>
                </div>

                {/* Custom sorting menu */}
                <button
                  type="button"
                  onClick={() => setSortModalOpen(true)}
                  aria-haspopup="dialog"
                  className="group inline-flex items-center gap-3 text-[12px] text-[#332A24]"
                >
                  <span className="text-[#332A24]/50">Sort by</span>

                  <span className="font-medium">{currentSortLabel}</span>

                  <ChevronDown
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                </button>
              </div>
            </AnimatedElement>

            {/* Catalog layout */}
            <div className="grid min-w-0 grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-10 lg:gap-14">
              {/* Desktop filters */}
              <AnimatedElement
                animation={fadeInLeft(250)}
                className="hidden min-w-0 md:col-span-4 md:block lg:col-span-3"
              >
                <aside
                  aria-label="Collection filters"
                  className="md:sticky md:top-28"
                >
                  <div className="mb-7">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-[13px] font-medium text-[#332A24]">
                        Refine collection
                      </h2>

                      {hasActiveFilters && (
                        <button
                          type="button"
                          onClick={clearAll}
                          className="text-[11px] text-[#77765B] underline underline-offset-4 hover:text-[#332A24]"
                        >
                          Clear all
                        </button>
                      )}
                    </div>

                    <p className="mt-2 text-[12px] leading-relaxed text-[#332A24]/50">
                      Discover coffees by origin, roast, process, and flavor.
                    </p>
                  </div>

                  <CollectionFilters
                    {...filterProps}
                    onFilterChange={updateFilters}
                    onClearAll={clearAll}
                  />
                </aside>
              </AnimatedElement>

              {/* Coffee products */}
              <AnimatedElement
                animation={fadeInUp(300)}
                className="min-w-0 md:col-span-8 lg:col-span-9"
              >
                <main className="min-w-0">
                  <CollectionActiveFilters
                    {...filterProps}
                    onRemoveFlavor={toggleFlavor}
                    onRemoveRoast={() => updateFilters({ roast: undefined })}
                    onRemoveOrigin={() => updateFilters({ origin: undefined })}
                    onRemoveProcess={() => updateFilters({ process: undefined })}
                  />

                  {coffees.length === 0 ?
                    <div className="flex min-h-[360px] flex-col items-center justify-center border-y border-[#332A24]/15 px-5 py-16 text-center">
                      <p className="mb-3 text-[11px] uppercase tracking-[0.1em] text-[#77765B]">
                        No matches
                      </p>

                      <h3 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[#332A24]">
                        Nothing in the collection matches your selection.
                      </h3>

                      <p className="mt-4 max-w-[340px] text-[13px] leading-relaxed text-[#332A24]/55">
                        Try adjusting your preferences to explore more coffees.
                      </p>

                      <button
                        type="button"
                        onClick={clearAll}
                        className="mt-7 border-b border-[#332A24] pb-1 text-[13px] font-medium text-[#332A24] transition-colors hover:text-[#77765B]"
                      >
                        Reset all filters
                      </button>
                    </div>
                  : <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                      {coffees.map((coffee) => (
                        <CoffeeCard key={coffee.slug} coffee={coffee} />
                      ))}
                    </div>
                  }
                </main>
              </AnimatedElement>
            </div>
          </div>
        </Container>
      </Section>

      <CollectionMobileDrawer
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        filters={filterProps}
        onFilterChange={updateFilters}
        onClearAll={clearAll}
      />

      <CollectionOptionModal
        open={sortModalOpen}
        title="Sort coffees"
        description="Choose how to order the coffee collection."
        options={SORT_OPTIONS}
        selectedValue={sortBy}
        allowClear={false}
        onSelect={(value) => {
          if (value) updateFilters({ sort: value });
        }}
        onClose={() => setSortModalOpen(false)}
      />
    </>
  );
}

