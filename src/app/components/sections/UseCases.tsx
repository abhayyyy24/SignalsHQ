"use client";

import { Sparkles, FolderKanban, ClipboardCheck } from "lucide-react";
import { UseCaseCard } from "@/components/ui/use-case-card";
import {Ripple} from "@/components/ui/ripple";
import { HexagonPattern } from "@/components/ui/hexagon-pattern";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function UseCases() {
  return (
    <section id="use-cases" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
          Use cases
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Built around how your firm actually works
        </h2>
        <p className="mt-4 font-body text-muted">
          Three workflows, one system — no bolted-on tools required.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-3">
        <UseCaseCard
          index={0}
          pattern={
            <div className="absolute inset-0 flex items-center justify-center">
              <Ripple
                mainCircleSize={80}
                mainCircleOpacity={0.35}
                numCircles={5}
                className="!mask-none"
              />
            </div>
          }
          icon={<Sparkles size={18} className="text-accent-light" />}
          title="Tax Assist"
          description="Surfaces deductions, discrepancies, and missing filings automatically — before your team has to go looking for them."
        />

        <UseCaseCard
          index={1}
          pattern={
            <HexagonPattern
              radius={24}
              gap={2}
              className="fill-transparent stroke-accent-light/25 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)]"
            />
          }
          icon={<FolderKanban size={18} className="text-accent-light" />}
          title="Client Organizer"
          description="Every client's documents, deadlines, and status in one place."
        />

        <UseCaseCard
          index={2}
          pattern={
            <InteractiveGridPattern
              width={32}
              height={32}
              squares={[24, 16]}
              className="border-none [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)]"
              squaresClassName="stroke-border fill-transparent hover:fill-accent-muted transition-colors duration-200"
            />
          }
          icon={<ClipboardCheck size={18} className="text-accent-light" />}
          title="Real-time client review"
          description="Review and approve filings collaboratively, with every change tracked as it happens."
        />
      </div>
    </section>
  );
}