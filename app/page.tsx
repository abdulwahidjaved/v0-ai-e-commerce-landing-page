import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
