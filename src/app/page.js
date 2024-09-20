import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import LatestNewsSection from "@/components/LatestNewsSection"
import FeaturesSection from "@/components/FeaturesSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <LatestNewsSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}
