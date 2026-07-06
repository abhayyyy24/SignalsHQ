"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Silk from "@/components/ui/Silk";

export default function CTA() {
  return (
    <section className="relative mx-6 my-20 overflow-hidden rounded-3xl sm:mx-12">
      {/* Silk fills the section fully — it's opaque, not a subtle overlay */}
      <div className="absolute inset-0">
        <Silk
          color="#7c6bc4"
          speed={2.5}
          scale={1}
          noiseIntensity={1.1}
          rotation={0.2}
        />
      </div>

      {/* Dark scrim on top so white text stays readable against the moving pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55" />

      <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center sm:py-32">
        <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to give your firm its edge back?
        </h2>
        <p className="mt-4 max-w-lg font-body text-white/75">
          Book a demo and see how SignalsHQ fits into your workflow — no
          migration headaches, no long onboarding.
        </p>
        <Link
          href="#book-demo"
          className="group mt-10 inline-flex items-center gap-1.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0a0a0f] transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,255,255,0.35)]"
        >
          Book a demo
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}