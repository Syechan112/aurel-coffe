import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { FlavorWheel } from "@/components/flavor/FlavorWheel";
import type { FlavorFamily } from "@/types";

interface FlavorInvitationProps {
  selectedFamilies: FlavorFamily[];
}

export const FlavorInvitationSection: React.FC<FlavorInvitationProps> = ({
  selectedFamilies,
}) => {
  const [activeFamilies, setActiveFamilies] =
    React.useState<FlavorFamily[]>(selectedFamilies);

  React.useEffect(() => {
    setActiveFamilies(selectedFamilies);
  }, [selectedFamilies]);

  const toggleFamily = (family: FlavorFamily) => {
    setActiveFamilies((current) =>
      current.includes(family) ?
        current.filter((item) => item !== family)
      : [...current, family],
    );
  };

  const clearFamilies = () => {
    setActiveFamilies([]);
  };

  const explorerHref = React.useMemo(() => {
    const params = new URLSearchParams();

    activeFamilies.forEach((family) => {
      params.append("flavor", family);
    });

    const query = params.toString();

    return query ? `/flavor-explorer?${query}` : "/flavor-explorer";
  }, [activeFamilies]);

  return (
    <Section
      dark
      id="flavor-invitation"
      className="overflow-hidden bg-[#332A24] !py-20 md:!py-28 lg:!py-32"
    >
      <Container>
        {/* Section introduction */}
        <div className="flex flex-col gap-5 border-b border-[#F3EDE2]/20 pb-9 md:flex-row md:items-end md:justify-between md:gap-10 md:pb-12">
          <div className="max-w-[650px]">
            <p className="mb-5 text-[12px] font-medium tracking-[0.03em] text-[#D7C6A8]/75">
              The Flavor Experience
            </p>

            <h2 className="font-serif text-[clamp(2.8rem,5vw,5.25rem)] font-normal leading-[1.06] tracking-[-0.035em] text-[#F3EDE2]">
              Find what tastes
              <br />
              like you.
            </h2>
          </div>

          <p className="max-w-[270px] text-[13px] leading-[1.8] text-[#F3EDE2]/60 md:pb-1">
            A little exploration goes a long way. Select the flavors you enjoy
            and discover coffee that feels right.
          </p>
        </div>

        {/* Interactive composition */}
        <div className="grid items-center gap-10 pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-14">
          {/* Wheel */}
          <div className="relative flex min-w-0 items-center justify-center lg:col-span-7">
            <div className="relative w-full max-w-[560px]">
              <FlavorWheel
                selectedFamilies={activeFamilies}
                onToggleFamily={toggleFamily}
                onClearAll={clearFamilies}
              />
            </div>
          </div>

          {/* Selection information */}
          <div className="lg:col-span-5">
            <div className="mx-auto w-full max-w-[430px] lg:ml-auto lg:mr-0">
              <div className="flex items-center justify-between gap-4 border-b border-[#F3EDE2]/20 pb-5">
                <p className="text-[12px] font-medium text-[#D7C6A8]">
                  Your flavor profile
                </p>

                <span className="text-[12px] tabular-nums text-[#F3EDE2]/45">
                  {String(activeFamilies.length).padStart(2, "0")} selected
                </span>
              </div>

              {/* Selected flavors */}
              <div
                aria-live="polite"
                className="flex min-h-[180px] flex-col justify-center py-7"
              >
                {activeFamilies.length > 0 ?
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                    {activeFamilies.map((family, index) => (
                      <React.Fragment key={family}>
                        {index > 0 && (
                          <span
                            aria-hidden="true"
                            className="font-serif text-[22px] text-[#D7C6A8]/35"
                          >
                            /
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleFamily(family)}
                          aria-label={`Remove ${family} flavor`}
                          className="group inline-flex items-center gap-2 font-serif text-[clamp(1.6rem,2.8vw,2.5rem)] font-normal capitalize tracking-[-0.025em] text-[#F3EDE2] transition-colors duration-200 hover:text-[#D7C6A8]"
                        >
                          {family}

                          <X
                            size={14}
                            strokeWidth={1.5}
                            className="opacity-50 transition-opacity group-hover:opacity-100"
                          />
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                : <div>
                    <p className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[-0.025em] text-[#F3EDE2]/45">
                      Your palate,
                      <br />
                      your discovery.
                    </p>

                    <p className="mt-4 text-[13px] leading-relaxed text-[#F3EDE2]/45">
                      Select one or more flavors on the wheel to begin.
                    </p>
                  </div>
                }
              </div>

              {/* Selection actions */}
              <div className="border-t border-[#F3EDE2]/20 pt-6">
                <div className="flex items-center justify-between gap-5">
                  <p className="text-[12px] text-[#F3EDE2]/50">
                    {activeFamilies.length > 0 ?
                      "Your selection is ready."
                    : "No flavors selected yet."}
                  </p>

                  {activeFamilies.length > 0 && (
                    <button
                      type="button"
                      onClick={clearFamilies}
                      className="shrink-0 text-[12px] text-[#D7C6A8]/75 underline underline-offset-4 transition-colors hover:text-[#F3EDE2]"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <Link
                  to={explorerHref}
                  className="group mt-8 flex min-h-14 items-center justify-between gap-5 border-b border-[#D7C6A8] pb-4 text-[#F3EDE2] transition-colors duration-300 hover:text-[#D7C6A8]"
                >
                  <span className="font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] font-normal tracking-[-0.025em]">
                    {activeFamilies.length > 0 ?
                      "Explore matching coffees"
                    : "Explore all coffees"}
                  </span>

                  <ArrowUpRight
                    size={23}
                    strokeWidth={1.3}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <p className="mt-5 max-w-[320px] text-[12px] leading-[1.75] text-[#F3EDE2]/40">
                  Discover coffees selected around the flavor characteristics
                  you enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
