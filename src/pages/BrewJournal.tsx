import React from "react";

import {
  articles,
  featuredArticle,
  remainingArticles,
  BrewJournalHero,
  BrewJournalArchive,
  BrewStudioCTA,
} from "@/components/brewjournal";

export default function BrewJournal() {
  return (
    <>
      <BrewJournalHero articleCount={articles.length} />
      <BrewJournalArchive
        articles={articles}
        featuredArticle={featuredArticle}
        remainingArticles={remainingArticles}
      />
      <BrewStudioCTA />
    </>
  );
}
  