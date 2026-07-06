import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-numbers",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SignalsHQ | Smart Tax Automation for Scaling CPA Firms",
  description: "AI-powered tax automation built for scaling CPA firms.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${plusJakarta.variable} ${montserrat.variable} font-body antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}