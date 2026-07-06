"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, Variants } from "framer-motion";
import { Check, Search, FolderOpen, Sparkles, type LucideIcon } from "lucide-react";

const NOISE_PATTERN = 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")';

export type TierType = {
  name: string;
  icon: LucideIcon;
  priceMonthly: string;
  priceAnnual: string;
  description: string;
  isPopular?: boolean;
  features: string[];
};

export interface PricingGlassProps {
  title?: string;
  description?: string;
  tiers: TierType[];
  className?: string;
}

function PricingCard({ tier, isAnnual }: { tier: TierType; isAnnual: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const legoVariant: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 350, damping: 25 } },
  };

  const Icon = tier.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
            staggerChildren: 0.1,
            delayChildren: 0.15,
          },
        },
      }}
      onMouseMove={handleMouseMove}
      className={`group relative flex w-full flex-col overflow-hidden rounded-[32px] bg-surface backdrop-blur-3xl backdrop-saturate-200 backdrop-brightness-110 transition-all duration-500 ${
        tier.isPopular
          ? "border border-accent/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),inset_0_-1px_1px_rgba(255,255,255,0.02),0_32px_64px_-12px_rgba(0,0,0,0.6),0_0_80px_var(--accent-muted)] md:-translate-y-4"
          : "border border-border shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),0_32px_64px_-12px_rgba(0,0,0,0.6)]"
      }`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, var(--accent-muted), transparent)`,
        }}
      />

      {tier.isPopular && (
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[32px] p-px"
          style={{
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        >
          <div
            className="absolute -inset-full animate-[spin_4s_linear_infinite]"
            style={{ background: "conic-gradient(from 0deg, transparent 70%, var(--accent-light) 100%)" }}
          />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: NOISE_PATTERN }}
      />

      {tier.isPopular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl border-x border-b border-accent/20 bg-accent-muted px-4 py-1 text-xs font-medium text-accent-light shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex flex-1 flex-col p-8 md:p-10">
        <motion.div
          variants={legoVariant}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-muted"
        >
          <Icon size={20} className="text-accent-light" />
        </motion.div>

        <motion.h3 variants={legoVariant} className="mt-5 font-heading text-xl font-semibold tracking-wide text-foreground">
          {tier.name}
        </motion.h3>

        <motion.div variants={legoVariant} className="mb-2 mt-4 flex items-baseline gap-1">
          <span className="text-2xl font-medium tracking-tight text-muted">$</span>
          <div className="flex h-[60px] items-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={isAnnual ? tier.priceAnnual : tier.priceMonthly}
                initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="block text-[60px] font-bold leading-none tracking-tighter text-foreground"
              >
                {isAnnual ? tier.priceAnnual : tier.priceMonthly}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="ml-1 text-lg font-medium text-muted">/mo</span>
        </motion.div>

        <motion.p variants={legoVariant} className="mb-8 min-h-[40px] text-sm leading-relaxed text-muted">
          {tier.description}
        </motion.p>

        <motion.div variants={legoVariant} className="mb-8 h-px w-full bg-border" />

        <div className="mb-10 flex flex-1 flex-col gap-4">
          {tier.features.map((feat: string, i: number) => (
            <motion.div key={i} variants={legoVariant} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-surface-hover shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <Check className="h-3 w-3 text-accent-light" strokeWidth={3} />
              </div>
              <span className="text-[14px] font-medium leading-tight text-muted">{feat}</span>
            </motion.div>
          ))}
        </div>

        <motion.div variants={legoVariant} className="pointer-events-auto">
          <button
            className={`w-full rounded-[16px] py-4 text-[15px] font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 ${
              tier.isPopular
                ? "bg-accent-light text-accent-foreground hover:scale-[1.02] hover:shadow-[0_0_24px_2px_var(--accent-glow)]"
                : "border border-border bg-surface-hover text-foreground hover:scale-[1.02] hover:bg-border"
            }`}
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PricingGlass({
  title = "Simple, transparent pricing.",
  description = "Choose the perfect plan for your firm. Switch to annual billing and save up to 20%.",
  tiers,
  className,
}: PricingGlassProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const legoVariant: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 350, damping: 25 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden gap-16 bg-background p-4 ${className || ""}`}
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--accent-muted)" }}
        animate={{ scale: isAnnual ? 1.05 : 1, opacity: isAnnual ? 0.5 : 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-20 flex w-full flex-col items-center gap-8">
        <div className="space-y-4 px-4 text-center">
          <motion.h2 variants={legoVariant} className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </motion.h2>
          <motion.p variants={legoVariant} className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
            {description}
          </motion.p>
        </div>

        <motion.div
          variants={legoVariant}
          className="relative flex items-center rounded-full border border-border bg-surface p-1.5 shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]"
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`relative z-10 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 md:px-8 ${
              !isAnnual ? "text-foreground" : "text-muted hover:text-foreground/80"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`relative z-10 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 md:px-8 ${
              isAnnual ? "text-foreground" : "text-muted hover:text-foreground/80"
            }`}
          >
            Annually
            <span className="absolute -top-3 -right-3 rounded-full bg-accent-light px-2 py-1 text-[10px] font-bold tracking-wider text-accent-foreground shadow-lg md:-right-6">
              SAVE 20%
            </span>
          </button>

          <motion.div
            className="absolute bottom-1.5 left-1.5 top-1.5 w-[calc(50%-6px)] rounded-full border border-accent/20 bg-surface-hover shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            animate={{ x: isAnnual ? "100%" : "0%" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </motion.div>
      </div>

      <div className="relative z-20 grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
        {tiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} />
        ))}
      </div>
    </motion.div>
  );
}