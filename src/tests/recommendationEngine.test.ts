import { describe, expect, test } from 'vitest';
import { filterAndRecommend, getCatalogWithFilters } from '../lib/recommendationEngine';
import { COFFEE_CATALOG } from '../data/catalog';

describe('filterAndRecommend', () => {
  test('returns all coffees sorted alphabetically when no families selected', () => {
    const result = filterAndRecommend(COFFEE_CATALOG, { selectedFamilies: [] });
    expect(result.length).toBe(COFFEE_CATALOG.length);
    expect(result[0].score).toBe(0);
  });

  test('filters by selected flavor family (OR logic)', () => {
    const result = filterAndRecommend(COFFEE_CATALOG, { selectedFamilies: ['fruity'] });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((c) => {
      expect(c.flavorFamilies).toContain('fruity');
    });
  });

  test('matches multiple families with OR logic', () => {
    const result = filterAndRecommend(COFFEE_CATALOG, { selectedFamilies: ['fruity', 'bold'] });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((c) => {
      expect(c.flavorFamilies.some((f) => c.flavorFamilies.includes('fruity') || c.flavorFamilies.includes('bold'))).toBe(true);
    });
  });

  test('higher score = more matched families', () => {
    const result = filterAndRecommend(COFFEE_CATALOG, { selectedFamilies: ['fruity', 'floral'] });
    const topScore = result[0].score;
    result.forEach((c) => {
      expect(c.score).toBeLessThanOrEqual(topScore);
    });
  });

  test('empty state when no coffees match selected families', () => {
    const result = filterAndRecommend([], { selectedFamilies: ['fruity'] });
    expect(result.length).toBe(0);
  });
});

describe('getCatalogWithFilters', () => {
  test('filters by origin', () => {
    const result = getCatalogWithFilters(COFFEE_CATALOG, { origin: 'Ethiopia' });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((c) => expect(c.originCountry).toBe('Ethiopia'));
  });

  test('filters by roast', () => {
    const result = getCatalogWithFilters(COFFEE_CATALOG, { roast: 'light' });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((c) => expect(c.roastLevel).toBe('light'));
  });

  test('filters by flavor', () => {
    const result = getCatalogWithFilters(COFFEE_CATALOG, { flavors: ['fruity'] });
    result.forEach((c) => expect(c.flavorFamilies).toContain('fruity'));
  });
});
