import Image from "next/image"

export default function MasterPlanSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="transition-transform duration-300 hover:scale-105">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/master-plan-eIACgqGMgd5Fle0dM5r6mAuCYQfDy1.png"
              alt="Avon Hills Resort Master Plan Layout"
              width={1200}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

