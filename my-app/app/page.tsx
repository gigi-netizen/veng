"use client"

import { Hero } from "./sections/hero"
import { EarningsSidebar } from "./sections/earnings-sidebar"
import { QuickStart } from "./sections/quick-start"
import { Testimonials } from "./sections/testimonials"
import { EarningsCalculator } from "./sections/earnings-calculator"
import { Footer } from "./sections/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Fixed Earnings Sidebar - Desktop Only */}
      <EarningsSidebar />

      {/* Main Content */}
      <div className="lg:ml-80">
        <Hero />
        <QuickStart />
        <Testimonials />
        <EarningsCalculator />
        <Footer />
      </div>
    </main>
  )
}