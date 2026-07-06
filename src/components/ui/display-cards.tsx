"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  date: string;
}

function DisplayCard({
  className,
  icon: Icon,
  title,
  description,
  date,
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-border bg-surface/80 px-4 py-3 backdrop-blur-sm transition-all duration-700",
        "after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']",
        "hover:border-accent/40 hover:bg-surface",
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-muted">
          <Icon size={14} className="text-accent-light" />
        </span>
        <p className="text-base font-semibold text-foreground">{title}</p>
      </div>
      <p className="whitespace-normal text-sm leading-snug text-muted">
        {description}
      </p>
      <p className="text-xs text-muted/70">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const stackClasses = [
    "[grid-area:stack] hover:-translate-y-10 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-xl before:bg-background/50 before:opacity-100 before:outline-1 before:outline-border before:transition-opacity before:duration-700 grayscale-[100%] hover:grayscale-0 hover:before:opacity-0",
    "[grid-area:stack] translate-x-12 translate-y-8 hover:-translate-y-1 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-xl before:bg-background/50 before:opacity-100 before:outline-1 before:outline-border before:transition-opacity before:duration-700 grayscale-[100%] hover:grayscale-0 hover:before:opacity-0",
    "[grid-area:stack] translate-x-24 translate-y-16 hover:translate-y-6",
  ];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">
      {cards.map((card, index) => (
        <DisplayCard key={index} {...card} className={stackClasses[index]} />
      ))}
    </div>
  );
}