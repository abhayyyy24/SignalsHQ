"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function UseCaseCard({
  pattern,
  icon,
  title,
  description,
  index,
}: {
  pattern: ReactNode;
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
    >
      {/* Pattern zone */}
      <div className="relative h-64 w-full overflow-hidden bg-background sm:h-72">
        {pattern}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>

      {/* Content zone */}
      <div className="p-7">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted">
          {icon}
        </div>
        <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </motion.div>
  );
}