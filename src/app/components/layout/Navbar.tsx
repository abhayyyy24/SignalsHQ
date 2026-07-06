"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Security", href: "/security" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        animate={{
          maxWidth: scrolled ? "60rem" : "80rem",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
           "flex w-full items-center justify-between rounded-[28px] pl-5 pr-3 py-3 lg:pl-7 lg:pr-3.5",
          "transition-colors duration-300",
          scrolled
            ? "border border-border bg-background/80 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-lg"
            : "border border-transparent bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="relative h-8 w-32 shrink-0" aria-label="Home">
          <Image
            src="/logo.webp"
            alt="Logo"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop nav links — centered */}
        <ul
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className="relative z-10 block px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
              {hovered === link.href && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 rounded-full bg-surface"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <div className="hidden lg:block">
  <Link
    href="#book-demo"
    className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-white/90"
  >
    Book a demo
    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
  </Link>
</div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-4 right-4 top-[calc(100%+8px)] max-w-4xl overflow-hidden rounded-3xl border border-border bg-background/95 shadow-xl backdrop-blur-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <Link
                href="#book-demo"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
              >
                Book a demo
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}