"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { FlickeringGrid, useMediaQuery } from "../../../components/ui/footer-helper";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Use Cases", href: "/#use-cases" },
      { label: "Security", href: "/security" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Support", href: "/support" },
    ],
  },
];

export default function Footer() {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full border-t border-border pb-0">
      <div className="flex flex-col gap-y-10 p-10 md:flex-row md:items-start md:justify-between">
        <div className="mx-0 flex max-w-xs flex-col items-start justify-start gap-y-5">
  <Link href="/" className="relative h-8 w-32">
    <Image src="/logo.webp" alt="SignalsHQ" fill className="object-contain object-left" />
  </Link>
  <p className="font-body font-medium tracking-tight text-muted">
    AI-powered tax automation built for scaling CPA firms.
  </p>

  {/* SOC 2 badge */}
  <div className="relative h-14 w-14">
    <Image
      src="/soc.svg"
      alt="SOC 2 Compliant"
      fill
      className="object-contain"
    />
  </div>
</div>

        <div className="md:w-1/2">
          <div className="flex flex-col items-start justify-start gap-y-8 md:flex-row md:items-start md:justify-between lg:pl-10">
            {footerLinks.map((column) => (
              <ul key={column.title} className="flex flex-col gap-y-2">
                <li className="mb-2 font-heading text-sm font-semibold text-foreground">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.label}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted"
                  >
                    <Link href={link.href} className="transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                    <div className="flex size-4 translate-x-0 transform items-center justify-center rounded border border-border opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      <ChevronRight className="h-3.5 w-3.5 text-accent-light" />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-0 mt-16 flex items-center justify-between border-t border-border px-10 py-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} SignalsHQ. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
        </div>
      </div>

      <div className="relative z-0 mt-4 h-40 w-full md:h-56">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-background from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? "SignalsHQ" : "Every signal, before it matters"}
            fontSize={tablet ? 56 : 76}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#8b7dd8"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}