export interface BrewArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const articles: BrewArticle[] = [
  {
    id: 1,
    slug: "grind-size-matters",
    title: "Grind size is not optional.",
    excerpt:
      "The single most important variable in your extraction. Coarse for immersion, fine for espresso, medium for everything else. A guide.",
    date: "Oct 18, 2026",
    readTime: "4 min",
    category: "Fundamentals",
  },
  {
    id: 2,
    slug: "water-temperature-and-extraction",
    title: "Water temperature and extraction.",
    excerpt:
      "Hotter water extracts more, faster. Cooler water preserves delicate aromatics. How to dial in the right temp for your coffee.",
    date: "Oct 10, 2026",
    readTime: "5 min",
    category: "Technique",
  },
  {
    id: 3,
    slug: "bloom-phase-explained",
    title: "Why bloom matters.",
    excerpt:
      "Thirty seconds of patience at the start of every pour-over. What happens during the bloom phase and why you should never skip it.",
    date: "Sep 29, 2026",
    readTime: "3 min",
    category: "Pour Over",
  },
  {
    id: 4,
    slug: "aeropress-inverted-method",
    title: "AeroPress: Inverted method.",
    excerpt:
      "Full immersion, no drip, total control. The inverted technique for a sweeter, more forgiving cup.",
    date: "Sep 15, 2026",
    readTime: "6 min",
    category: "AeroPress",
  },
  {
    id: 5,
    slug: "french-press-without-silt",
    title: "French press without silt.",
    excerpt:
      "A coarse grind, a gentle plunge, and one simple trick to avoid the muddy finish.",
    date: "Aug 30, 2026",
    readTime: "4 min",
    category: "French Press",
  },
  {
    id: 6,
    slug: "espresso-pressure-profiling",
    title: "Espresso pressure profiling.",
    excerpt:
      "Modern machines let you modulate pressure across the shot. A short guide to pre-infusion, ramp, and declining pressure.",
    date: "Aug 12, 2026",
    readTime: "7 min",
    category: "Espresso",
  },
];

export const featuredArticle = articles[0];
export const remainingArticles = articles.slice(1);