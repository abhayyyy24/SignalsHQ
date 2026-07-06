import Navbar from "../components/layout/Navbar";
import SecurityHero from "../../app/components/sections/SecurityHero";
//import ComplianceBadges from "../../app/components/sections/ComplianceBadges";
import SecurityGrid from "../../app/components/sections/SecurityGrid";
import SecurityFaq from "../../app/components/sections/SecurityFaq";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SecurityHero />
      
      <SecurityGrid />
      <SecurityFaq />
      <CTA />
      <Footer />
    </main>
  );
}