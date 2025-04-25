import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { MarketSection } from "@/components/market-section"
import { DemoVideo } from "@/components/demo-video"
import { SignupForm } from "@/components/signup-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <HowItWorks />
      <MarketSection />
      <DemoVideo />
      <SignupForm />
      <Footer />
    </main>
  )
}
