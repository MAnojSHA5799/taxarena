import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Calculator,
  Building,
  Shield,
  Users,
  Briefcase,
  Building2,
  HandHeart,
  UserCheck,
  Home,
  Truck,
  Award,
  Store,
  Factory,
  Leaf,
  Flame,
  ShoppingCart,
  HardHat,
  CopyrightIcon as Trademark,
  FileSignature,
  User,
  Banknote,
  CreditCard,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: "GST Services",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: [
        { name: "E-filing Tender", price: "Contact for pricing" },
        { name: "Tax Deductions", price: "Contact for pricing" },
        { name: "Complete Business Solution", price: "Contact for pricing" },
      ],
    },
    {
      icon: Building2,
      title: "LLP Registration",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "LLP registration, or Limited Liability Partnership registration, is the legal process through which a business structure is formally established, offering its partners limited liability protection while combining elements of a partnership and a corporation.",
      items: [
        { name: "LLP Registration", price: "Contact for pricing" },
        { name: "LLP Agreement Drafting", price: "Contact for pricing" },
        { name: "LLP Compliance", price: "Contact for pricing" },
      ],
    },
    {
      icon: HandHeart,
      title: "Cooperative Society Registration",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Cooperative Society registration involves the formal establishment of a cooperative entity where individuals voluntarily come together to collectively meet common economic, social, and cultural needs.",
      items: [
        { name: "Cooperative Society Registration", price: "Contact for pricing" },
        { name: "Bylaws Preparation", price: "Contact for pricing" },
        { name: "Annual Compliance", price: "Contact for pricing" },
      ],
    },
    {
      icon: UserCheck,
      title: "EPF/ESIC Registration",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "EPF/ESIC registration involves the mandatory enrollment of employers and eligible employees under the Employees' Provident Fund and Employees' State Insurance Corporation schemes in India.",
      items: [
        { name: "EPF Registration", price: "Contact for pricing" },
        { name: "ESIC Registration", price: "Contact for pricing" },
        { name: "Monthly Returns", price: "Contact for pricing" },
      ],
    },
    {
      icon: Home,
      title: "RERA Registration",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "RERA Agent and Project registration ensures transparency, accountability, and ethical practices in the real estate sector, safeguarding the interests of both agents and property buyers.",
      items: [
        { name: "RERA Agent Registration", price: "Contact for pricing" },
        { name: "RERA Project Registration", price: "Contact for pricing" },
        { name: "RERA Compliance", price: "Contact for pricing" },
      ],
    },
    {
      icon: Truck,
      title: "Import-Export Code",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Import-Export Code (IEC) registration is a mandatory process for businesses engaged in international trade, providing a unique identification number issued by the government.",
      items: [
        { name: "IEC Registration", price: "Contact for pricing" },
        { name: "IEC Modification", price: "Contact for pricing" },
        { name: "Export Documentation", price: "Contact for pricing" },
      ],
    },
    {
      icon: Award,
      title: "ISO Certification",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "ISO certification is a globally recognized quality management standard awarded to organizations that meet specified criteria, demonstrating their commitment to maintaining high standards.",
      items: [
        { name: "ISO 9001 Certification", price: "Contact for pricing" },
        { name: "ISO 14001 Certification", price: "Contact for pricing" },
        { name: "ISO 45001 Certification", price: "Contact for pricing" },
      ],
    },
    {
      icon: Store,
      title: "Shop & Establishment License",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Shop & Establishment License is a mandatory permit issued by local authorities to regulate and monitor businesses, ensuring compliance with labor and working conditions laws.",
      items: [
        { name: "Shop License", price: "Contact for pricing" },
        { name: "Establishment License", price: "Contact for pricing" },
        { name: "License Renewal", price: "Contact for pricing" },
      ],
    },
    {
      icon: Factory,
      title: "Factory & Labour License",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Factory and Labour License is a legal authorization granted by government authorities to employers allowing them to operate factories while ensuring compliance with labor laws.",
      items: [
        { name: "Factory License", price: "Contact for pricing" },
        { name: "Labour License", price: "Contact for pricing" },
        { name: "Contract Labour License", price: "Contact for pricing" },
      ],
    },
    {
      icon: Leaf,
      title: "Environmental Licenses",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Environmental licenses including Pollution License and CGWA registration ensure compliance with pollution control norms and environmental regulations.",
      items: [
        { name: "Pollution License", price: "Contact for pricing" },
        { name: "CGWA Registration", price: "Contact for pricing" },
        { name: "Environmental Clearance", price: "Contact for pricing" },
      ],
    },
    {
      icon: Flame,
      title: "Safety & Security Licenses",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Safety and security licenses including Fire License and PSARA License ensure compliance with safety regulations and security agency operations.",
      items: [
        { name: "Fire License", price: "Contact for pricing" },
        { name: "PSARA License", price: "Contact for pricing" },
        { name: "BIS/ISI License", price: "Contact for pricing" },
      ],
    },
    {
      icon: ShoppingCart,
      title: "Trade & Professional Licenses",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Various trade and professional licenses including Trade License, Professional Tax Registration, and specialized industry licenses.",
      items: [
        { name: "Trade License", price: "Contact for pricing" },
        { name: "Professional Tax Registration", price: "Contact for pricing" },
        { name: "Drug License", price: "Contact for pricing" },
        { name: "FSSAI License", price: "Contact for pricing" },
      ],
    },
    {
      icon: HardHat,
      title: "Construction & Labour",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Construction and labour related registrations including BOCW License and Principal Employer registration for construction projects.",
      items: [
        { name: "BOCW License", price: "Contact for pricing" },
        { name: "Principal Employer Registration", price: "Contact for pricing" },
        { name: "SIPB Registration", price: "Contact for pricing" },
      ],
    },
    {
      icon: Trademark,
      title: "Intellectual Property",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Intellectual property services including trademark registration and logo designing to protect and enhance your brand identity.",
      items: [
        { name: "Trademark Registration", price: "Contact for pricing" },
        { name: "Logo Designing", price: "Contact for pricing" },
        { name: "Brand Protection", price: "Contact for pricing" },
      ],
    },
    {
      icon: FileSignature,
      title: "Digital Services",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Digital signature services facilitating secure and legally recognized electronic transactions with compliance to digital communication standards.",
      items: [
        { name: "Digital Signature Class 2", price: "₹900/-" },
        { name: "Digital Signature Class 3", price: "Contact for pricing" },
        { name: "Digital Certificate Renewal", price: "Contact for pricing" },
      ],
    },
    {
      icon: User,
      title: "Individual Business Setup",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Individual business setup services including sole proprietorship registration and other individual business structures.",
      items: [
        { name: "Sole Proprietorship Registration", price: "Contact for pricing" },
        { name: "Individual Business Setup", price: "Contact for pricing" },
        { name: "Business Compliance", price: "Contact for pricing" },
      ],
    },
    {
      icon: Banknote,
      title: "Financial Company Setup",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Non-Banking Financial Company incorporation with expert guidance through regulatory procedures ensuring compliance with financial regulations.",
      items: [
        { name: "NBFC Incorporation", price: "Contact for pricing" },
        { name: "NBFC License", price: "Contact for pricing" },
        { name: "Financial Compliance", price: "Contact for pricing" },
      ],
    },
    {
      icon: CreditCard,
      title: "PAN/TAN Services",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "PAN/TAN services streamlining the process of obtaining Permanent Account Numbers and Tax Deduction and Collection Account Numbers.",
      items: [
        { name: "PAN Card Application", price: "Contact for pricing" },
        { name: "TAN Registration", price: "Contact for pricing" },
        { name: "PAN/TAN Corrections", price: "Contact for pricing" },
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
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute  inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
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
                  {service.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  )}

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

      {/* Stats Section */}
      <section className="bg-amber-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-amber-200">Services Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-amber-200">Service Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-amber-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-amber-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient process to get your business compliant
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Free initial consultation to understand your needs" },
              { step: "2", title: "Documentation", desc: "We help you prepare all required documents" },
              { step: "3", title: "Application", desc: "We handle the entire application process" },
              { step: "4", title: "Completion", desc: "Get your licenses and certificates delivered" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-bold text-amber-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Contact Us Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
