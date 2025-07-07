"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, FileCheck, Award, Clock } from "lucide-react"

export function Numbers() {
  const [counts, setCounts] = useState({
    clients: 0,
    returns: 0,
    accuracy: 0,
    experience: 0,
  })

  const finalCounts = {
    clients: 500,
    returns: 2500,
    accuracy: 99,
    experience: 5,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const timers = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts]
      const increment = finalValue / steps

      return setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          [key]: Math.min(prev[key as keyof typeof prev] + increment, finalValue),
        }))
      }, stepDuration)
    })

    setTimeout(() => {
      timers.forEach((timer) => clearInterval(timer))
      setCounts(finalCounts)
    }, duration)

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  const stats = [
    {
      icon: Users,
      number: Math.floor(counts.clients),
      suffix: "+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: FileCheck,
      number: Math.floor(counts.returns),
      suffix: "+",
      label: "Returns Filed",
      color: "text-green-600",
    },
    {
      icon: Award,
      number: Math.floor(counts.accuracy),
      suffix: "%",
      label: "Accuracy Rate",
      color: "text-amber-600",
    },
    {
      icon: Clock,
      number: Math.floor(counts.experience),
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
                  {stat.number}
                  {stat.suffix}
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
