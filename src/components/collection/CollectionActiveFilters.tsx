import React from 'react';
import { X } from 'lucide-react';
import type { RoastLevel, Process, FlavorFamily } from '@/types';
import { Button } from '@/components/ui';

interface CollectionActiveFiltersProps {
  flavors: FlavorFamily[];
  roast: RoastLevel | undefined;
  origin: string | undefined;
  process: Process | undefined;
  onRemoveFlavor: (flavor: FlavorFamily) => void;
  onRemoveRoast: () => void;
  onRemoveOrigin: () => void;
  onRemoveProcess: () => void;
}

export const CollectionActiveFilters: React.FC<CollectionActiveFiltersProps> = ({
  flavors,
  roast,
  origin,
  process,
  onRemoveFlavor,
  onRemoveRoast,
  onRemoveOrigin,
  onRemoveProcess,
}) => {
  const hasFilters = Boolean(flavors.length > 0 || roast || origin || process);

  if (!hasFilters) return null;

  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-xs font-mono uppercase tracking-widest text-[#71675D]">
        Results
      </p>
      <div className="flex flex-wrap gap-2 items-center">
        {flavors.map((f) => (
          <span
            key={f}
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#332A24] text-[#F3EDE2] rounded-full text-xs font-medium"
          >
            {f}
            <button onClick={() => onRemoveFlavor(f)} aria-label={`Remove ${f} filter`}>
              <X size={12} />
            </button>
          </span>
        ))}
        {roast && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#332A24] text-[#F3EDE2] rounded-full text-xs font-medium">
            Roast: {roast}
            <button onClick={onRemoveRoast} aria-label="Remove roast filter">
              <X size={12} />
            </button>
          </span>
        )}
        {origin && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#332A24] text-[#F3EDE2] rounded-full text-xs font-medium">
            Origin: {origin}
            <button onClick={onRemoveOrigin} aria-label="Remove origin filter">
              <X size={12} />
            </button>
          </span>
        )}
        {process && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#332A24] text-[#F3EDE2] rounded-full text-xs font-medium">
            Process: {process}
            <button onClick={onRemoveProcess} aria-label="Remove process filter">
              <X size={12} />
            </button>
          </span>
        )}
      </div>
    </div>
  );
};
