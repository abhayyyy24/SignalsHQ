'use client';
import { Lock, Radio, KeyRound, FileCheck } from "lucide-react";
import { FeatureCard } from "../../../components/ui/Security-card";

const items = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "TLS 256-bit in transit, AES-256 at rest — every file, every time.",
  },
  {
    icon: Radio,
    title: "Continuous monitoring",
    description: "24/7 intrusion detection with quarterly scans and annual pen tests.",
  },
  {
    icon: KeyRound,
    title: "Access control",
    description: "Multi-factor authentication and role-based permissions on every account.",
  },
  {
    icon: FileCheck,
    title: "Audit-ready logging",
    description: "Every action timestamped and exportable for compliance review.",
  },
];

export default function SecurityGrid() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
          How we protect your data
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Security built into every layer
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2">
        {items.map((item) => (
          <FeatureCard key={item.title} feature={item} />
        ))}
      </div>
    </section>
  );
}