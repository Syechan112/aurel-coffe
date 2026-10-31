import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { BrewArticle } from "./BrewJournalData";

interface ArticleListItemProps {
  article: BrewArticle;
  index: number;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({
  article,
  index,
}) => {
  return (
    <article className="group border-b border-[#332A24]/15">
      <Link
        to={`/journal/${article.slug}`}
        className="grid grid-cols-1 gap-5 py-8 transition-colors sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10"
      >
        <div className="flex items-center gap-5 lg:col-span-2">
          <span className="font-serif text-[20px] text-[#332A24]/35">
            {String(index + 2).padStart(2, "0")}
          </span>

          <span className="text-[11px] uppercase tracking-[0.08em] text-[#77765B]">
            {article.category}
          </span>
        </div>

        <div className="lg:col-span-7">
          <h3 className="font-serif text-[clamp(1.6rem,2.5vw,2.5rem)] leading-[1.2] tracking-[-0.025em] text-[#332A24] transition-colors duration-300 group-hover:text-[#77765B]">
            {article.title}
          </h3>

          <p className="mt-3 max-w-[590px] text-[13px] leading-[1.8] text-[#332A24]/60">
            {article.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 lg:col-span-3 lg:justify-end">
          <div className="text-[11px] leading-[1.8] text-[#332A24]/50 lg:text-right">
            <p>{article.date}</p>
            <p>{article.readTime} read</p>
          </div>

          <ArrowUpRight
            size={21}
            strokeWidth={1.25}
            className="shrink-0 text-[#332A24] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </Link>
    </article>
  );
};