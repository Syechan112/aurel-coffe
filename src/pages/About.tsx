import React from 'react';
import { Container, Section, SectionHeading } from '@/components/ui';

export default function About() {
  return (
    <>
      <Section dark>
        <Container>
          <SectionHeading
            dark
            eyebrow="ABOUT"
            title="AUREL is a question, not a brand."
            description="We roast because we are curious. Every bean is a conversation between soil, season, and the hands that guided it."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="text-xs font-mono uppercase tracking-widest text-[#77765B] mb-4">Origin story</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-ink leading-tight">
                A small roastery in a city that forgot how to slow down.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-6 text-muted-ink text-base leading-relaxed">
                <p>
                  AUREL began with a single question: what does coffee actually taste like when nothing is added to it? Not syrup, not foam, not a story. Just beans, heat, and time.
                </p>
                <p>
                  We started small — a borrowed roaster, a notebook, and a growing pile of green samples from places most people cannot pronounce. We roasted late into the night, tasting, adjusting, tasting again. We learned that the best cup is not the darkest one. It is the one that makes you pause.
                </p>
                <p>
                  Today we still roast in small batches. We buy from cooperatives and family estates where the farmer knows the name of every tree. We pay above fair-trade minimums because it is the least we can do. We publish our roast dates on every bag because freshness is not a feeling, it is a number.
                </p>
                <p>
                  This website is a small part of that. No hype, no urgency, no fake scarcity. Just coffee, explained honestly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Small batches', value: 'Roasted by hand, never outsourced' },
              { label: 'Direct trade', value: 'Buying from 12 producer partners' },
              { label: 'Roast date', value: 'Printed on every bag' },
              { label: 'No additives', value: 'Just beans and heat' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-mono uppercase tracking-widest text-[#D7C6A8] mb-2">{item.label}</p>
                <p className="text-[#F3EDE2] text-lg font-serif font-normal leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-[#77765B] mb-4">The people</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-ink mb-10 leading-tight">
              A small team, all of us cuppers.
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { name: 'Mara', role: 'Head roaster', detail: 'Former pastry chef. Seeks precision in flame.' },
                { name: 'Daniel', role: 'Green buyer', detail: 'Travels 180 days a year. Knows every altitude by heart.' },
                { name: 'Priya', role: 'Cupping lead', detail: 'Keeps the notebook. Never wrong about a defect.' },
              ].map((person) => (
                <div key={person.name} className="border-t border-[#D9D0C4] pt-6">
                  <h3 className="text-xl font-serif text-ink">{person.name}</h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#77765B] mb-2">{person.role}</p>
                  <p className="text-sm text-muted-ink leading-relaxed">{person.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}