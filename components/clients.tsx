"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"

export function Clients() {
  const clientLogos = [
    { name: "LG", image: "/clients/LG-Logo.png" },
    { name: "ASTRAL PIPE", image: "/clients/Astral_Pipes_Logo.jpg" },
    { name: "KELLOGG'S", image: "/clients/Kellogg's-Logo.svg.png" },
    { name: "IIFL", image: "/clients/IIFLFinance.webp" },
    { name: "Sugar Cosmetics", image: "/clients/SUGAR-Cosmetics-Logo.png" },
    { name: "Sentiss Pharma", image: "/clients/logo_black4.png" },
    { name: "Rosmerta Safety Solution", image: "/clients/rosmerta_hsrp_logo.png" },
  ]

  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 200 // scroll 200px every 2 seconds
        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth
        ) {
          // Reset to start if at end
          sliderRef.current.scrollLeft = 0
        }
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-700 border-amber-700 mb-4">
            Our Clients
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
            Trusted by 500+ Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From startups to established enterprises, we serve clients across various industries with our comprehensive
            tax and business solutions.
          </p>
        </div>

        {/* Auto-scrolling logo strip */}
        <div
          ref={sliderRef}
          className="overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-8 px-4 py-4 transition-all duration-300 ease-in-out"
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center border border-amber-100"
            >
              <img
                src={client.image}
                alt={client.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Join our growing family of satisfied clients and experience the Tax Arena difference.
          </p>
        </div> */}
      </div>
    </section>
  )
}
