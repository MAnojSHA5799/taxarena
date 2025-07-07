import { Badge } from "@/components/ui/badge"

export function Clients() {
  const clients = [
    "ABC Enterprises",
    "XYZ Corporation",
    "Tech Solutions Ltd",
    "Global Traders",
    "Smart Business Co",
    "Digital Ventures",
    "Prime Industries",
    "Elite Services",
    "Modern Solutions",
    "Future Tech",
    "Innovative Systems",
    "Professional Services",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-700 border-amber-700 mb-4">
            Our Clients
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Trusted by 500+ Businesses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From startups to established enterprises, we serve clients across various industries with our comprehensive
            tax and business solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-amber-100"
            >
              <div className="h-16 w-16 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xl">
                  {client
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800">{client}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Join our growing family of satisfied clients and experience the Tax Arena difference.
          </p>
        </div>
      </div>
    </section>
  )
}
