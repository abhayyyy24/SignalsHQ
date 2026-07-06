"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background pt-32 sm:pt-36">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Blue tint + dark scrim so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e]/80 via-background/85 to-background" />
      <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />

      {/* Content above the video */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-4 py-1.5 text-xs font-medium text-black">
          <Sparkles size={13} className="text-accent" />
          Trusted by 500+ scaling CPA firms
        </div>

        <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
          Every signal your firm needs,
          <br />
          before tax season needs it.
        </h1>

        <p className="mt-6 max-w-xl font-body text-base text-muted sm:text-lg">
          AI-powered tax automation that catches what matters, organizes
          client work, and scales with your firm — without adding headcount.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#book-demo"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-white/90"
          >
            Book a demo
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-surface"
          >
            See how it works
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-accent-light/90 to-transparent" />
    </section>
  );
}