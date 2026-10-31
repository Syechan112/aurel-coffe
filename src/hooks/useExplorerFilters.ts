import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { FlavorFamily, RoastLevel } from '@/types';

export interface UseExplorerFilters {
  selectedFamilies: FlavorFamily[];
  roast: RoastLevel | undefined;
  flavorKey: string;
  hasFilters: boolean;
  toggleFamily: (family: FlavorFamily) => void;
  updateRoast: (roast: RoastLevel | undefined) => void;
  clearAll: () => void;
}

export function useExplorerFilters(): UseExplorerFilters {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedFamilies = useMemo(
    () => searchParams.getAll('flavor') as FlavorFamily[],
    [searchParams],
  );

  const roast = (searchParams.get('roast') as RoastLevel) || undefined;

  const flavorKey = selectedFamilies.join('|');

  const toggleFamily = useCallback(
    (family: FlavorFamily) => {
      const params = new URLSearchParams(searchParams);
      const current = params.getAll('flavor') as FlavorFamily[];

      params.delete('flavor');

      const next =
        current.includes(family) ?
          current.filter((item) => item !== family)
        : [...current, family];

      next.forEach((item) => {
        params.append('flavor', item);
      });

      setSearchParams(params, { preventScrollReset: true });
    },
    [searchParams, setSearchParams],
  );

  const updateRoast = useCallback(
    (newRoast: RoastLevel | undefined) => {
      const params = new URLSearchParams(searchParams);

      if (newRoast) {
        params.set('roast', newRoast);
      } else {
        params.delete('roast');
      }

      setSearchParams(params, { preventScrollReset: true });
    },
    [searchParams, setSearchParams],
  );

  const clearAll = useCallback(() => {
    setSearchParams(new URLSearchParams(), { preventScrollReset: true });
  }, [setSearchParams]);

  const hasFilters = selectedFamilies.length > 0 || Boolean(roast);

  return {
    selectedFamilies,
    roast,
    flavorKey,
    hasFilters,
    toggleFamily,
    updateRoast,
    clearAll,
  };
}
