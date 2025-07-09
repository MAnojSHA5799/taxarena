"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Appointment", href: "/appointment" },
    { name: "Contact", href: "/contact" },
  ]

  const serviceItems = [
    { name: "Accounting & Auditing Services", href: "/services/accounting-auditing-services" },
    { name: "Compliance & Finance Related Services", href: "/services/compliance-finance-related-services" },
    { name: "Legal Services", href: "/services/legal-services" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/taxarena-logo.jpeg"
              alt="Tax Arena Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-amber-900">Tax Arena</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
                Services <ChevronDown className="ml-1 h-8 w-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50 min-w-[280px]">
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/appointment">
              <Button className="bg-amber-600 hover:bg-amber-700">Book Appointment</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 font-semibold text-sm mt-4">Services</span>
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-gray-700 hover:text-amber-600 text-base transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link href="/appointment">
                  <Button className="bg-amber-600 hover:bg-amber-700 mt-4 w-full">Book Appointment</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
