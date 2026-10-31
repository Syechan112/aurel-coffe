export type FlavorFamily = 'fruity' | 'nutty' | 'bold' | 'floral';
export type RoastLevel = 'light' | 'medium' | 'dark';
export type Process = 'washed' | 'natural' | 'honey' | 'other';
export type SortOption = 'name-asc' | 'roast-intensity';

export interface SensoryProfile {
  acidity: 1 | 2 | 3 | 4 | 5;
  body: 1 | 2 | 3 | 4 | 5;
  sweetness: 1 | 2 | 3 | 4 | 5;
  bitterness: 1 | 2 | 3 | 4 | 5;
}

export interface Coffee {
  id: string;
  slug: string;
  name: string;
  originCountry: string;
  region?: string;
  producer?: string;
  altitudeMasl?: number;
  varietal?: string[];
  process?: Process;
  roastLevel: RoastLevel;
  flavorFamilies: FlavorFamily[];
  tastingNotes: string[];
  sensory: SensoryProfile;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  available: boolean;
}

export interface CatalogFilterState {
  origin?: string;
  roast?: RoastLevel;
  process?: Process;
  flavors?: FlavorFamily[];
  sortBy?: SortOption;
}

export interface FlavorWheelState {
  selectedFamilies: FlavorFamily[];
  roast?: RoastLevel;
  acidity?: [1, 5] | [number, number];
  body?: [1, 5] | [number, number];
}

export interface FlavorMatchResult extends Coffee {
  score: number;
  reason: string;
}
