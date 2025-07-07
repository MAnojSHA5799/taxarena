import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Target } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified tax professionals with years of experience",
    },
    {
      icon: Award,
      title: "99% Accuracy",
      description: "Proven track record of accurate tax filings",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast and efficient service delivery",
    },
    {
      icon: Target,
      title: "Client Focused",
      description: "Personalized solutions for every client",
    },
  ]

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-700 border-amber-700 mb-4">
            About Tax Arena
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Your Trusted Tax Partner</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Tax Arena is your one-stop solution for all tax and business compliance needs. With our team of certified
            professionals, we provide accurate, timely, and cost-effective services to individuals and businesses across
            India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-amber-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            We believe in building long-term relationships with our clients by delivering exceptional service and
            maintaining the highest standards of professionalism.
          </p>
        </div>
      </div>
    </section>
  )
}
