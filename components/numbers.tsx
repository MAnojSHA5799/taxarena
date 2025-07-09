"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, FileCheck, Award, Clock } from "lucide-react"
import CountUp from "react-countup"

export function Numbers() {
  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: FileCheck,
      number: 2500,
      suffix: "+",
      label: "Returns Filed",
      color: "text-green-600",
    },
    {
      icon: Award,
      number: 99,
      suffix: "%",
      label: "Accuracy Rate",
      color: "text-amber-600",
    },
    {
      icon: Clock,
      number: 5,
      suffix: "+",
      label: "Years Experience",
      color: "text-purple-600",
    },
  ]

  return (
    <section className="py-16 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Numbers Speak for Themselves</h2>
          <p className="text-amber-100 max-w-2xl mx-auto text-lg">
            Our track record demonstrates our commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-center">
              <CardContent className="pt-6">
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl font-bold mb-2">
                  <CountUp  end={stat.number} duration={2} />{stat.suffix}
                </div>
                <p className="text-amber-100">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
