"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden text-[#1B4332] p-2 transition-colors duration-300 hover:text-[#2D6A4F]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Left Navigation - Hidden on Mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#1B4332] hover:text-[#2D6A4F] font-medium text-sm uppercase tracking-wide transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#1B4332] hover:text-[#2D6A4F] font-medium text-sm uppercase tracking-wide transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("key-highlights")}
              className="text-[#1B4332] hover:text-[#2D6A4F] font-medium text-sm uppercase tracking-wide transition-colors duration-300"
            >
              Key Highlights
            </button>
            <button
              onClick={() => scrollToSection("site-map")}
              className="text-[#1B4332] hover:text-[#2D6A4F] font-medium text-sm uppercase tracking-wide transition-colors duration-300"
            >
              Site Map
            </button>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-mzukfX1oqdegfHzmUnfws89ILTgkPu.png"
                alt="Avon Hills Resort"
                width={100}
                height={100}
                priority
                className="h-[60px] w-auto object-contain lg:h-[80px]"
              />
            </Link>
          </div>

          {/* Right Navigation - Hidden on Mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-[#1B4332] hover:text-[#2D6A4F] font-medium text-sm uppercase tracking-wide transition-colors duration-300"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("resort-plan")}
              className="text-[#1B4332] hover:text-[#2D6A4F] font-medium text-sm uppercase tracking-wide transition-colors duration-300"
            >
              Resort Plan
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-[#1B4332] hover:text-[#2D6A4F] font-medium text-sm uppercase tracking-wide transition-colors duration-300"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#1B4332] hover:text-[#2D6A4F] font-medium text-sm uppercase tracking-wide transition-colors duration-300"
            >
              Contact
            </button>
            <a
              href="tel:+17065745656"
              className="flex items-center text-[#1B4332] hover:text-[#2D6A4F] transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">706-574-5656</span>
            </a>
          </nav>

          {/* Phone Icon for Mobile */}
          <a
            href="tel:+17065745656"
            className="lg:hidden text-[#1B4332] p-2 transition-colors duration-300 hover:text-[#2D6A4F]"
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300
          ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`
            fixed top-0 left-0 bottom-0 w-[280px] bg-white p-6 transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#1B4332]">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1B4332] hover:text-[#2D6A4F] transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-[#1B4332] hover:text-[#2D6A4F] font-medium text-lg transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-[#1B4332] hover:text-[#2D6A4F] font-medium text-lg transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("key-highlights")}
              className="text-left text-[#1B4332] hover:text-[#2D6A4F] font-medium text-lg transition-colors duration-300"
            >
              Key Highlights
            </button>
            <button
              onClick={() => scrollToSection("site-map")}
              className="text-left text-[#1B4332] hover:text-[#2D6A4F] font-medium text-lg transition-colors duration-300"
            >
              Site Map
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-left text-[#1B4332] hover:text-[#2D6A4F] font-medium text-lg transition-colors duration-300"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("resort-plan")}
              className="text-left text-[#1B4332] hover:text-[#2D6A4F] font-medium text-lg transition-colors duration-300"
            >
              Resort Plan
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-left text-[#1B4332] hover:text-[#2D6A4F] font-medium text-lg transition-colors duration-300"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-[#1B4332] hover:text-[#2D6A4F] font-medium text-lg transition-colors duration-300"
            >
              Contact
            </button>
          </nav>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
              href="tel:+17065745656"
              className="flex items-center text-[#1B4332] hover:text-[#2D6A4F] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5 mr-3" />
              <span className="font-medium">706-574-5656</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

