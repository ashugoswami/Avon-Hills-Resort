import Image from "next/image";
import { Circle } from "lucide-react";

export default function KeyHighlightsSection() {
  const communityFeatures = [
    "Community with no apartments",
    "200, 300 & 500-yard resort plots for spacious living",
    "50% open areas for a serene and natural environment",
    "Gated and secured community with 24/7 surveillance",
    "Power backup for uninterrupted comfort",
    "World-class landscaping with lush greenery",
    "Scenic water bodies and ponds within the resort",
    "Lavish clubhouse with premium amenities",
    "Swimming pool for relaxation and leisure",
    "Surrounded by forested lands for a peaceful retreat",
  ];

  const resortFeatures = [
    "3 & 4-side open for maximum ventilation and views",
    "Garden",
    "Ample open spaces for a tranquil living experience",
    "Fireplace with a large sit-out area",
    "Dedicated barbecue area for outdoor gatherings",
    "Lavish greenery and planters surrounding",
    "Large floor-to-ceiling glass windows for natural light and panoramic views",
  ];

  return (
    <section className="bg-[#1B4332] py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-white/60 text-2xl">~</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
                Key Highlights
              </h2>
              <span className="text-white/60 text-2xl">~</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl text-white/90">
              What Sets Avon Hills Resort Apart?
            </h3>
          </div>

          {/* Community Features */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16 md:mb-20">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center bg-white rounded-full pl-4 pr-6 py-2 transition-transform duration-300 hover:scale-105">
                <span className="text-[#1B4332] font-medium">
                  Community Features:
                </span>
                <div className="w-4 h-4 ml-2 rounded-full bg-[#1B4332]"></div>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {communityFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white transition-transform duration-300 hover:translate-x-2"
                  >
                    <Circle className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-base sm:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex justify-center mt-8 sm:mt-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/right1-uyCAReBniDxOQX5k1TTaMCGbfllfIv.png"
                alt="Scenic view through ornate mirror frame"
                width={500}
                height={700}
                className="w-auto h-auto max-w-full transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Resort Features */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="relative flex justify-center order-2 md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/right2-1EIubOYYbQ64Iia45QW5sca9gUIa8M.png"
                alt="Resort amenities view through ornate mirror frame"
                width={500}
                height={700}
                className="w-auto h-auto max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <div className="inline-flex items-center bg-white rounded-full pl-4 pr-6 py-2 transition-transform duration-300 hover:scale-105">
                <span className="text-[#1B4332] font-medium">Your Resort</span>
                <div className="w-4 h-4 ml-2 rounded-full bg-[#1B4332]"></div>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {resortFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white transition-transform duration-300 hover:translate-x-2"
                  >
                    <Circle className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-base sm:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
