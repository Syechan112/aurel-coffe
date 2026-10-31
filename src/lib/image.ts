import type { Coffee } from '@/types';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || '';
const UNSPLASH_API = 'https://api.unsplash.com';

export interface UnsplashImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  source: 'unsplash' | 'placeholder';
}

interface UnsplashSearchResponse {
  results: Array<{
    id: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
    };
    width: number;
    height: number;
    alt_description: string;
    user: {
      name: string;
    };
  }>;
}

export async function searchUnsplash(
  query: string,
  count: number = 1,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape',
): Promise<UnsplashImage[]> {
  if (!UNSPLASH_ACCESS_KEY) {
    return [fallbackImage(query)];
  }

  const params = new URLSearchParams({
    query,
    per_page: String(Math.min(count, 10)),
    orientation,
    client_id: UNSPLASH_ACCESS_KEY,
  });

  const response = await fetch(`${UNSPLASH_API}/search/photos?${params}`, {
    headers: {
      'Accept-Version': 'v1',
    },
  });

  if (!response.ok) {
    return [fallbackImage(query)];
  }

  const data: UnsplashSearchResponse = await response.json();

  return data.results.map((photo) => ({
    url: photo.urls.regular,
    alt: photo.alt_description || query,
    width: photo.width,
    height: photo.height,
    photographer: photo.user.name,
    source: 'unsplash',
  }));
}

export function fallbackImage(query: string, width: number = 800, height: number = 600): UnsplashImage {
  return {
    url: `https://placehold.co/${width}x${height}/332A24/F3EDE2?text=${encodeURIComponent(query)}`,
    alt: query,
    width,
    height,
    photographer: 'placeholder',
    source: 'placeholder',
  };
}

export function coffeeImageFor(coffee: Coffee): UnsplashImage {
  const query = `${coffee.name} coffee beans`;
  return fallbackImage(query, 800, 800);
}

export function getUnsplashImage(
  query: string,
  width: number = 800,
  height: number = 600,
): UnsplashImage {
  return fallbackImage(query, width, height);
}

export async function fetchCoffeeImages(queries: string[]): Promise<UnsplashImage[]> {
  const results: UnsplashImage[] = [];
  for (const query of queries) {
    const images = await searchUnsplash(query, 1, 'squarish');
    results.push(images[0]);
  }
  return results;
}