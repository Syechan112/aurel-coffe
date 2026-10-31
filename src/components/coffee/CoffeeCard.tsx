import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Coffee } from "@/types";
import { COFFEE_IMAGE_REF } from "@/data/imageRef";

interface CoffeeCardProps {
  coffee: Coffee;
  onClick?: () => void;
  variant?: "default" | "featured";
  className?: string;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  coffee,
  onClick,
  variant = "default",
  className = "",
}) => {
  const isFeatured = variant === "featured";

  const primaryImage = COFFEE_IMAGE_REF[coffee.name] || coffee.image;

  const fallbackUrl = "https://picsum.photos/seed/coffee-fallback/600/450";

  return (
    <Link
      to={`/coffee/${coffee.slug}`}
      onClick={onClick}
      aria-label={`View ${coffee.name} details`}
      className={`group flex min-w-0 flex-col ${className}`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-[14px] bg-[#DED2C2] ${
          isFeatured ?
            "aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1"
          : "aspect-[4/3]"
        }`}
      >
        <img
          src={primaryImage || fallbackUrl}
          alt={coffee.imageAlt || coffee.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          onError={(event) => {
            const image = event.currentTarget;

            if (image.src !== fallbackUrl) {
              image.src = fallbackUrl;
            }
          }}
        />

        {isFeatured && (
          <span className="absolute left-4 top-4 rounded-full bg-[#F3EDE2]/90 px-3.5 py-2 text-[11px] font-medium text-[#332A24] backdrop-blur-sm">
            Featured selection
          </span>
        )}

        <span
          className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EDE2]/90 text-[#332A24] opacity-0 transition-all duration-300 group-hover:opacity-100 max-md:opacity-100"
          aria-hidden="true"
        >
          <ArrowUpRight size={17} strokeWidth={1.5} />
        </span>
      </div>

      {/* Product details */}
      <div className={`flex flex-col ${isFeatured ? "pt-5" : "pt-4"}`}>
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-serif font-normal leading-snug tracking-[-0.02em] text-[#332A24] ${
              isFeatured ? "text-[clamp(1.5rem,2.5vw,2.25rem)]" : "text-[20px]"
            }`}
          >
            {coffee.name}
          </h3>

          <span className="mt-1 shrink-0 text-[11px] text-[#77765B]">
            {coffee.roastLevel}
          </span>
        </div>

        <p className="mt-1 text-[13px] font-light text-[#332A24]/60">
          {coffee.originCountry}
        </p>

        {isFeatured && coffee.description && (
          <p className="mt-3 max-w-[440px] text-[13px] font-light leading-[1.8] text-[#332A24]/65">
            {coffee.description}
          </p>
        )}

        {coffee.tastingNotes.length > 0 && (
          <p className="mt-3 text-[11px] font-light leading-relaxed text-[#77765B]">
            {coffee.tastingNotes.slice(0, 3).join(" · ")}
          </p>
        )}
      </div>
    </Link>
  );
};
