import React from 'react';
import type { Coffee } from '@/types';
import { SensoryProfile } from './SensoryProfile';
import { Badge } from './Badge';

interface CoffeeComparisonProps {
  coffee1: Coffee;
  coffee2: Coffee;
}

export const CoffeeComparison: React.FC<CoffeeComparisonProps> = ({ coffee1, coffee2 }) => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-[#77765B] mb-4">Side by side</p>
        <h3 className="text-2xl font-serif text-ink mb-6">Compare sensory profiles</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Coffee 1 */}
        <div className="border border-[#D9D0C4] rounded-xl p-6">
          <div className="mb-6 pb-6 border-b border-[#D9D0C4]">
            <p className="text-xs font-mono uppercase tracking-widest text-[#77765B] mb-2">Coffee 1</p>
            <h4 className="text-xl font-serif text-ink mb-2">{coffee1.name}</h4>
            <p className="text-sm text-muted-ink">{coffee1.originCountry}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="roast" value={coffee1.roastLevel} />
              <Badge variant="process" value={coffee1.process || 'washed'} />
            </div>
          </div>
          <SensoryProfile sensory={coffee1.sensory} labels={true} />
        </div>

        {/* Coffee 2 */}
        <div className="border border-[#D9D0C4] rounded-xl p-6">
          <div className="mb-6 pb-6 border-b border-[#D9D0C4]">
            <p className="text-xs font-mono uppercase tracking-widest text-[#77765B] mb-2">Coffee 2</p>
            <h4 className="text-xl font-serif text-ink mb-2">{coffee2.name}</h4>
            <p className="text-sm text-muted-ink">{coffee2.originCountry}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="roast" value={coffee2.roastLevel} />
              <Badge variant="process" value={coffee2.process || 'washed'} />
            </div>
          </div>
          <SensoryProfile sensory={coffee2.sensory} labels={true} />
        </div>
      </div>

      {/* Quick notes */}
      <div className="bg-[#332A24]/5 rounded-lg p-6 space-y-4">
        <p className="text-xs font-mono uppercase tracking-widest text-[#77675B]">Observations</p>
        <div className="space-y-3 text-sm text-muted-ink leading-relaxed">
          {coffee1.sensory.acidity > coffee2.sensory.acidity && (
            <p><strong>{coffee1.name}</strong> is brighter and more acidic than <strong>{coffee2.name}</strong>.</p>
          )}
          {coffee2.sensory.acidity > coffee1.sensory.acidity && (
            <p><strong>{coffee2.name}</strong> is brighter and more acidic than <strong>{coffee1.name}</strong>.</p>
          )}
          
          {coffee1.sensory.body > coffee2.sensory.body && (
            <p><strong>{coffee1.name}</strong> is fuller-bodied and heavier in the cup.</p>
          )}
          {coffee2.sensory.body > coffee1.sensory.body && (
            <p><strong>{coffee2.name}</strong> is fuller-bodied and heavier in the cup.</p>
          )}

          {coffee1.sensory.sweetness > coffee2.sensory.sweetness && (
            <p><strong>{coffee1.name}</strong> emphasizes sweetness; <strong>{coffee2.name}</strong> is more balanced or savory.</p>
          )}
          {coffee2.sensory.sweetness > coffee1.sensory.sweetness && (
            <p><strong>{coffee2.name}</strong> emphasizes sweetness; <strong>{coffee1.name}</strong> is more balanced or savory.</p>
          )}
        </div>
      </div>
    </div>
  );
};