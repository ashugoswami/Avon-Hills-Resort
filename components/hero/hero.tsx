"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Image from "next/image";
import img1 from "../../assets/Images/1.png";
import img2 from "../../assets/Images/2 (1).png";
import img3 from "../../assets/Images/3.png";
import { Button } from "@/components/ui/button";

const InquiryForm = lazy(() => import("./inquiry-form"));

const images = [
  img1,
  img2,
  img3,
  // "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide1.jpg-lUIYLzS5JNorCUYKviCehA5Qz7lwvh.jpeg",
  // "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide2.jpg-OVplOv9gwEHM9lgwjc1LG6GDJGJcGD.jpeg",
  // "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide3.jpg-ByeEySABzvRoYMjugOxfd7Sixxm9X6.jpeg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Avon Hills Resort - Slide ${index + 1}`}
            fill
            priority={index === 0}
            quality={85}
            sizes="100vw"
            className="object-cover transform scale-105 transition-transform duration-5000 ease-in-out"
            style={{
              transform:
                index === currentImageIndex ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Experience Luxury in Nature
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl">
          Discover Avon Hills Resort, where serenity meets luxury in the heart
          of Shivalik Hills.
        </p>
        <Button
          onClick={() => setIsInquiryFormOpen(true)}
          className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold py-2 px-6 rounded-full text-lg"
        >
          Inquiry
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Inquiry Form Pop-up */}
      {isInquiryFormOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <InquiryForm onClose={() => setIsInquiryFormOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
