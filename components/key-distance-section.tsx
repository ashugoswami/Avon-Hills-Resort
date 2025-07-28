import Image from "next/image";
import { MapPin } from "lucide-react";
import keyimg from "../assets/Images/key distance.png";
import Link from "next/link";

export default function KeyDistanceSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-2 sm:mb-4">
                  Key Distance
                </h2>
                <p className="text-lg sm:text-xl text-gray-700">
                  From Avon Hills Ressort
                </p>
              </div>

              <div className="inline-block">
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  className="text-[#1B4332] hover:text-[#2D6A4F] underline underline-offset-4 transition-colors duration-300"
                >
                  View Google Map Location
                </Link>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-4 transition-transform duration-300 hover:translate-x-2">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-gray-800">
                    3 Hr Drive from Akshardham Expressway Delhi NCR
                  </p>
                </div>

                <div className="flex gap-4 transition-transform duration-300 hover:translate-x-2">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-gray-800">
                    Located at an elevation of 12 Acre which makes it a perfect
                    Summer & Winter Destination
                  </p>
                </div>

                <div className="flex gap-4 transition-transform duration-300 hover:translate-x-2">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-gray-800">
                    Within 60 mins driving distance from a number of lakes and
                    key tourist destinations like Rishikesh, Chakrata, Dehradun,
                    Hathnikund, Mussoorie, Paonta Sahib, Rajaji National Park,
                    etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 sm:mt-0">
              <div className="overflow-hidden">
                <Image
                  // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/map-yKXJDQoo0xwDbnXnWbQFUtOOVa15vY.png"
                  src={keyimg}
                  style={{ borderRadius: "50px" }}
                  alt="Aerial view of Avon Hills Resort layout"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
