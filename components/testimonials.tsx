"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Enterprises",
      rating: 5,
      text: "Tax Arena has been handling our GST returns for over 2 years. Their accuracy and timely service is commendable. Highly recommended for all tax-related services.",
    },
    {
      name: "Priya Sharma",
      company: "Tech Solutions Ltd",
      rating: 5,
      text: "Excellent service for company formation and compliance. The team is very professional and guided us through every step. Great value for money.",
    },
    {
      name: "Amit Patel",
      company: "Global Traders",
      rating: 5,
      text: "I've been using Tax Arena for my income tax returns and GST filing. They are always responsive and ensure everything is filed on time. Very satisfied with their service.",
    },
    {
      name: "Sunita Gupta",
      company: "Smart Business Co",
      rating: 5,
      text: "Professional team with deep knowledge of tax laws. They helped us save significant amount in taxes through proper planning. Excellent consultancy services.",
    },
    {
      name: "Vikash Singh",
      company: "Digital Ventures",
      rating: 5,
      text: "Quick and efficient service. Got my digital signature and shop registration done without any hassle. The pricing is very competitive too.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-700 border-amber-700 mb-4">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-8 pb-8 px-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-600 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-amber-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-500">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-amber-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
