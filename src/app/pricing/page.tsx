'use client';

import Navbar from "./../components/layout/Navbar";
import Pricing from "./../components/sections/Pricing";
import CTA from "./../components/sections/CTA";
import Footer from "../components/layout/Footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Pricing />
    </main>
  );
}