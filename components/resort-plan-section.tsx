export default function ResortPlanSection() {
  const threehundredFeatures = [
    "Spacious, well-designed chalets with premium finishes",
    "3 & 4-side open layouts for maximum ventilation and natural light",
    "Private garden with lush greenery",
    "Large floor-to-ceiling glass windows for panoramic views",
    "Dedicated barbecue area for outdoor gatherings",
    "Cozy fireplace with a large sit-out area",
    "Ample open spaces for a peaceful retreat",
    "Gated and secured community with 24/7 surveillance",
    "Power backup for uninterrupted comfort",
  ]

  const fivehundredFeatures = [
    "Larger, luxury chalets with expansive living spaces",
    "3 & 4-side open designs with premium architecture",
    "Private garden with landscaped greenery and planters",
    "Spacious terrace and large balconies for breathtaking views",
    "Lavish interiors with high-end finishes",
    "Dedicated barbecue area and outdoor seating",
    "World-class landscaping with water bodies and ponds",
    "Swimming pool access within the community",
    "Exclusive clubhouse with premium amenities",
    "Gated community with security and power backup",
  ]

  return (
    <section className="bg-[#FDF6F0] py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Avon Hills Resort</h2>
            <p className="text-lg sm:text-xl text-gray-700">Resort Plan & Amenities</p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 300-Yard Chalets */}
            <div className="relative border-2 border-gray-200 rounded-3xl p-6 sm:p-8 transition-transform duration-300 hover:scale-105">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="bg-[#1B4332] text-white px-4 sm:px-6 py-2 rounded-full whitespace-nowrap text-sm sm:text-base">
                  300-Yard Chalets
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mt-6">
                {threehundredFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="text-center text-gray-700 text-sm sm:text-base transition-transform duration-300 hover:translate-x-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* 500-Yard Chalets */}
            <div className="relative border-2 border-gray-200 rounded-3xl p-6 sm:p-8 transition-transform duration-300 hover:scale-105">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="bg-[#1B4332] text-white px-4 sm:px-6 py-2 rounded-full whitespace-nowrap text-sm sm:text-base">
                  500-Yard Chalets
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mt-6">
                {fivehundredFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="text-center text-gray-700 text-sm sm:text-base transition-transform duration-300 hover:translate-x-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

