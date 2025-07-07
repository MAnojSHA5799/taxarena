import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Clients } from "@/components/clients"
import { Services } from "@/components/services"
import { Numbers } from "@/components/numbers"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Numbers />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  )
}
