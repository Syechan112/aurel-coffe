import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { Location } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  location: Location;
}

const navigation = [
  {
    to: "/flavor-explorer",
    label: "Discover",
    number: "01",
  },
  {
    to: "/collection",
    label: "Collection",
    number: "02",
  },
  {
    to: "/craft",
    label: "Our Craft",
    number: "03",
  },
  {
    to: "/brew",
    label: "Journal",
    number: "04",
  },
];

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  location,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    if (!panelRef.current) return;

    const panel = panelRef.current as HTMLDivElement & { inert: boolean };
    panel.inert = !isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        !(target as Element).closest('[aria-controls="mobile-navigation"]')
      ) {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-navigation"
      ref={panelRef}
      aria-hidden={!isOpen}
      className={`
        absolute top-full right-3 left-3 mt-3
        origin-top rounded-[22px]
        border border-[#D7C6A8]/20
        bg-[#332A24] text-[#F3EDE2]
        shadow-[0_20px_60px_rgba(20,15,10,0.22)]
        transition-all duration-300 ease-out
        sm:right-6 sm:left-6
        md:hidden
        ${
          isOpen ?
            "visible translate-y-0 scale-100 opacity-100"
          : "invisible pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }
      `}
    >
      <div className="px-6 pt-6 pb-5 sm:px-8">
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.15em] text-[#D7C6A8]/60">
          Navigation
        </p>

        <nav aria-label="Mobile navigation" className="flex flex-col">
          {navigation.map((item) => {
            const active = isActive(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={`
                  group flex items-center justify-between
                  gap-5 border-b border-[#F3EDE2]/10
                  py-4 transition-colors duration-200
                  ${
                    active ? "text-[#D7C6A8]" : (
                      "text-[#F3EDE2] hover:text-[#D7C6A8]"
                    )
                  }
                `}
              >
                <div className="flex items-baseline gap-4">
                  <span className="w-5 text-[10px] text-[#D7C6A8]/45">
                    {item.number}
                  </span>

                  <span className="font-serif text-[clamp(1.6rem,6vw,2.1rem)] leading-none tracking-[-0.035em]">
                    {item.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.3}
                  className={`
                    shrink-0 transition-transform duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    ${active ? "text-[#D7C6A8]" : "text-[#F3EDE2]/35"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          to="/brew-studio"
          onClick={onClose}
          className="
            group mt-6 flex items-center
            justify-between gap-4
            rounded-xl bg-[#D7C6A8]
            px-5 py-4 text-[#332A24]
            transition-colors duration-200
            hover:bg-[#F3EDE2]
          "
        >
          <div>
            <p className="text-[13px] font-medium">Brew Studio</p>

            <p className="mt-1 text-[11px] text-[#332A24]/65">
              Find your perfect ratio
            </p>
          </div>

          <ArrowUpRight
            size={19}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        <div className="mt-6 flex items-center justify-between text-[10px] text-[#F3EDE2]/35">
          <span>AUREL Coffee Roastery</span>
          <span>Est. 2026</span>
        </div>
      </div>
    </div>
  );
};
