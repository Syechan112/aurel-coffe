import React from 'react';
import type { SensoryProfile as SensoryProfileType } from '@/types';

interface SensoryProfileProps {
  sensory: SensoryProfileType;
  labels?: boolean;
  compact?: boolean;
}

const sensoryLabels = {
  acidity: 'Acidity',
  body: 'Body',
  sweetness: 'Sweetness',
  bitterness: 'Bitterness',
};

const sensoryColors = {
  acidity: 'bg-blue-400',
  body: 'bg-amber-700',
  sweetness: 'bg-yellow-400',
  bitterness: 'bg-[#77765B]',
};

export const SensoryProfile: React.FC<SensoryProfileProps> = ({ sensory, labels = true, compact = false }) => {
  const values = [
    { key: 'acidity', value: sensory.acidity, label: sensoryLabels.acidity, color: sensoryColors.acidity },
    { key: 'body', value: sensory.body, label: sensoryLabels.body, color: sensoryColors.body },
    { key: 'sweetness', value: sensory.sweetness, label: sensoryLabels.sweetness, color: sensoryColors.sweetness },
    { key: 'bitterness', value: sensory.bitterness, label: sensoryLabels.bitterness, color: sensoryColors.bitterness },
  ] as const;

  const sizeClass = compact ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className={`space-y-${compact ? 2 : 3}`}>
      {values.map((item) => (
        <div key={item.key} className="flex items-center gap-3">
          {labels && !compact && (
            <span className="text-xs font-medium text-muted-ink w-20">{item.label}</span>
          )}
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((tick) => (
              <div
                key={tick}
                className={`rounded-full border border-white transition-all ${sizeClass} ${
                  tick <= item.value
                    ? `${item.color} border-${item.color.replace('bg-', '')}`
                    : 'bg-transparent border-muted/40'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
          {compact && <span className="text-xs text-muted-ink">{item.value}/5</span>}
        </div>
      ))}
    </div>
  );
};
