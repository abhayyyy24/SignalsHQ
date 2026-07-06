import Hero from "./components/sections/Hero";
import ProductShowcase from "./components/sections/ProductShowcase";
import Features from "./components/sections/Features"
import UseCases from "./components/sections/UseCases"
import Testimonials from "./components/sections/Testimonials";
import StatsShowcase from "./components/sections/Stats";
import Resources from "./components/sections/Resources";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProductShowcase />
      <Features/>
      <StatsShowcase/>
      <UseCases/>
      <Testimonials/>
      <Resources/>
    </main>
  );
}