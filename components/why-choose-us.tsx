import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Users, Award, Headphones, Zap } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your financial data is protected with bank-level security and confidentiality.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast processing and timely delivery of all your tax and compliance requirements.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with extensive experience in taxation and business law.",
    },
    {
      icon: Award,
      title: "99% Accuracy",
      description: "Proven track record of accurate filings with minimal errors or rejections.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to address all your queries and concerns.",
    },
    {
      icon: Zap,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality or service standards.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-700 border-amber-700 mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Why Tax Arena is Your Best Choice</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We combine expertise, technology, and personalized service to deliver exceptional results for all your tax
            and business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <reason.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-amber-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-amber-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Ready to Experience the Difference?</h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who trust Tax Arena for their tax and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Get Started Today
              </button>
              <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
