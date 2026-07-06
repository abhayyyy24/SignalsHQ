import { Search, FolderOpen, Sparkles } from "lucide-react";
import { PricingGlass, type TierType } from "@/components/ui/pricing-glass";

const tiers: TierType[] = [
  {
    name: "Tax Assist",
    icon: Search,
    priceMonthly: "149",
    priceAnnual: "119",
    description: "AI-powered tax research and Q&A with IRS-cited answers, built for solo practitioners and small teams.",
    features: [
      "Instant tax research with direct IRS citations",
      "Federal & SALT coverage across all 50 states",
      "Court ruling references",
      "Context-aware answers",
      "Natural language queries",
      "Exportable memos",
    ],
  },
  {
    name: "Client Organizer",
    icon: FolderOpen,
    priceMonthly: "299",
    priceAnnual: "239",
    description: "Automated document intake and extraction for growing firms managing higher client volume.",
    isPopular: true,
    features: [
      "AI document intake; drag, drop, done",
      "K-1, 1099s, W-2 auto-extraction with 95%+ accuracy",
      "Automated binders",
      "360° client overview",
      "Smart categorization",
      "Audit-ready trail",
    ],
  },
  {
    name: "Client Review",
    icon: Sparkles,
    priceMonthly: "499",
    priceAnnual: "399",
    description: "Proactive advisory insights for scaling firms that need full visibility across every client.",
    features: [
      "Current-year category rollups",
      "Comprehensive schedule summaries",
      "Multi-entity support; 1040, 1065, 1120-S",
      "Auto-Generated Workpapers",
      "Anomaly alerts across client binder",
      "AI-drafted returns; 70% faster prep",
    ],
  },
];

export default function Pricing() {
  return (
    <PricingGlass
     
      title="Simple, transparent pricing."
      description="Choose the perfect plan for your firm. Switch to annual billing and save up to 20%."
      tiers={tiers}
    />
  );
}