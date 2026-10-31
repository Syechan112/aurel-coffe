import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, Search, X } from "lucide-react";
import type { Coffee } from "@/types";

interface CoffeePickerModalProps {
  open: boolean;
  coffees: Coffee[];
  selectedSlug?: string;
  onClose: () => void;
  onSelect: (slug: string) => void;
}

export const CoffeePickerModal: React.FC<CoffeePickerModalProps> = ({
  open,
  coffees,
  selectedSlug,
  onClose,
  onSelect,
}) => {
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filteredCoffees = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return coffees;

    return coffees.filter((coffee) =>
      [
        coffee.name,
        coffee.originCountry,
        coffee.roastLevel,
        ...coffee.tastingNotes,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [coffees, search]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      searchRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), input:not([disabled]), a[href]",
        ),
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#211A16]/75 backdrop-blur-[5px] animate-in fade-in duration-200 motion-reduce:animate-none"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="coffee-picker-title"
        className="relative z-10 flex max-h-[min(90dvh,850px)] w-full max-w-[980px] flex-col overflow-hidden rounded-xl bg-[#F3EDE2] shadow-2xl animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none sm:rounded-2xl"
      >
        {/* Modal header */}
        <div className="flex shrink-0 items-start justify-between gap-6 border-b border-[#332A24]/15 px-5 py-5 sm:px-8 sm:py-7">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
              Coffee comparison
            </p>

            <h2
              id="coffee-picker-title"
              className="font-serif text-[clamp(1.7rem,3vw,2.5rem)] leading-tight tracking-[-0.035em] text-[#332A24]"
            >
              Choose your comparison.
            </h2>

            <p className="mt-2 max-w-[460px] text-[12px] leading-relaxed text-[#332A24]/60 sm:text-[13px]">
              Explore another coffee to compare its tasting notes, roast, and
              sensory profile.
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close coffee picker"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#332A24]/20 text-[#332A24] transition-colors hover:bg-[#332A24] hover:text-[#F3EDE2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77765B]"
          >
            <X size={17} strokeWidth={1.5} />
          </button>
        </div>

        {/* Search */}
        <div className="shrink-0 border-b border-[#332A24]/10 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3 border-b border-[#332A24]/25 pb-3 focus-within:border-[#332A24]">
            <Search
              size={18}
              strokeWidth={1.5}
              className="shrink-0 text-[#77765B]"
            />

            <input
              ref={searchRef}
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search coffee, origin, or tasting notes..."
              aria-label="Search coffees"
              className="min-w-0 flex-1 bg-transparent text-[13px] text-[#332A24] outline-none placeholder:text-[#332A24]/40"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="text-[#77765B] hover:text-[#332A24]"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Coffee selection */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-8 sm:py-7">
          {filteredCoffees.length > 0 ?
            <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4">
              {filteredCoffees.map((coffee) => {
                const selected = coffee.slug === selectedSlug;

                return (
                  <button
                    key={coffee.slug}
                    type="button"
                    onClick={() => onSelect(coffee.slug)}
                    aria-pressed={selected}
                    className="group min-w-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77765B]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#E5DCCF]">
                      <img
                        src={coffee.image}
                        alt={coffee.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.045] motion-reduce:transform-none"
                      />

                      {selected && (
                        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#332A24] text-[#F3EDE2]">
                          <Check size={15} strokeWidth={2} />
                        </div>
                      )}
                    </div>

                    <div className="pt-3">
                      <p className="mb-1 text-[10px] uppercase tracking-[0.08em] text-[#77765B]">
                        {coffee.originCountry}
                      </p>

                      <h3 className="font-serif text-[16px] leading-snug text-[#332A24] sm:text-[18px]">
                        {coffee.name}
                      </h3>

                      <p className="mt-1 text-[11px] capitalize text-[#332A24]/55">
                        {coffee.roastLevel} roast
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          : <div className="flex min-h-52 flex-col items-center justify-center text-center">
              <p className="font-serif text-xl text-[#332A24]">
                No coffees found.
              </p>

              <p className="mt-2 text-[13px] text-[#332A24]/55">
                Try another name, origin, or flavor.
              </p>
            </div>
          }
        </div>

        {/* Footer */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#332A24]/15 px-5 py-4 sm:px-8">
          <span className="text-[11px] tabular-nums text-[#332A24]/50">
            {filteredCoffees.length} coffees available
          </span>

          <button
            type="button"
            onClick={onClose}
            className="text-[12px] font-medium text-[#332A24] underline underline-offset-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
