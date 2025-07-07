import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    "GST Registration",
    "Income Tax Filing",
    "Company Formation",
    "Digital Signature",
    "Tax Consultancy",
    "Business Registration",
  ]

  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/images/taxarena-logo.jpeg"
                alt="Tax Arena Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">Tax Arena</span>
            </div>
            <p className="text-amber-100 mb-6">
              Your trusted partner for comprehensive tax and business solutions. We provide professional services with
              accuracy and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-amber-100 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-amber-100">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-300 mt-1" />
                <div>
                  <p className="text-amber-100">taxarenaonline@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-300 mt-1" />
                <div>
                  <p className="text-amber-100">+91 6203918465</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-300 mt-1" />
                <div>
                  <p className="text-amber-100 text-sm mb-2">
                    <strong>Head Office:</strong>
                    <br />
                    H-107, near Ananda Dairy, H Block, Sector 63, Noida, Uttar Pradesh 201301
                  </p>
                  <p className="text-amber-100 text-sm">
                    <strong>Branch Office:</strong>
                    <br />
                    1st Floor, 90 Feet Road, Kankarbagh Malahi Pakri, Near Metro Pillar No 25, Patna, Bihar - 800020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-100 text-sm">© 2024 Tax Arena. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-amber-100 hover:text-white text-sm transition-colors duration-200">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
