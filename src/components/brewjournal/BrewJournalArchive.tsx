import React from "react";
import { Container, Section, AnimatedElement } from "@/components/ui";
import { fadeInUp } from "@/hooks/useInViewAnimation";
import { FeaturedArticle } from "./FeaturedArticle";
import { ArticleListItem } from "./ArticleListItem";
import type { BrewArticle } from "./BrewJournalData";

interface BrewJournalArchiveProps {
  articles: BrewArticle[];
  featuredArticle: BrewArticle;
  remainingArticles: BrewArticle[];
}

export const BrewJournalArchive: React.FC<BrewJournalArchiveProps> = ({
  articles,
  featuredArticle,
  remainingArticles,
}) => {
  const totalArticles = String(articles.length).padStart(2, "0");

  return (
    <Section id="journal-archive" className="bg-[#F3EDE2] !py-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-20">
          {/* Journal index */}
          <aside className="border-b border-[#332A24]/20 py-10 sm:py-12 lg:col-span-3 lg:border-r lg:border-b-0 lg:py-20 lg:pr-8 xl:pr-12">
            <div className="lg:sticky lg:top-28">
              <AnimatedElement animation={fadeInUp(150)}>
                <div className="flex items-start justify-between gap-6 lg:block">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                      AUREL / Journal Index
                    </p>

                    <h2 className="mt-5 max-w-[260px] font-serif text-[clamp(2rem,3vw,3.4rem)] leading-[1.08] tracking-[-0.045em] text-[#332A24]">
                      The
                      <br />
                      reading
                      <br />
                      room.
                    </h2>
                  </div>

                  <span className="font-serif text-[32px] leading-none text-[#332A24]/30 lg:mt-10 lg:block lg:text-[44px]">
                    {totalArticles}
                  </span>
                </div>

                <p className="mt-6 hidden max-w-[210px] text-[13px] leading-[1.85] text-[#332A24]/60 lg:block">
                  Observations, experiments, and practical notes on making
                  better coffee.
                </p>

                <div className="mt-10 hidden border-t border-[#332A24]/20 pt-5 lg:block">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[#77765B]">
                    In this edition
                  </p>

                  <div className="mt-4 space-y-3 text-[12px] text-[#332A24]/65">
                    <p>01 / Featured reading</p>
                    <p>02 / The archive</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </aside>

          {/* Reading content */}
          <div className="min-w-0 py-10 sm:py-12 lg:col-span-9 lg:py-20">
            {/* Featured article */}
            <AnimatedElement animation={fadeInUp(200)}>
              <div className="mb-6 flex items-center justify-between gap-5">
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                  01 / Featured reading
                </span>

                <span className="text-[11px] text-[#332A24]/45">
                  Editor's selection
                </span>
              </div>

              <FeaturedArticle article={featuredArticle} />
            </AnimatedElement>

            {/* Article archive */}
            <div className="mt-16 sm:mt-20 lg:mt-24">
              <AnimatedElement animation={fadeInUp(150)}>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
                      02 / The archive
                    </p>

                    <h3 className="font-serif text-[clamp(2rem,3vw,3.2rem)] leading-tight tracking-[-0.04em] text-[#332A24]">
                      Further reading.
                    </h3>
                  </div>

                  <span className="pb-1 text-[11px] text-[#332A24]/50">
                    {String(remainingArticles.length).padStart(2, "0")} entries
                  </span>
                </div>
              </AnimatedElement>

              <div className="border-t border-[#332A24]/25">
                {remainingArticles.map((article, index) => (
                  <ArticleListItem
                    key={article.id}
                    article={article}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Archive ending */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#332A24]/20 pt-5">
              <span className="text-[11px] text-[#332A24]/45">
                End of journal index
              </span>

              <span className="font-serif text-[15px] italic text-[#77765B]">
                Read. Brew. Repeat.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
