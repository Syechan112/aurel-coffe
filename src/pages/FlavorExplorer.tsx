import React, { useMemo } from 'react';

import { COFFEE_CATALOG } from '@/data/catalog';
import { filterAndRecommend } from '@/lib/recommendationEngine';
import { ExplorerHero } from '@/components/explorer/ExplorerHero';
import { ExplorerWorkspace } from '@/components/explorer/ExplorerWorkspace';
import { useExplorerFilters } from '@/hooks/useExplorerFilters';

export default function FlavorExplorer() {
  const {
    selectedFamilies,
    roast,
    flavorKey,
    hasFilters, 
    toggleFamily,
    updateRoast,
    clearAll,
  } = useExplorerFilters();

  const recommendations = useMemo(
    () =>
      filterAndRecommend(COFFEE_CATALOG, {
        selectedFamilies,
        roast,
        acidityMin: 1,
        acidityMax: 5,
        bodyMin: 1,
        bodyMax: 5,
      }),
    [selectedFamilies, roast],
  );

  return (
    <>
      <ExplorerHero coffeeCount={COFFEE_CATALOG.length} />
      <ExplorerWorkspace
        selectedFamilies={selectedFamilies}
        roast={roast}
        flavorKey={flavorKey}
        hasFilters={hasFilters}
        recommendations={recommendations}
        onToggleFamily={toggleFamily}
        onRoastChange={updateRoast}
        onClearAll={clearAll}
      />
    </>
  );
}
