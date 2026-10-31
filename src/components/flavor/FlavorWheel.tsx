import React, { useId } from "react";
import { RotateCcw } from "lucide-react";
import type { FlavorFamily } from "@/types";

interface FlavorWheelProps {
  selectedFamilies: FlavorFamily[];
  onToggleFamily: (family: FlavorFamily) => void;
  onClearAll: () => void;
  className?: string;
}

const FLAVORS: {
  family: FlavorFamily;
  label: string;
  description: string;
  color: string;
  activeColor: string;
  startAngle: number;
}[] = [
  {
    family: "fruity",
    label: "Fruity",
    description: "Citrus & berries",
    color: "#B88A7B",
    activeColor: "#A96658",
    startAngle: -90,
  },
  {
    family: "nutty",
    label: "Nutty",
    description: "Nuts & caramel",
    color: "#B7A07A",
    activeColor: "#987C4D",
    startAngle: 0,
  },
  {
    family: "bold",
    label: "Bold",
    description: "Cocoa & spice",
    color: "#817366",
    activeColor: "#635247",
    startAngle: 90,
  },
  {
    family: "floral",
    label: "Floral",
    description: "Jasmine & tea",
    color: "#949B83",
    activeColor: "#737D61",
    startAngle: 180,
  },
];

const CENTER = 200;
const OUTER_RADIUS = 184;
const INNER_RADIUS = 70;
const LABEL_RADIUS = 131;

function polarPoint(radius: number, angle: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: CENTER + radius * Math.cos(radians),
    y: CENTER + radius * Math.sin(radians),
  };
}

function createSegmentPath(startAngle: number) {
  const endAngle = startAngle + 90;

  const outerStart = polarPoint(OUTER_RADIUS, startAngle);
  const outerEnd = polarPoint(OUTER_RADIUS, endAngle);
  const innerEnd = polarPoint(INNER_RADIUS, endAngle);
  const innerStart = polarPoint(INNER_RADIUS, startAngle);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 0 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

export const FlavorWheel: React.FC<FlavorWheelProps> = ({
  selectedFamilies,
  onToggleFamily,
  onClearAll,
  className = "",
}) => {
  const titleId = useId();
  const selectedCount = selectedFamilies.length;

  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-[500px]">
        <svg
          viewBox="0 0 400 400"
          className="block h-auto w-full overflow-visible"
          role="group"
          aria-labelledby={titleId}
        >
          <title id={titleId}>Interactive coffee flavor wheel</title>

          {/* Outer guide */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={193}
            fill="none"
            stroke="#332A24"
            strokeOpacity="0.14"
            strokeWidth="1"
            pointerEvents="none"
          />

          {/* Interactive segments */}
          {FLAVORS.map((flavor) => {
            const active = selectedFamilies.includes(flavor.family);

            const labelPosition = polarPoint(
              LABEL_RADIUS,
              flavor.startAngle + 45,
            );

            return (
              <g
                key={flavor.family}
                role="button"
                tabIndex={0}
                aria-label={`${flavor.label}, ${flavor.description}`}
                aria-pressed={active}
                onClick={() => onToggleFamily(flavor.family)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onToggleFamily(flavor.family);
                  }
                }}
                className="group cursor-pointer outline-none"
              >
                <path
                  d={createSegmentPath(flavor.startAngle)}
                  fill={active ? flavor.activeColor : flavor.color}
                  stroke="#E6D9C6"
                  strokeWidth="3"
                  className="transition-colors duration-200 group-hover:brightness-110"
                />

                {/* Focus outline */}
                <path
                  d={createSegmentPath(flavor.startAngle)}
                  fill="none"
                  stroke="#FFF8EF"
                  strokeWidth="3"
                  className="pointer-events-none opacity-0 group-focus-visible:opacity-100"
                />

                {/* Active indicator */}
                {active && (
                  <circle
                    cx={labelPosition.x}
                    cy={labelPosition.y - 27}
                    r="3.5"
                    fill="#FFF8EF"
                    pointerEvents="none"
                  />
                )}

                {/* Label */}
                <text
                  x={labelPosition.x}
                  y={labelPosition.y}
                  textAnchor="middle"
                  fill="#FFF8EF"
                  fontFamily="Georgia, serif"
                  fontSize="19"
                  pointerEvents="none"
                >
                  {flavor.label}
                </text>

                <text
                  x={labelPosition.x}
                  y={labelPosition.y + 18}
                  textAnchor="middle"
                  fill="#FFF8EF"
                  fillOpacity="0.82"
                  fontSize="10"
                  pointerEvents="none"
                >
                  {flavor.description}
                </text>
              </g>
            );
          })}

          {/* Center: non-interactive */}
          <g pointerEvents="none">
            <circle
              cx={CENTER}
              cy={CENTER}
              r={INNER_RADIUS - 2}
              fill="#E6D9C6"
            />

            <circle
              cx={CENTER}
              cy={CENTER}
              r={INNER_RADIUS - 12}
              fill="none"
              stroke="#332A24"
              strokeOpacity="0.13"
              strokeWidth="1"
            />

            <text
              x={CENTER}
              y={CENTER - 14}
              textAnchor="middle"
              fill="#332A24"
              fontFamily="Georgia, serif"
              fontSize="22"
            >
              Your
            </text>

            <text
              x={CENTER}
              y={CENTER + 10}
              textAnchor="middle"
              fill="#332A24"
              fontFamily="Georgia, serif"
              fontSize="22"
            >
              palate
            </text>

            <text
              x={CENTER}
              y={CENTER + 31}
              textAnchor="middle"
              fill="#77765B"
              fontSize="10"
            >
              {selectedCount === 0 ?
                "Select a flavor"
              : `${selectedCount} selected`}
            </text>
          </g>
        </svg>
      </div>

      {selectedCount > 0 && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={onClearAll}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[#332A24]/70 transition-colors hover:bg-[#332A24]/[0.07] hover:text-[#332A24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77765B]"
          >
            <RotateCcw size={13} strokeWidth={1.5} aria-hidden="true" />
            Clear selection
          </button>
        </div>
      )}
    </div>
  );
};
