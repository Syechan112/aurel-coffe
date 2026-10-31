import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Coffee } from "lucide-react";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { to: "/flavor-explorer", label: "Flavor Explorer" },
      { to: "/collection", label: "Our Collection" },
    ],
  },
  {
    title: "Discover",
    links: [
      { to: "/craft", label: "Our Craft" },
      { to: "/brew", label: "Brew Journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Aurel" },
      { to: "/contact", label: "Get in Touch" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#332A24] text-[#F3EDE2]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Main content */}
        <div className="grid gap-16 border-b border-[#D7C6A8]/20 pb-20 pt-20 md:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pb-28 lg:pt-36">
          {/* Editorial introduction */}
          <div className="max-w-[660px]">
            <div className="mb-9 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D7C6A8]/60" />
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D7C6A8]">
                Beyond the ordinary cup
              </span>
            </div>

            <h2 className="font-serif text-[clamp(3.4rem,6vw,6.5rem)] font-normal leading-[0.99] tracking-[-0.055em]">
              Stay curious.
              <br />
              <span className="italic text-[#D7C6A8]">Drink better.</span>
            </h2>

            <p className="mt-8 max-w-[390px] text-[14px] font-light leading-[1.9] text-[#F3EDE2]/60 sm:text-[15px]">
              Every great cup begins with a little curiosity. Explore
              thoughtfully sourced coffees and discover something worth slowing
              down for.
            </p>

            <Link
              to="/collection"
              className="group mt-10 inline-flex items-center gap-5 border-b border-[#D7C6A8]/60 pb-3 text-[13px] font-medium tracking-[0.02em] transition-colors duration-300 hover:border-[#F3EDE2] hover:text-[#D7C6A8]"
            >
              Explore our collection
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-col justify-between gap-16 lg:pt-4">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-6">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F3EDE2]">
                    {group.title}
                  </h3>

                  <ul className="space-y-5">
                    {group.links.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="group inline-flex items-center gap-1 text-[13px] font-light leading-relaxed text-[#D7C6A8]/65 transition-colors duration-300 hover:text-[#F3EDE2]"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight
                            size={12}
                            className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Small brand statement */}
            <div className="hidden border-t border-[#D7C6A8]/20 pt-7 lg:block">
              <p className="max-w-[330px] font-serif text-[20px] italic leading-[1.5] text-[#D7C6A8]/75">
                "A little more intention in every cup."
              </p>
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="relative overflow-hidden border-b border-[#D7C6A8]/20 py-5 sm:py-7">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              aria-label="AUREL Roastery, home"
              className="block min-w-0"
            >
              <span className="block font-serif text-[clamp(5.2rem,19vw,18rem)] font-normal leading-[0.9] tracking-[-0.085em] text-[#F3EDE2] transition-colors duration-500 hover:text-[#D7C6A8]">
                AUREL
              </span>
            </Link>

            <div className="hidden shrink-0 flex-col items-end gap-2 self-end pb-3 lg:flex">
              <Coffee size={24} strokeWidth={1} className="text-[#D7C6A8]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D7C6A8]/65">
                Coffee Roastery
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-7 text-[11px] font-light tracking-[0.02em] text-[#D7C6A8]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AUREL. All rights reserved.</p>

          <p className="text-[#D7C6A8]/65">
            Crafted with intention. Enjoyed with curiosity.
          </p>

          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 transition-colors duration-300 hover:text-[#F3EDE2]"
          >
            Back to home
            <ArrowUpRight size={13} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
