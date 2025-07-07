import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Calculator, Building, Shield, Users, Briefcase } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "GST Services",
      description: "Complete GST solutions from registration to returns",
      features: ["GST Registration", "Monthly Returns", "Composition Scheme", "Nil Returns"],
      price: "Starting from ₹400/-",
    },
    {
      icon: Calculator,
      title: "Income Tax",
      description: "Professional income tax filing and planning",
      features: ["ITR Filing", "Tax Planning", "TDS Returns", "Tax Audit"],
      price: "Starting from ₹500/-",
    },
    {
      icon: Shield,
      title: "Digital Services",
      description: "Digital signature and online registrations",
      features: ["Digital Signature", "Shop Registration", "FSSAI Registration", "Trademark"],
      price: "Starting from ₹900/-",
    },
    {
      icon: Building,
      title: "Business Formation",
      description: "Complete business setup and compliance",
      features: ["Company Formation", "EPFO Registration", "ESIC Registration", "ROC Filing"],
      price: "Contact for pricing",
    },
    {
      icon: Briefcase,
      title: "Financial Services",
      description: "Comprehensive financial and audit services",
      features: ["Financial Statements", "Balance Sheet", "Cost Audit", "Financial Audit"],
      price: "Contact for pricing",
    },
    {
      icon: Users,
      title: "Consultancy",
      description: "Expert business and tax consultancy",
      features: ["Tax Consultancy", "Business Advisory", "Compliance Support", "Strategic Planning"],
      price: "Contact for pricing",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-700 border-amber-700 mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Services We Offer</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive tax and business solutions designed to meet all your compliance and growth requirements under
            one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="h-8 w-8 text-amber-600" />
                  <CardTitle className="text-amber-900">{service.title}</CardTitle>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-amber-700 border-amber-700">
                    {service.price}
                  </Badge>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
