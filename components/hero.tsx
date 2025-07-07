"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calculator, FileText, Shield } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Professional Tax Solutions",
      subtitle: "Expert GST, Income Tax & Business Services",
      description:
        "Get comprehensive tax solutions from certified professionals. We handle your compliance so you can focus on growing your business.",
      icon: Calculator,
      bg: "bg-gradient-to-r from-amber-900/90 to-amber-700/90",
      bgImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Complete Business Solutions",
      subtitle: "From Registration to Compliance",
      description:
        "One-stop solution for all your business needs including company formation, registrations, and ongoing compliance requirements.",
      icon: FileText,
      bg: "bg-gradient-to-r from-amber-800/90 to-amber-600/90",
      bgImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Trusted & Secure",
      subtitle: "Your Financial Data is Safe",
      description:
        "With 99% accuracy rate and secure processes, we ensure your financial information is handled with utmost care and confidentiality.",
      icon: Shield,
      bg: "bg-gradient-to-r from-amber-700/90 to-amber-500/90",
      bgImage:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div
            className="h-full flex items-center text-white relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className={`absolute inset-0 ${slide.bg}`}></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <slide.icon className="h-16 w-16 mx-auto mb-6 animate-bounce" />
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
                <h2 className="text-xl md:text-2xl mb-6 text-amber-100">{slide.subtitle}</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-amber-50">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
