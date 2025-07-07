import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Tax Arena</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner for comprehensive tax and business solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Tax Arena was founded with a simple mission: to make tax compliance and business solutions accessible,
                affordable, and stress-free for individuals and businesses across India.
              </p>
              <p className="text-gray-600 mb-4">
                With years of experience in taxation, accounting, and business consulting, our team of certified
                professionals is dedicated to providing accurate, timely, and cost-effective services to our clients.
              </p>
              <p className="text-gray-600">
                We believe in building long-term relationships with our clients by delivering exceptional service and
                maintaining the highest standards of professionalism and integrity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-amber-900">500+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-amber-900">99%</h3>
                  <p className="text-gray-600">Accuracy Rate</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-amber-900">5+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-amber-900">24/7</h3>
                  <p className="text-gray-600">Support</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide comprehensive, reliable, and affordable tax and business solutions that empower our clients
                  to focus on growing their businesses while we handle their compliance requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become India's most trusted and preferred partner for tax and business solutions, known for our
                  expertise, integrity, and commitment to client success.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Integrity", desc: "We maintain the highest ethical standards" },
                { title: "Excellence", desc: "We strive for perfection in everything we do" },
                { title: "Innovation", desc: "We embrace technology and modern solutions" },
                { title: "Client Focus", desc: "Your success is our primary goal" },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <Badge variant="outline" className="text-amber-700 border-amber-700 mb-3 text-lg px-4 py-2">
                    {value.title}
                  </Badge>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
