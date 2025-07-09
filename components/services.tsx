import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Calculator, Building, Shield, Users, Briefcase } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "GST Services",
      description: "Complete GST solutions from registration to returns",
      features: ["GST Registration", "Monthly Returns", "Composition Scheme", "Nil Returns"],
      price: "Starting from ₹400/-",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Calculator,
      title: "Income Tax",
      description: "Professional income tax filing and planning",
      features: ["ITR Filing", "Tax Planning", "TDS Returns", "Tax Audit"],
      price: "Starting from ₹500/-",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Shield,
      title: "Digital Services",
      description: "Digital signature and online registrations",
      features: ["Digital Signature", "Shop Registration", "FSSAI Registration", "Trademark"],
      price: "Starting from ₹900/-",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Building,
      title: "Business Formation",
      description: "Complete business setup and compliance",
      features: ["Company Formation", "EPFO Registration", "ESIC Registration", "ROC Filing"],
      price: "Contact for pricing",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Briefcase,
      title: "Financial Services",
      description: "Comprehensive financial and audit services",
      features: ["Financial Statements", "Balance Sheet", "Cost Audit", "Financial Audit"],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Users,
      title: "Consultancy",
      description: "Expert business and tax consultancy",
      features: ["Tax Consultancy", "Business Advisory", "Compliance Support", "Strategic Planning"],
      price: "Contact for pricing",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-amber-600 p-2 rounded-full">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{service.title}</h3>
                </div>
              </div>

              <CardHeader className="pb-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="col-span-full flex justify-center">
            <Link href="/services" passHref>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
