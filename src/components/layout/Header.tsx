import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Coffee, Menu, X } from "lucide-react";
import { MobileNav } from "./MobileNav";

export { Footer } from "./Footer";

const navigation = [
  { to: "/flavor-explorer", label: "Discover" },
  { to: "/collection", label: "Collection" },
  { to: "/craft", label: "Our Craft" },
  { to: "/brew", label: "Journal" },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const previousPath = useRef(location.pathname);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  const isFloating = isScrolled || menuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      setMenuOpen(false);
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500 ease-in-out
        ${isFloating ? "px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8" : "px-0 pt-0"}
      `}
    >
      <div
        className={`
          relative mx-auto w-full
          border border-[#D7C6A8]/15
          bg-[#332A24] text-[#F3EDE2]
          transition-all duration-500 ease-in-out
          ${
            isFloating ?
              "max-w-[1180px] rounded-[22px] shadow-[0_12px_40px_rgba(20,15,10,0.16)] md:rounded-full"
            : "max-w-full rounded-none border-x-0 border-t-0 shadow-none"
          }
        `}
      >
        <div
          className={`
            mx-auto flex items-center justify-between
            transition-all duration-500 ease-in-out
            ${
              isFloating ?
                "h-[64px] px-5 sm:px-7 lg:px-9"
              : "h-[76px] max-w-[1280px] px-5 sm:px-8 lg:px-12"
            }
          `}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group inline-flex shrink-0 items-center gap-3"
            aria-label="AUREL Roastery, home"
          >
            <span
              className={`
                flex items-center justify-center
                rounded-full border border-[#D7C6A8]/35
                transition-all duration-300
                group-hover:border-[#D7C6A8]
                ${isFloating ? "h-8 w-8" : "h-9 w-9"}
              `}
            >
              <Coffee size={17} strokeWidth={1.4} />
            </span>

            <span className="flex flex-col">
              <span
                className={`
                  font-serif leading-none tracking-[-0.045em]
                  transition-all duration-300
                  ${isFloating ? "text-[21px]" : "text-[23px]"}
                `}
              >
                AUREL
              </span>

              <span className="mt-1 font-sans text-[9px] font-medium uppercase tracking-[0.27em] text-[#D7C6A8]/65">
                Coffee Roastery
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 md:flex lg:gap-9"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isActive(item.to) ? "page" : undefined}
                className={`
                  group relative py-2 text-[13px]
                  font-medium tracking-[0.01em]
                  transition-colors duration-200
                  ${
                    isActive(item.to) ? "text-[#F3EDE2]" : (
                      "text-[#F3EDE2]/60 hover:text-[#F3EDE2]"
                    )
                  }
                `}
              >
                {item.label}

                <span
                  className={`
                    absolute bottom-0 left-0 h-px
                    bg-[#D7C6A8]
                    transition-all duration-300
                    ${isActive(item.to) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <Link
              to="/flavor-explorer"
              className="
                group inline-flex items-center gap-3
                rounded-full border border-[#D7C6A8]/45
                px-5 py-2.5 text-[12px] font-medium
                tracking-wide text-[#F3EDE2]
                transition-colors duration-200
                hover:border-[#D7C6A8]
                hover:bg-[#D7C6A8]
                hover:text-[#332A24]
              "
            >
              Explore Coffee
              <ArrowRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`
              inline-flex h-10 w-10 items-center
              justify-center rounded-full border
              transition-colors duration-200
              md:hidden
              ${
                menuOpen ?
                  "border-[#D7C6A8] bg-[#D7C6A8] text-[#332A24]"
                : "border-[#D7C6A8]/25 text-[#F3EDE2] hover:border-[#D7C6A8]/70"
              }
            `}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ?
              <X size={19} strokeWidth={1.5} />
            : <Menu size={19} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <MobileNav
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        location={location}
      />
    </header>
  );
};
