"use client"

import { Building2, Waves, Trees, Wind, Leaf, PartyPopper } from "lucide-react"

export default function ResortAmenitiesSection() {
  const amenities = [
    {
      icon: Building2,
      title: "Lavish Resort Clubhouse with fine dining and lounge",
    },
    {
      icon: Leaf,
      title: "Wellness and meditation zones for rejuvenation",
    },
    {
      icon: Waves,
      title: "Swimming pool for relaxation and leisure",
    },
    {
      icon: PartyPopper,
      title: "Dedicated event and wedding spaces",
    },
    {
      icon: Trees,
      title: "Forested surroundings with nature trails",
    },
    {
      icon: Wind,
      title: "Pollution-free environment with 50% open green spaces",
    },
  ]

  return (
    <section className="bg-[#1B4332] py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white text-center mb-16 tracking-wider">
            Resort Amenities:
          </h2>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {amenities.map((amenity, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                {/* Vertical Divider */}
                {index < amenities.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 h-16 -translate-y-1/2">
                    <div className="h-full w-px bg-white/20"></div>
                  </div>
                )}

                {/* Icon and Text */}
                <div className="flex flex-col items-center text-center text-white">
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <amenity.icon className="w-12 h-12 stroke-[1] text-white" aria-hidden="true" />
                  </div>
                  <p className="text-xs sm:text-sm font-light tracking-wide leading-relaxed mt-2">{amenity.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-white/80 text-center text-sm sm:text-base max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            A perfect blend of luxury, nature, and comfort, Avon Hills Resort offers an ideal escape from city life.
          </p>
        </div>
      </div>
    </section>
  )
}

