"use client";

import { AlertCircle, FileWarning, Copy } from "lucide-react";
import { NumberTicker } from "../../../components/ui/number-ticker";
import DisplayCards from "../../../components/ui/display-cards";

const stats = [
  { value: 4, suffix: "+ hrs", label: "Time saved" },
  { value: 2, suffix: "X", label: "Advisory revenue" },
  { value: 95, suffix: "%+", label: "Client satisfaction" },
];

const painPointCards = [
  {
    icon: AlertCircle,
    title: "Review queue is jammed",
    description: "K-1s and 1099s piling up faster than the team can clear them.",
    date: "Client feedback",
  },
  {
    icon: FileWarning,
    title: "What's the nexus rule here?",
    description: "State-by-state questions eating hours every single week.",
    date: "Client feedback",
  },
  {
    icon: Copy,
    title: "Double-entering the same data",
    description: "Same client info typed into three different tools, every time.",
    date: "Client feedback",
  },
];

export default function StatsShowcase() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left — copy + stats (unchanged) */}
        <div>
          <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Cut research and preparation hours with AI-driven automation.
          </h2>

          <p className="mt-6 font-body text-base leading-relaxed text-muted sm:text-lg">
            One reliable layer for{" "}
            <span className="font-semibold text-foreground">authoritative answers</span>,{" "}
            <span className="font-semibold text-foreground">automated intake and extraction</span>, and{" "}
            <span className="font-semibold text-foreground">streamlined prep</span> to help your firm cut
            busy-season grind and redirect time to advisory.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex items-baseline font-numbers text-3xl font-extrabold text-foreground sm:text-4xl">
                  <NumberTicker value={stat.value} className="font-numbers" />
                  <span>{stat.suffix}</span>
                </div>
                <p className="mt-1.5 text-sm text-accent-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stacked fanned cards */}
        <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-70 blur-2xl"
            style={{
              background: "radial-gradient(45% 45% at 60% 50%, var(--accent-glow) 0%, transparent 70%)",
            }}
          />

          <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
            <defs>
              <pattern id="dot-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1.4" fill="var(--border)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-grid)" />
          </svg>

          <DisplayCards cards={painPointCards} />
        </div>
      </div>
    </section>
  );
}