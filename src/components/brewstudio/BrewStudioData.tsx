export type BrewMethod = "pour-over" | "french-press" | "aeropress" | "espresso";

interface MethodConfig {
  name: string;
  shortName: string;
  description: string;
  grind: string;
  temp: string;
  time: string;
  defaultDose: number;
  defaultRatio: number;
  minRatio: number;
  maxRatio: number;
  ratioStep: number;
}

export const methodDetails: Record<BrewMethod, MethodConfig> = {
  "pour-over": {
    name: "Pour Over (V60)",
    shortName: "Pour Over",
    description: "Clean, delicate, and expressive.",
    grind: "Medium-fine",
    temp: "92–94°C",
    time: "2:30–3:00 min",
    defaultDose: 20,
    defaultRatio: 16,
    minRatio: 12,
    maxRatio: 20,
    ratioStep: 0.5,
  },
  "french-press": {
    name: "French Press",
    shortName: "French Press",
    description: "Rich texture and a fuller body.",
    grind: "Coarse",
    temp: "95°C",
    time: "4:00 min",
    defaultDose: 20,
    defaultRatio: 15,
    minRatio: 12,
    maxRatio: 20,
    ratioStep: 0.5,
  },
  aeropress: {
    name: "AeroPress",
    shortName: "AeroPress",
    description: "Versatile, balanced, and forgiving.",
    grind: "Medium",
    temp: "88–90°C",
    time: "1:45 min",
    defaultDose: 18,
    defaultRatio: 14,
    minRatio: 10,
    maxRatio: 18,
    ratioStep: 0.5,
  },
  espresso: {
    name: "Espresso",
    shortName: "Espresso",
    description: "Concentrated and full of character.",
    grind: "Fine",
    temp: "93°C",
    time: "25–30 sec",
    defaultDose: 18,
    defaultRatio: 2,
    minRatio: 1,
    maxRatio: 4,
    ratioStep: 0.1,
  },
};

export const methods: BrewMethod[] = Object.keys(
  methodDetails,
) as BrewMethod[];

export const formatWeight = (value: number) =>
  Number(value.toFixed(1)).toLocaleString("en-US", {
    maximumFractionDigits: 1,
  });

export const formatRatio = (value: number) =>
  Number(value.toFixed(1)).toString();