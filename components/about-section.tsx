import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Birds SVG */}

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16 sm:mb-24 md:mb-32">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <div className="relative">
              {/* Decorative Line */}
              <div className="hidden md:block absolute -left-16 top-4">
                <div className="w-12 h-[2px] bg-black"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
                  About Us
                </h2>
                <h3 className="text-lg sm:text-xl text-gray-700">
                  Avon Hills Resort
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With a legacy of delivering secure and beautiful living
                  spaces, we specialize in premium real estate projects tailored
                  for second homes, vacation getaways, or smart investments. Our
                  commitment lies in offering properties that blend nature,
                  comfort, and profitability seamlessly.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative mt-8 sm:mt-0">
              <div className="overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-8SF248HzLWbCtXHHFgiw2KWQcmfyGy.png"
                  alt="Woman photographing mountain views at Avon Hills Resort"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mountain Range Image */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <div className="relative h-24 sm:h-32 md:h-40">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layer-4-copy-aVDNnhmarzNz8i62T2ykO8g9DYFtPh.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
