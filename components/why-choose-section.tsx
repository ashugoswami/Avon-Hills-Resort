import Image from "next/image";
import whyimg from "../assets/Images/why choose avon.png";
import { Compass } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Exclusive Ressort Plots",
      description: "Offering 200, 300 & 500-yard luxury ressort spaces",
    },
    {
      title: "Scenic Location",
      description: "Nestled in Shivalik Hills with breathtaking views",
    },
    {
      title: "Luxury Clubhouse",
      description:
        "Featuring fine dining, a lounge, wellness spa, and recreational activities",
    },
    {
      title: "Grand Wedding & Event Spaces",
      description:
        "Host destination weddings & corporate events in a dream setting",
    },
    {
      title: "Pollution-Free Living",
      description:
        "Escape the high AQI of city life and breathe fresh mountain air",
    },
    {
      title: "Ideal for Investment & Holiday Homes",
      description: "Own a piece of paradise in the mountains",
    },
  ];

  return (
    <section className="bg-[#FDF6F0] py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="overflow-hidden">
                <Image
                  // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/choose-pWLXrFEyYsmMF0Vhr2OdIv1ten8Z4c.png"
                  src={whyimg}
                  style={{ borderRadius: "50px" }}
                  alt="Mountain view and branding of Avon Hills Resort"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8">
                Why Choose Avon Hills Ressort?
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Compass className="w-5 h-5 text-[#1B4332]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-[#1B4332] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
