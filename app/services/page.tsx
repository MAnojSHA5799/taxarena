import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Calculator, Building, Shield, Users, Briefcase } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: "GST Services",
      items: [
        { name: "GST Registration (Proprietary Business)", price: "₹1,000/-" },
        { name: "GST Return Normal (Up to 100 Invoices)", price: "₹1,000/- Monthly" },
        { name: "GST Return Normal (100-250 Invoices)", price: "₹1,500/- Monthly" },
        { name: "GST Return Normal (Above 250 Invoices)", price: "₹2,000/- Monthly" },
        { name: "GST Composition Scheme", price: "₹1,000/- Quarterly" },
        { name: "GST Nil Return", price: "₹400/- Monthly/Quarterly" },
      ],
    },
    {
      icon: Calculator,
      title: "Income Tax Services",
      items: [
        { name: "ITR 1", price: "₹500/- (Annual)" },
        { name: "ITR 3", price: "₹1,000/- (Annual)" },
        { name: "ITR 4", price: "₹500/- (Annual)" },
        { name: "TDS Return", price: "Contact for pricing" },
        { name: "Tax Audit & GST Audit", price: "Contact for pricing" },
      ],
    },
    {
      icon: Shield,
      title: "Digital & Registration Services",
      items: [
        { name: "Digital Signature Class - 2", price: "₹900/-" },
        { name: "Shop Registration", price: "₹2,000/-" },
        { name: "FSSAI Registration", price: "Contact for pricing" },
        { name: "Trademark Registration", price: "Contact for pricing" },
      ],
    },
    {
      icon: Building,
      title: "Business Formation",
      items: [
        { name: "Company Formation", price: "Contact for pricing" },
        { name: "EPFO Registration", price: "Contact for pricing" },
        { name: "ESIC Registration", price: "Contact for pricing" },
        { name: "ROC Filing", price: "Contact for pricing" },
      ],
    },
    {
      icon: Briefcase,
      title: "Financial Services",
      items: [
        { name: "Preparation of Financial Statement", price: "Contact for pricing" },
        { name: "Projected Balance Sheet", price: "Contact for pricing" },
        { name: "Cost Audit & Financial Audit", price: "Contact for pricing" },
        { name: "Consultancy Services", price: "Contact for pricing" },
      ],
    },
    {
      icon: Users,
      title: "Other Services",
      items: [
        { name: "E-filing Tender", price: "Contact for pricing" },
        { name: "Tax Deductions", price: "Contact for pricing" },
        { name: "Complete Business Solution", price: "Contact for pricing" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive tax and business solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-8 w-8 text-amber-600" />
                    <CardTitle className="text-amber-900">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start gap-2">
                        <span className="text-sm text-gray-600 flex-1">{item.name}</span>
                        <Badge variant="outline" className="text-amber-700 border-amber-700 text-xs">
                          {item.price}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700">Get Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us for personalized tax and business solutions tailored
            to your specific requirements.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
