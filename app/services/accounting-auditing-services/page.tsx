import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, PieChart, TrendingUp, BarChart3, FileCheck, Search, Eye, Building } from "lucide-react"

export default function AccountingAuditingServicesPage() {
  const services = [
    {
      icon: BarChart3,
      title: "Accounting & Bookkeeping Services",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Accounting & Bookkeeping Services involve the systematic recording, organizing, and analysis of financial transactions to ensure accurate financial reporting. These services help businesses maintain financial transparency, compliance, and informed decision-making by managing their financial records and statements.",
      items: [
        { name: "Daily Transaction Recording", price: "Contact for pricing" },
        { name: "Bank Reconciliation", price: "Contact for pricing" },
        { name: "Accounts Payable Management", price: "Contact for pricing" },
        { name: "Accounts Receivable Management", price: "Contact for pricing" },
        { name: "Monthly Financial Reports", price: "Contact for pricing" },
      ],
    },
    {
      icon: Search,
      title: "Tax Audit",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Tax audit is a comprehensive examination of an individual or business's financial records by tax authorities to verify compliance with tax laws and regulations. It aims to ensure accuracy in reported income, deductions, and other relevant financial information for tax assessment purposes.",
      items: [
        { name: "Income Tax Audit", price: "Contact for pricing" },
        { name: "Tax Compliance Review", price: "Contact for pricing" },
        { name: "Tax Assessment Support", price: "Contact for pricing" },
        { name: "Tax Documentation Review", price: "Contact for pricing" },
        { name: "Tax Audit Representation", price: "Contact for pricing" },
      ],
    },
    {
      icon: FileText,
      title: "GST Audit",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "GST audit involves a thorough examination of a business's Goods and Services Tax (GST) compliance, ensuring accurate reporting of sales, purchases, and input tax credits. It helps verify the correctness of GST returns, promoting transparency and adherence to tax regulations.",
      items: [
        { name: "GST Compliance Audit", price: "Contact for pricing" },
        { name: "Input Tax Credit Verification", price: "Contact for pricing" },
        { name: "GST Return Reconciliation", price: "Contact for pricing" },
        { name: "GST Documentation Review", price: "Contact for pricing" },
        { name: "GST Audit Representation", price: "Contact for pricing" },
      ],
    },
    {
      icon: Eye,
      title: "Internal Audit",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Internal audit is a systematic and independent assessment of an organization's processes, controls, and risk management to enhance effectiveness and efficiency. It provides valuable insights to management by evaluating internal systems, ensuring compliance, and improving overall governance.",
      items: [
        { name: "Process Evaluation", price: "Contact for pricing" },
        { name: "Risk Assessment", price: "Contact for pricing" },
        { name: "Control Testing", price: "Contact for pricing" },
        { name: "Compliance Review", price: "Contact for pricing" },
        { name: "Management Reporting", price: "Contact for pricing" },
      ],
    },
    {
      icon: TrendingUp,
      title: "Concurrent Audit",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Concurrent audit is a real-time examination of financial transactions and operations conducted by internal auditors to ensure accuracy, compliance, and effectiveness of controls. It helps organizations identify and rectify issues promptly, providing ongoing assurance about the integrity of their financial processes.",
      items: [
        { name: "Real-time Transaction Review", price: "Contact for pricing" },
        { name: "Continuous Monitoring", price: "Contact for pricing" },
        { name: "Control Effectiveness Testing", price: "Contact for pricing" },
        { name: "Immediate Issue Identification", price: "Contact for pricing" },
        { name: "Process Improvement Recommendations", price: "Contact for pricing" },
      ],
    },
    {
      icon: Building,
      title: "Company Audit/LLP Audit",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Company/LLP audit is the systematic review of a company's or Limited Liability Partnership's financial statements and operations by an independent auditor to ensure accuracy, compliance with accounting standards, and the fair presentation of financial health. It provides stakeholders, including shareholders and regulatory bodies, with assurance about the entity's financial integrity and adherence to legal requirements.",
      items: [
        { name: "Annual Financial Audit", price: "Contact for pricing" },
        { name: "Compliance Audit", price: "Contact for pricing" },
        { name: "Management Letter", price: "Contact for pricing" },
        { name: "Board Reporting", price: "Contact for pricing" },
        { name: "Regulatory Compliance Review", price: "Contact for pricing" },
      ],
    },
    {
      icon: FileCheck,
      title: "Statutory Audit",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Statutory audit is a mandatory examination of a company's financial statements and records by external auditors to ensure compliance with legal and regulatory requirements. It provides an independent and objective assessment of financial information, offering assurance to stakeholders and regulatory authorities.",
      items: [
        { name: "Financial Statement Audit", price: "Contact for pricing" },
        { name: "Legal Compliance Review", price: "Contact for pricing" },
        { name: "Auditor's Report", price: "Contact for pricing" },
        { name: "Regulatory Filing Support", price: "Contact for pricing" },
        { name: "Stakeholder Assurance", price: "Contact for pricing" },
      ],
    },
    {
      icon: PieChart,
      title: "Stock Audit",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Stock audit involves a detailed examination of a company's physical inventory to verify its accuracy, existence, and valuation. It ensures that the recorded stock levels match the actual physical stock on hand, preventing discrepancies and potential financial misstatements.",
      items: [
        { name: "Physical Stock Verification", price: "Contact for pricing" },
        { name: "Inventory Valuation", price: "Contact for pricing" },
        { name: "Stock Reconciliation", price: "Contact for pricing" },
        { name: "Discrepancy Analysis", price: "Contact for pricing" },
        { name: "Stock Management Review", price: "Contact for pricing" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Accounting & Auditing Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Professional accounting, auditing, and financial services to keep your business compliant and profitable
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Comprehensive Accounting & Auditing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert financial services designed to meet all your accounting, auditing, and compliance requirements
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
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

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

      {/* Audit Types Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Types of Audits We Perform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive audit services covering all aspects of your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Financial Audits",
                description: "Comprehensive review of financial statements and records",
                icon: "📊",
              },
              {
                title: "Compliance Audits",
                description: "Ensuring adherence to laws and regulations",
                icon: "✅",
              },
              {
                title: "Operational Audits",
                description: "Evaluating efficiency and effectiveness of operations",
                icon: "⚙️",
              },
              {
                title: "Risk Audits",
                description: "Identifying and assessing business risks",
                icon: "🛡️",
              },
            ].map((auditType, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{auditType.icon}</div>
                  <h3 className="font-bold text-amber-900 mb-3">{auditType.title}</h3>
                  <p className="text-gray-600 text-sm">{auditType.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Why Choose Our Accounting & Auditing Services?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Professionals",
                description: "Our team consists of qualified CAs, CMAs, and audit experts with extensive experience.",
              },
              {
                title: "Comprehensive Coverage",
                description: "From bookkeeping to complex audits, we handle all your financial needs.",
              },
              {
                title: "Timely & Accurate",
                description: "We ensure all audits and financial reports are completed accurately and on time.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-amber-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Audit Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Systematic approach ensuring thorough and accurate audit results
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Planning", desc: "Comprehensive audit planning and risk assessment" },
              { step: "2", title: "Fieldwork", desc: "Detailed examination of records and processes" },
              { step: "3", title: "Testing", desc: "Substantive testing and control evaluation" },
              { step: "4", title: "Analysis", desc: "Analysis of findings and identification of issues" },
              { step: "5", title: "Reporting", desc: "Comprehensive audit report with recommendations" },
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Ready to Get Professional Audit Services?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our certified professionals handle your accounting and
            auditing needs with precision and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Get Free Audit Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              Schedule Audit Planning
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
