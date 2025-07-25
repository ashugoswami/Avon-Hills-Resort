import Image from "next/image";

export default function FeaturedSection() {
  return (
    <section className="bg-[#FDF6F0] py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#1B4332] text-base sm:text-lg mb-2 sm:mb-4">
            Avon Hills Presents
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6">
            Luxury Ressort Spaces
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="text-lg sm:text-xl">200 Yards</span>
            <span className="text-lg sm:text-xl">|</span>
            <span className="text-lg sm:text-xl">300 Yards</span>
            <span className="text-lg sm:text-xl">|</span>
            <span className="text-lg sm:text-xl">500 Yards</span>
            <span className="bg-[#2D2D2D] text-white px-3 py-1 rounded-full text-xs sm:text-sm mt-2 sm:mt-0">
              Luxury Ressort
            </span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div>
            <div className="relative h-[550px] sm:h-[580px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serenity-UnT9djyslCnlVeINA34Lzf0MGIAaQ0.png"
                alt="Woman enjoying mountain view"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div className="relative h-[550px] sm:h-[580px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mountain-f6RPeLxcFgmMETKG9FKxoFQxCsMA6o.png"
                alt="Woman enjoying mountain view"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div className="relative h-[550px] sm:h-[580px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/choose-zdUs9KZIWEUP9rWWbL4sgoOfxwmXV7.png"
                alt="Woman enjoying mountain view"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
