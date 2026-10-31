import type { Coffee, FlavorFamily, RoastLevel, Process, FlavorMatchResult } from '@/types';
import { COFFEE_CATALOG } from '@/data/catalog';

interface MatchingOptions {
  selectedFamilies: FlavorFamily[];
  roast?: RoastLevel;
  process?: Process;
  acidityMin?: number;
  acidityMax?: number;
  bodyMin?: number;
  bodyMax?: number;
}

export function filterAndRecommend(coffees: Coffee[] = COFFEE_CATALOG, options: MatchingOptions): FlavorMatchResult[] {
  const { selectedFamilies, roast, process, acidityMin = 1, acidityMax = 5, bodyMin = 1, bodyMax = 5 } = options;

  let eligible = coffees.filter((c) => {
    if (c.roastLevel !== roast && roast !== undefined) return false;
    if (c.process !== process && process !== undefined) return false;
    if (c.sensory.acidity < acidityMin || c.sensory.acidity > acidityMax) return false;
    if (c.sensory.body < bodyMin || c.sensory.body > bodyMax) return false;
    return true;
  });

  // If no families selected, return all eligible sorted alphabetically
  if (!selectedFamilies || selectedFamilies.length === 0) {
    return eligible
      .map((c) => ({ ...c, score: 0, reason: 'Matches your filter preferences' }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  // Filter by flavor families (OR logic)
  eligible = eligible.filter((c) =>
    c.flavorFamilies.some((f) => selectedFamilies.includes(f)),
  );

  // Score each eligible coffee
  const scored: FlavorMatchResult[] = eligible.map((c) => {
    const matchedFamilies = c.flavorFamilies.filter((f) => selectedFamilies.includes(f));
    const score = matchedFamilies.length / selectedFamilies.length;

    // Build reason
    const matchingNotes = c.tastingNotes.filter(
      (note) => matchedFamilies.some((family) => noteMatchesFamily(note, family)),
    );
    const reason =
      matchingNotes.length > 0
        ? `Matches your ${matchedFamilies.join(' & ')} preference${matchedFamilies.length > 1 ? '' : 's'} — features ${matchingNotes.slice(0, 3).join(', ')}`
        : `Matches your ${matchedFamilies.join(' & ')} preference`;

    return {
      ...c,
      score,
      reason,
    };
  });

  // Sort: higher score first, then more matching notes, then name alphabetically
  return scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const aNotes = a.tastingNotes.filter(
      (n) => a.flavorFamilies.some((f) => selectedFamilies.includes(f) && noteMatchesFamily(n, f)),
    ).length;
    const bNotes = b.tastingNotes.filter(
      (n) => b.flavorFamilies.some((f) => selectedFamilies.includes(f) && noteMatchesFamily(n, f)),
    ).length;
    if (bNotes !== aNotes) return bNotes - aNotes;
    return a.name.localeCompare(b.name);
  });
}

function noteMatchesFamily(note: string, family: FlavorFamily): boolean {
  const familyNotes: Record<FlavorFamily, string[]> = {
    fruity: ['blueberry', 'bergamot', 'peach', 'lemon', 'blackcurrant', 'grapefruit', 'tomato', 'ripe peach', 'citrus zest', 'orange peel', 'honeycomb'],
    nutty: ['hazelnut', 'caramel', 'cocoa', 'brown sugar', 'walnut', 'almond', 'molasses', 'toffee'],
    bold: ['dark chocolate', 'cedar', 'spice', 'earth', 'spice'],
    floral: ['jasmine', 'honeysuckle', 'clove'],
  };
  return familyNotes[family]?.includes(note.toLowerCase()) ?? false;
}

export function getSimilarCoffees(coffee: Coffee, excludeId?: string): Coffee[] {
  const candidates = COFFEE_CATALOG.filter((c) => c.id !== excludeId && c.slug !== coffee.slug);
  const sharedFamilies = candidates
    .map((c) => ({
      coffee: c,
      overlap: c.flavorFamilies.filter((f) => coffee.flavorFamilies.includes(f)).length,
    }))
    .filter((r) => r.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap);
  return sharedFamilies.slice(0, 3).map((r) => r.coffee);
}

export function getCatalogWithFilters(
  coffees: Coffee[] = COFFEE_CATALOG,
  filters: { origin?: string; roast?: RoastLevel; process?: Process; flavors?: FlavorFamily[] },
): Coffee[] {
  return coffees.filter((c) => {
    if (filters.origin && c.originCountry !== filters.origin) return false;
    if (filters.roast && c.roastLevel !== filters.roast) return false;
    if (filters.process && c.process !== filters.process) return false;
    if (filters.flavors && filters.flavors.length > 0 && !c.flavorFamilies.some((f) => filters.flavors!.includes(f))) return false;
    return true;
  });
}
