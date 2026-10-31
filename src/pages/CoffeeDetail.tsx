import React, { useCallback, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { getCoffeeBySlug, COFFEE_CATALOG } from "@/data/catalog";

import { CoffeeDetailOverview } from "@/components/coffee/CoffeeDetailOverview";
import { CoffeeDetailComparisonSection } from "@/components/coffee/CoffeeDetailComparisonSection";
import { CoffeePickerModal } from "@/components/coffee/CoffeePickerModal";
import { CoffeeNotFound } from "@/components/coffee/CoffeeNotFound";

export default function CoffeeDetail() {
  const { slug } = useParams<{ slug: string }>();

  const [searchParams, setSearchParams] = useSearchParams();

  const [pickerOpen, setPickerOpen] = useState(false);

  const coffee = getCoffeeBySlug(slug || "");

  const comparisonSlug = searchParams.get("compare");

  const comparisonCoffee =
    comparisonSlug ? getCoffeeBySlug(comparisonSlug) : undefined;

  const comparableCoffees = useMemo(
    () => COFFEE_CATALOG.filter((item) => item.slug !== slug),
    [slug],
  );

  const closePicker = useCallback(() => {
    setPickerOpen(false);
  }, []);

  const selectComparison = useCallback(
    (selectedSlug: string) => {
      const params = new URLSearchParams(searchParams);

      if (selectedSlug) {
        params.set("compare", selectedSlug);
      } else {
        params.delete("compare");
      }

      setSearchParams(params, {
        preventScrollReset: true,
      });

      setPickerOpen(false);
    },
    [searchParams, setSearchParams],
  );

  const clearComparison = useCallback(() => {
    selectComparison("");
  }, [selectComparison]);

  if (!coffee) {
    return <CoffeeNotFound />;
  }

  return (
    <>
      <CoffeeDetailOverview coffee={coffee} />

      <CoffeeDetailComparisonSection
        coffee={coffee}
        comparisonCoffee={comparisonCoffee}
        onOpenPicker={() => setPickerOpen(true)}
        onClearComparison={clearComparison}
      />

      <CoffeePickerModal
        open={pickerOpen}
        coffees={comparableCoffees}
        selectedSlug={comparisonCoffee?.slug}
        onClose={closePicker}
        onSelect={selectComparison}
      />
    </>
  );
}
