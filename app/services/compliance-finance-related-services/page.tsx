import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, FileCheck, Building, Users, CreditCard, Banknote } from "lucide-react"

export default function ComplianceFinanceServicesPage() {
  const services = [
    {
      icon: Building,
      title: "Company/LLP Annual Compliance",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Stock audit involves a detailed examination of a company's physical inventory to verify its accuracy, existence, and valuation. It ensures that the recorded stock levels match the actual physical stock on hand, preventing discrepancies and potential financial misstatements.",
      items: [
        { name: "Annual Stock Audit", price: "Contact for pricing" },
        { name: "Company Annual Compliance", price: "Contact for pricing" },
        { name: "LLP Annual Filing", price: "Contact for pricing" },
        { name: "Board Resolutions & Minutes", price: "Contact for pricing" },
        { name: "Statutory Compliance Review", price: "Contact for pricing" },
      ],
    },
    {
      icon: FileCheck,
      title: "GST Return",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "GST return is a periodic filing submitted by businesses to tax authorities, detailing their sales, purchases, and the applicable Goods and Services Tax (GST). It serves as a crucial document for tax compliance, providing a comprehensive overview of financial transactions and ensuring accurate calculation and payment of GST liabilities.",
      items: [
        { name: "Monthly GST Returns (GSTR-1)", price: "₹1,000/- Monthly" },
        { name: "Monthly GST Returns (GSTR-3B)", price: "₹1,000/- Monthly" },
        { name: "Annual GST Return (GSTR-9)", price: "Contact for pricing" },
        { name: "GST Reconciliation", price: "Contact for pricing" },
        { name: "Input Tax Credit Management", price: "Contact for pricing" },
      ],
    },
    {
      icon: CreditCard,
      title: "Income Tax Return",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Income Tax Return (ITR) is a document filed annually by individuals and businesses with tax authorities, declaring their income, deductions, and tax liabilities. It is a crucial compliance measure, ensuring accurate reporting and payment of income taxes according to the applicable tax laws.",
      items: [
        { name: "ITR-1 (Salary Income)", price: "₹500/- Annual" },
        { name: "ITR-3 (Business Income)", price: "₹1,000/- Annual" },
        { name: "ITR-4 (Presumptive Business)", price: "₹500/- Annual" },
        { name: "ITR-5 (Firms & LLP)", price: "Contact for pricing" },
        { name: "ITR-6 (Companies)", price: "Contact for pricing" },
      ],
    },
    {
      icon: Shield,
      title: "FSSAI Return",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "FSSAI return involves the submission of periodic reports by food businesses to the Food Safety and Standards Authority of India (FSSAI), detailing their activities, compliance with food safety regulations, and the safety standards maintained in their operations. It ensures accountability and adherence to food safety guidelines, promoting consumer health and well-being.",
      items: [
        { name: "FSSAI License Application", price: "Contact for pricing" },
        { name: "Annual FSSAI Return Filing", price: "Contact for pricing" },
        { name: "FSSAI Renewal Services", price: "Contact for pricing" },
        { name: "Food Safety Compliance Audit", price: "Contact for pricing" },
        { name: "FSSAI Amendment Services", price: "Contact for pricing" },
      ],
    },
    {
      icon: Banknote,
      title: "TDS-TCS Return",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "TDS (Tax Deducted at Source) and TCS (Tax Collected at Source) return is a regular filing by businesses to report tax deductions or collections made on various transactions. It ensures compliance with tax regulations, providing a transparent record of tax withheld or collected on behalf of the government.",
      items: [
        { name: "Quarterly TDS Return Filing", price: "Contact for pricing" },
        { name: "TCS Return Filing", price: "Contact for pricing" },
        { name: "TDS Certificate Generation", price: "Contact for pricing" },
        { name: "TDS Reconciliation", price: "Contact for pricing" },
        { name: "TDS Compliance Review", price: "Contact for pricing" },
      ],
    },
    {
      icon: Users,
      title: "EPF/ESIC Return",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "EPF (Employees' Provident Fund) and ESIC (Employees' State Insurance Corporation) return is a periodic filing by employers to report employee contributions, ensure compliance with social security schemes, and facilitate the smooth functioning of employee benefit programs. It plays a vital role in maintaining transparency and legal adherence in the management of employee welfare funds.",
      items: [
        { name: "Monthly EPF Return Filing", price: "Contact for pricing" },
        { name: "Monthly ESIC Return Filing", price: "Contact for pricing" },
        { name: "Annual EPF Return (Form 5)", price: "Contact for pricing" },
        { name: "EPF/ESIC Registration", price: "Contact for pricing" },
        { name: "Employee Welfare Compliance", price: "Contact for pricing" },
      ],
    },
    {
      icon: FileCheck,
      title: "Project Report Preparation",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Project report preparation involves creating a comprehensive document that outlines the objectives, scope, methodology, and financial aspects of a proposed project. It serves as a roadmap for stakeholders, providing insights into the project's feasibility, potential challenges, and anticipated outcomes.",
      items: [
        { name: "Detailed Project Report (DPR)", price: "Contact for pricing" },
        { name: "Feasibility Study Report", price: "Contact for pricing" },
        { name: "Financial Projections", price: "Contact for pricing" },
        { name: "Market Analysis Report", price: "Contact for pricing" },
        { name: "Loan Application Support", price: "Contact for pricing" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Compliance & Finance Related Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive compliance and financial regulatory services to keep your business legally compliant
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Compliance & Finance Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert compliance services ensuring your business meets all regulatory requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
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

                <CardContent className="p-6">
                  {/* Service Description */}
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  {/* Service Items */}
                  <div className="space-y-3 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start gap-2">
                        <span className="text-sm text-gray-700 flex-1 font-medium">{item.name}</span>
                        <Badge variant="outline" className="text-amber-700 border-amber-700 text-xs font-semibold">
                          {item.price}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-sm">Get Quote</Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50 text-sm bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Benefits of Proper Compliance</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Legal Protection",
                description: "Avoid penalties and legal issues with proper compliance.",
              },
              {
                title: "Employee Welfare",
                description: "Ensure proper employee benefits and social security.",
              },
              {
                title: "Business Credibility",
                description: "Build trust with stakeholders through compliance.",
              },
              {
                title: "Operational Efficiency",
                description: "Streamlined processes and better business operations.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-amber-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Ensure Your Business Compliance Today</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't risk penalties and legal issues. Let our experts handle your compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Get Compliance Audit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
