import React from 'react';
import { X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui';
import { CollectionFilters } from './CollectionFilters';
import type { RoastLevel, Process, FlavorFamily } from '@/types';

interface CollectionMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    origin: string | undefined;
    roast: RoastLevel | undefined;
    process: Process | undefined;
    flavors: FlavorFamily[];
  };
  onFilterChange: (newParams: Record<string, string | string[] | undefined>) => void;
  onClearAll: () => void;
}

export const CollectionMobileDrawer: React.FC<CollectionMobileDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#332A24]/60 backdrop-blur-sm flex justify-end">
      <div className="bg-[#F3EDE2] w-full max-w-sm h-full p-6 overflow-y-auto space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#D9D0C4]">
          <h3 className="font-serif text-xl text-ink">Filters</h3>
          <button onClick={onClose} aria-label="Close filters">
            <X size={20} />
          </button>
        </div>
        <CollectionFilters
          {...filters}
          onFilterChange={onFilterChange}
          onClearAll={onClearAll}
        />
        <div className="pt-4 border-t border-[#D9D0C4] flex gap-3">
          <Button onClick={onClose} className="flex-1">Apply</Button>
          <Button variant="outline" onClick={onClearAll}>Reset</Button>
        </div>
      </div>
    </div>
  );
};
