import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui';
import type { FlavorFamily, FlavorMatchResult } from '@/types';

interface ExplorerResultsProps {
  recommendations: FlavorMatchResult[];
  selectedFamilies: FlavorFamily[];
  hasFilters: boolean;
  onRemoveFlavor: (flavor: FlavorFamily) => void;
  onClearAll: () => void;
}

export const ExplorerResults: React.FC<ExplorerResultsProps> = ({
  recommendations,
  selectedFamilies,
  hasFilters,
  onRemoveFlavor,
  onClearAll,
}) => {
  return (
    <main className="lg:col-span-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[#71675D] mb-2">Results</p>
          <h2 className="text-2xl sm:text-3xl font-serif text-ink">
            {recommendations.length} {recommendations.length === 1 ? 'match' : 'matches'}
          </h2>
        </div>
        {hasFilters && (
          <div className="flex flex-wrap gap-2 justify-end">
            {selectedFamilies.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#332A24] text-[#F3EDE2] rounded-full text-xs font-medium"
              >
                {f}
                <button onClick={() => onRemoveFlavor(f)} aria-label={`Remove ${f}`}>
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {recommendations.length === 0 ? (
        <div className="py-16 px-6 bg-white rounded-2xl border border-[#D9D0C4] text-center shadow-sm">
          <p className="text-4xl mb-4 text-[#77765B]">✦</p>
          <h3 className="font-serif text-2xl text-ink mb-2">No matches found.</h3>
          <p className="text-sm text-muted-ink mb-6 max-w-md mx-auto">
            Your filter combination doesn't match any coffees in our current collection. Try adjusting your preferences.
          </p>
          <Button onClick={onClearAll}>Reset preferences</Button>
        </div>
      ) : (
        <div className="space-y-4">
          {recommendations.map((coffee) => (
            <div
              key={coffee.slug}
              className="p-6 bg-white rounded-2xl border border-[#D9D0C4]/40 hover:shadow-md transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-[#F3EDE2]">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/coffee-fallback/300/300';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-ink mb-1 group-hover:text-[#77765B] transition-colors">{coffee.name}</h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#77765B] mb-2">{coffee.originCountry}</p>
                  <p className="text-sm text-muted-ink mb-3 line-clamp-2">{coffee.description}</p>
                  <p className="text-xs font-medium text-[#77765B] bg-[#D7C6A8]/10 px-3 py-1.5 rounded-md inline-block mb-3">{coffee.reason}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {coffee.tastingNotes.slice(0, 4).map((note: string) => (
                      <span
                        key={note}
                        className="px-2.5 py-1 text-[11px] bg-[#D7C6A8]/20 rounded-full text-ink font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 self-center sm:self-start">
                  <a
                    href={`/coffee/${coffee.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#332A24] text-[#F3EDE2] rounded-full text-sm font-medium hover:bg-[#77765B] transition-colors shadow-sm"
                  >
                    Explore <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
