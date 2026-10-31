import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import type { FlavorFamily, Process, RoastLevel, SortOption } from "@/types";

export interface CollectionFiltersState {
  origin: string | undefined;
  roast: RoastLevel | undefined;
  process: Process | undefined;
  flavors: FlavorFamily[];
}

export function useCollectionFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const origin = searchParams.get("origin") || undefined;
  const roast = (searchParams.get("roast") as RoastLevel) || undefined;
  const process = (searchParams.get("process") as Process) || undefined;
  const flavorKey = searchParams.getAll("flavor").join("|");
  const flavors = useMemo(
    () => searchParams.getAll("flavor") as FlavorFamily[],
    [flavorKey],
  );
  const sortBy = (searchParams.get("sort") as SortOption) || "name-asc";

  const updateFilters = useCallback(
    (values: Record<string, string | string[] | undefined>) => {
      const params = new URLSearchParams(searchParams);

      Object.entries(values).forEach(([key, value]) => {
        params.delete(key);

        if (Array.isArray(value)) {
          value.forEach((item) => params.append(key, item));
        } else if (value !== undefined) {
          params.set(key, value);
        }
      });

      setSearchParams(params, { preventScrollReset: true });
    },
    [searchParams, setSearchParams],
  );

  const clearAll = useCallback(() => {
    setSearchParams(new URLSearchParams(), { preventScrollReset: true });
  }, [setSearchParams]);

  const toggleFlavor = useCallback(
    (flavor: FlavorFamily) => {
      updateFilters({
        flavor:
          flavors.includes(flavor) ?
            flavors.filter((item) => item !== flavor)
          : [...flavors, flavor],
      });
    },
    [flavors, updateFilters],
  );

  const hasActiveFilters = Boolean(
    origin || roast || process || flavors.length,
  );
  const activeFilterCount =
    Number(Boolean(origin)) +
    Number(Boolean(roast)) +
    Number(Boolean(process)) +
    flavors.length;

  return {
    filterProps: { origin, roast, process, flavors } satisfies CollectionFiltersState,
    sortBy,
    updateFilters,
    clearAll,
    toggleFlavor,
    hasActiveFilters,
    activeFilterCount,
  };
}
