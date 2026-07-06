"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Resource {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const resources: Resource[] = [
  {
    id: "resource-1",
    title: "The 2026 CPA Firm Automation Playbook",
    description:
      "A practical guide to identifying which parts of your tax workflow are worth automating first — and which aren't.",
    image: "/1.png",
    href: "/resources/automation-playbook",
  },
  {
    id: "resource-2",
    title: "State Nexus Rules, Explained Simply",
    description:
      "A plain-language breakdown of multi-state nexus triggers your team can reference mid-review, not just at year-end.",
    image: "/2.png",
    href: "/resources/nexus-rules",
  },
  {
    id: "resource-3",
    title: "How Firms Scale Without Adding Headcount",
    description:
      "Three real workflows from growing firms that took on more clients without a proportional hiring increase.",
    image: "/3.png",
    href: "/resources/scaling-without-headcount",
  },
  {
    id: "resource-4",
    title: "A Firm's Guide to Client Data Security",
    description:
      "What SOC 2, encryption, and access control actually mean for a CPA firm — and how to explain it to clients.",
    image: "/4.png",
    href: "/resources/client-data-security",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Resources() {
  return (
    <section id="resources" className="bg-background py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <div className="lg:max-w-md">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
            Resources
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Guides built for how firms actually work
          </h2>
          <p className="mt-4 text-muted lg:text-lg">
            Straightforward reads on automation, compliance, and scaling —
            written for CPAs, not marketers.
          </p>
          <Link
            href="/resources"
            className="group mt-8 inline-flex items-center text-sm font-semibold text-foreground md:text-base"
          >
            View all resources
            <ArrowRight className="ml-2 size-4 text-accent-light transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <Link
                href={resource.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-8 md:px-8 md:py-10">
                  <h3 className="mb-3 font-heading text-lg font-semibold text-foreground md:text-xl">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted md:text-base">
                    {resource.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}