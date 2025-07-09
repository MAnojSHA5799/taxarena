import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Scale, FileSearch, Calculator, CreditCard } from "lucide-react"

export default function LegalServicesPage() {
  const services = [
    {
      icon: FileSearch,
      title: "Income Tax Scrutiny & Assessments",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Income Tax Scrutiny and Assessments involve a thorough examination of an individual's or business's tax return by tax authorities to ensure accuracy and compliance. This process may include a detailed review, questioning, and verification of financial documents to determine the correct taxable income and liabilities.",
      items: [
        { name: "Income Tax Scrutiny Assessment", price: "Contact for pricing" },
        { name: "Best Judgment Assessment", price: "Contact for pricing" },
        { name: "Reassessment Proceedings", price: "Contact for pricing" },
        { name: "Assessment Order Review", price: "Contact for pricing" },
        { name: "Tax Demand Notice Handling", price: "Contact for pricing" },
      ],
    },
    {
      icon: Scale,
      title: "VAT/Service Tax/GST Scrutiny & Assessments",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "VAT/Service Tax/GST Scrutiny & Assessments encompass the examination by tax authorities to verify the accuracy and compliance of a business's Value Added Tax (VAT), Service Tax, or Goods and Services Tax (GST) returns. It involves a detailed review of financial records and transactions to ensure adherence to tax regulations and proper payment of taxes.",
      items: [
        { name: "GST Scrutiny Assessment", price: "Contact for pricing" },
        { name: "VAT Assessment Proceedings", price: "Contact for pricing" },
        { name: "Service Tax Scrutiny", price: "Contact for pricing" },
        { name: "GST Audit Defense", price: "Contact for pricing" },
        { name: "Tax Notice Response", price: "Contact for pricing" },
      ],
    },
    {
      icon: Calculator,
      title: "Income Tax/GST Consultancy",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Income Tax/GST consultancy involves seeking professional advice to optimize tax planning, compliance, and reporting for individuals or businesses. Consultants provide expertise on income tax laws or GST regulations, helping clients navigate complex tax landscapes and make informed financial decisions.",
      items: [
        { name: "Tax Planning & Advisory", price: "Contact for pricing" },
        { name: "GST Compliance Consultancy", price: "Contact for pricing" },
        { name: "Income Tax Optimization", price: "Contact for pricing" },
        { name: "Tax Structure Planning", price: "Contact for pricing" },
        { name: "Regulatory Compliance Review", price: "Contact for pricing" },
      ],
    },
    {
      icon: CreditCard,
      title: "CIBIL Cases",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "T F Infra Consultancy Services offers expert guidance on Credit Information Bureau (India) Limited (CIBIL) matters in the civil domain. With a focus on credit information and compliance, our consultancy ensures thorough understanding and adherence to CIBIL standards. Trust T F Infra for comprehensive solutions, combining legal expertise and industry knowledge in navigating CIBIL-related aspects within the civil sector.",
      items: [
        { name: "CIBIL Score Improvement", price: "Contact for pricing" },
        { name: "Credit Report Dispute Resolution", price: "Contact for pricing" },
        { name: "CIBIL Error Correction", price: "Contact for pricing" },
        { name: "Credit Information Consultation", price: "Contact for pricing" },
        { name: "CIBIL Compliance Advisory", price: "Contact for pricing" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Scale className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Legal Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert legal services for tax scrutiny, assessments, consultancy, and CIBIL matters
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Specialized Legal Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional legal assistance for tax matters, assessments, and credit information services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    <div className="bg-amber-600 p-3 rounded-full">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Service Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>

                  {/* Service Items */}
                  <div className="space-y-4 mb-8">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start gap-3">
                        <span className="text-sm text-gray-700 flex-1 font-medium leading-relaxed">{item.name}</span>
                        <Badge variant="outline" className="text-amber-700 border-amber-700 text-xs font-semibold">
                          {item.price}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-amber-600 hover:bg-amber-700">Get Expert Help</Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
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

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Why Choose Our Legal Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert legal representation and consultancy for complex tax and financial matters
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Legal Team",
                description: "Experienced lawyers and tax consultants with proven track records.",
              },
              {
                title: "Comprehensive Support",
                description: "End-to-end assistance from notice to resolution.",
              },
              {
                title: "Strategic Approach",
                description: "Tailored strategies for each case and client requirement.",
              },
              {
                title: "Timely Resolution",
                description: "Quick and efficient handling of all legal proceedings.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-amber-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Legal Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Systematic approach to handle your legal matters efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Case Analysis", desc: "Thorough review of your case and documentation" },
              { step: "2", title: "Strategy Planning", desc: "Develop customized legal strategy for your case" },
              { step: "3", title: "Documentation", desc: "Prepare all necessary legal documents and responses" },
              { step: "4", title: "Representation", desc: "Expert representation before authorities" },
              { step: "5", title: "Resolution", desc: "Achieve favorable outcome and compliance" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-bold text-amber-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="bg-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Urgent Legal Assistance?</h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto text-lg">
            Received a tax notice or assessment order? Don't panic. Our expert legal team is here to help you navigate
            through complex legal procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
              Emergency Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent"
            >
              Call: +91 6203918465
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Get Professional Legal Support</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced legal team is ready to assist you with all your tax and financial legal matters. Contact us
            for expert guidance and representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Schedule Legal Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              Download Service Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
