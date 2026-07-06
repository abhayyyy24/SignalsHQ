"use client";

import { Lock, Radio, KeyRound, ShieldCheck, DatabaseBackup } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import DecryptedText from "../../../components/ui/DecryptedText";

const securityNodes = [
  {
    id: 1,
    title: "Encryption",
    date: "AES-256",
    content: "Every file is encrypted with AES-256 at rest and TLS 256-bit in transit — no exceptions.",
    category: "Core",
    icon: Lock,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Monitoring",
    date: "24/7",
    content: "Continuous intrusion detection with quarterly vulnerability scans and annual penetration tests.",
    category: "Core",
    icon: Radio,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 3,
    title: "Access Control",
    date: "MFA + RBAC",
    content: "Multi-factor authentication and role-based permissions down to the individual client file.",
    category: "Core",
    icon: KeyRound,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Compliance",
    date: "SOC 2 · GDPR",
    content: "Independently audited against SOC 2 Type II, with GDPR-aligned data handling practices.",
    category: "Core",
    icon: ShieldCheck,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 5,
    title: "Disaster Recovery",
    date: "RPO < 1hr",
    content: "Automated, geo-redundant backups with a recovery point objective under one hour.",
    category: "Resilience",
    icon: DatabaseBackup,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 80,
  },
];

export default function SecurityHero() {
  return (
    <section className="relative bg-background px-6 pt-24 text-center sm:pt-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Security & Compliance You Can Trust
        </h1>
        <p className="mt-5 text-base text-muted sm:text-lg">
          We safeguard your clients' most sensitive financial data with
          enterprise-grade security and rigorous compliance protocols.
        </p>
      </div>

      <RadialOrbitalTimeline timelineData={securityNodes} />
    </section>
  );
}