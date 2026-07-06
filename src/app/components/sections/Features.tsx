"use client";

import { cn } from "@/lib/utils";
import {
  Sparkles,
  FolderKanban,
  ClipboardCheck,
  ShieldCheck,
  Workflow,
  FileScan,
  History,
  Headset,
} from "lucide-react";
import type { ReactNode } from "react";

const features = [
  {
    title: "AI-powered tax assist",
    description:
      "Flags deductions, discrepancies, and missing filings before your team has to go looking for them.",
    icon: <Sparkles size={22} />,
  },
  {
    title: "Client organizer",
    description:
      "Every client's documents, deadlines, and status in one place — no more scattered spreadsheets.",
    icon: <FolderKanban size={22} />,
  },
  {
    title: "Real-time client review",
    description:
      "Review and approve filings collaboratively, with changes tracked as they happen.",
    icon: <ClipboardCheck size={22} />,
  },
  {
    title: "Bank-grade security",
    description:
      "SOC 2 aligned infrastructure and encryption at rest — built for firms handling sensitive financial data.",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Seamless integrations",
    description:
      "Connects with the tools your firm already runs on — no migration, no disruption.",
    icon: <Workflow size={22} />,
  },
  {
    title: "Instant document parsing",
    description:
      "Upload a return or statement and get structured, searchable data back in seconds.",
    icon: <FileScan size={22} />,
  },
  {
    title: "Audit-ready trail",
    description:
      "Every action is logged automatically, so you're never scrambling to reconstruct a timeline.",
    icon: <History size={22} />,
  },
  {
    title: "Dedicated CPA support",
    description:
      "Real support from people who understand tax workflows, not a generic help desk.",
    icon: <Headset size={22} />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
          Features
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Everything your firm needs, built in
        </h2>
        <p className="mt-4 font-body text-muted">
          No add-ons, no bolt-on tools — just the workflow a scaling CPA firm
          actually needs.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function Feature({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 lg:border-r lg:border-border",
        (index === 0 || index === 4) && "lg:border-l lg:border-border",
        index < 4 && "border-b border-border"
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-surface to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-surface to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}

      <div className="relative z-10 mb-4 px-10 text-muted transition-colors duration-200 group-hover/feature:text-accent-light">
        {icon}
      </div>

      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-border transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-accent" />
        <span className="inline-block text-foreground transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </div>

      <p className="relative z-10 max-w-xs px-10 text-sm text-muted">
        {description}
      </p>
    </div>
  );
}