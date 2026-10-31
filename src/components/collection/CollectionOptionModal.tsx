import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, X } from "lucide-react";

interface CollectionOption {
  value: string;
  label: string;
}

interface CollectionOptionModalProps {
  open: boolean;
  title: string;
  description?: string;
  options: CollectionOption[];
  selectedValue?: string;
  allowClear?: boolean;
  clearLabel?: string;
  onSelect: (value: string | undefined) => void;
  onClose: () => void;
}

export const CollectionOptionModal: React.FC<CollectionOptionModalProps> = ({
  open,
  title,
  description,
  options,
  selectedValue,
  allowClear = true,
  clearLabel = "All options",
  onSelect,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href]",
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
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const modal = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
      role="presentation"
    >
      <button
        type="button"
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 -z-10 bg-[#211A16]/75 backdrop-blur-[5px] animate-in fade-in duration-200 motion-reduce:animate-none"
      />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="collection-option-modal-title"
        className="relative z-10 mx-auto w-full max-w-md overflow-hidden rounded-xl bg-[#F3EDE2] shadow-2xl animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-5 border-b border-[#332A24]/15 px-5 py-5 sm:px-7">
          <div>
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#77765B]">
              Collection filter
            </p>
            <h2
              id="collection-option-modal-title"
              className="font-serif text-2xl text-[#332A24]"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-2 text-[12px] leading-relaxed text-[#332A24]/55">
                {description}
              </p>
            )}
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={`Close ${title} modal`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#332A24]/20 text-[#332A24] transition-colors hover:bg-[#332A24] hover:text-[#F3EDE2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77765B]"
          >
            <X size={17} strokeWidth={1.5} />
          </button>
        </div>

        <div className="max-h-[min(60dvh,420px)] overflow-y-auto p-4 sm:p-5">
          {allowClear && (
            <button
              type="button"
              onClick={() => {
                onSelect(undefined);
                onClose();
              }}
              className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-[13px] transition-colors ${
                selectedValue === undefined
                  ? "bg-[#332A24] text-[#F3EDE2]"
                  : "text-[#332A24] hover:bg-[#332A24]/[0.06]"
              }`}
            >
              {clearLabel}
              {selectedValue === undefined && <Check size={16} strokeWidth={1.8} />}
            </button>
          )}

          {options.map((option) => {
            const selected = selectedValue === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onSelect(option.value);
                  onClose();
                }}
                className={`mt-1 flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-[13px] transition-colors ${
                  selected
                    ? "bg-[#332A24] text-[#F3EDE2]"
                    : "text-[#332A24] hover:bg-[#332A24]/[0.06]"
                }`}
              >
                {option.label}
                {selected && <Check size={16} strokeWidth={1.8} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(modal, document.body) : null;
};
