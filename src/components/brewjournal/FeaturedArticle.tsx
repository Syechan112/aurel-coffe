import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { BrewArticle } from "./BrewJournalData";

interface FeaturedArticleProps {
  article: BrewArticle;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  article,
}) => {
  return (
    <article className="group border-b border-[#332A24]/20 pb-12 sm:pb-16">
      <Link
        to={`/journal/${article.slug}`}
        className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-14"
      >
        <div className="lg:col-span-8">
          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
              Featured story
            </span>

            <span className="h-px w-8 bg-[#332A24]/25" />

            <span className="text-[11px] text-[#332A24]/50">
              {article.category}
            </span>
          </div>

          <h3 className="max-w-[850px] font-serif text-[clamp(2.7rem,5.5vw,6rem)] leading-[1.07] tracking-[-0.045em] text-[#332A24] transition-colors duration-300 group-hover:text-[#77765B]">
            {article.title}
          </h3>

          <p className="mt-7 max-w-[590px] text-[14px] leading-[1.9] text-[#332A24]/65 sm:text-[15px]">
            {article.excerpt}
          </p>
        </div>

        <div className="flex flex-col items-start lg:col-span-4 lg:items-end">
          <div className="flex items-center gap-3 text-[12px] text-[#332A24]/50">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} read</span>
          </div>

          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#332A24]/25 text-[#332A24] transition-all duration-300 group-hover:border-[#332A24] group-hover:bg-[#332A24] group-hover:text-[#F3EDE2]">
            <ArrowUpRight
              size={23}
              strokeWidth={1.25}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </article>
  );
};