"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Marquee } from "../../../components/ui/marquee";
import { cn } from "@/lib/utils";

const featured = [
  {
    quote:
      "SignalsHQ cut our review cycle almost in half. What used to take a full day of cross-checking now happens before our team even opens the file.",
    name: "Priya Nair",
    role: "Managing Partner, Nair & Associates",
  },
  {
    quote:
      "We onboarded 40 new clients this season without hiring. The client organizer alone paid for itself in the first month.",
    name: "David Chen",
    role: "Director of Operations, Chen Tax Group",
  },
];

const marqueeTestimonials = [
  {
    quote: "Finally a tool built by people who understand how a tax firm actually runs.",
    name: "Meera Iyer",
    role: "Senior CPA",
  },
  {
    quote: "The audit trail alone saved us during a client dispute last quarter.",
    name: "Ravi Kulkarni",
    role: "Founder, Kulkarni Tax Advisors",
  },
  {
    quote: "Support actually understands tax workflows, not just software.",
    name: "Sara Thomas",
    role: "Office Manager",
  },
  {
    quote: "Migration took a day. We expected weeks.",
    name: "James Okafor",
    role: "Partner, Okafor & Lee",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
          Testimonials
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Trusted by firms who can't afford mistakes
        </h2>
      </div>

      {/* Featured bento cards — animated in with framer-motion */}
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
        {featured.map((t, i) => (
          <motion.div
            key={t.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <Quote size={22} className="text-accent-light" />
            <p className="mt-4 font-body text-base leading-relaxed text-foreground">
              "{t.quote}"
            </p>
            <div className="mt-6">
              <p className="font-heading text-sm font-semibold text-foreground">
                {t.name}
              </p>
              <p className="mt-0.5 text-xs text-muted">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee row for the rest */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mt-10"
      >
        <Marquee pauseOnHover className="[--duration:32s]">
          {marqueeTestimonials.map((t) => (
            <div
              key={t.name}
              className={cn(
                "mx-3 w-80 shrink-0 rounded-2xl border border-border bg-surface p-6"
              )}
            >
              <p className="font-body text-sm leading-relaxed text-muted">
                "{t.quote}"
              </p>
              <div className="mt-4">
                <p className="font-heading text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Fade edges so cards don't hard-cut at the section boundary */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </motion.div>
    </section>
  );
}