"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#fdf6ed] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-bpAiQM27spYJUsQQsgWoNBBbTC6ZmK.png"
              alt="Avon Hills Resort Logo"
              width={120}
              height={120}
              className="mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110"
            />
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-sm">
              Experience luxury living in the heart of nature at Avon Hills
              Ressort. Our premium spaces blend comfort, sustainability, and
              breathtaking views.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/avonhillsressort/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Visit our Facebook page"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/avon_hills_ressort/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Visit our Instagram page"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="icon"
                aria-label="Twitter"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B4332]">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-600 hover:text-[#2D6A4F] transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-600 hover:text-[#2D6A4F] transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("amenities")}
                  className="text-gray-600 hover:text-[#2D6A4F] transition-colors duration-300"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-600 hover:text-[#2D6A4F] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B4332]">
              Our Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                {/* <span className="text-[#1B4332] mr-2">📍</span> */}
                <span className="text-[#1B4332] mr-2 font-semibold">
                  Website:
                </span>
                <span className="text-gray-600">avonhillsressort.in</span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                {/* <span className="text-[#1B4332] mr-2">📞</span> */}
                <span className="text-[#1B4332] mr-2 font-semibold">
                  Phone no:
                </span>
                <span className="text-gray-600">
                  +91 7599 731 055 /+91 7599 575 955
                </span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                {/* <span className="text-[#1B4332] mr-2">✉️</span> */}
                <span className="text-[#1B4332] mr-2 font-semibold">
                  Email:
                </span>
                <span className="text-gray-600">
                  avonhillsressort@gmail.com
                </span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-2">
                {/* <span className="text-[#1B4332] mr-2">✉️</span> */}
                <span className="text-[#1B4332] mr-2 font-semibold">
                  Address:
                </span>
                <span className="text-gray-600">
                  Shivalik Hills, Badshahi Bagh, Near Hydel Colony, Saharanpur
                  Uttar Pradesh 247122
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B4332]">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest offers and news.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B4332] transition-all duration-300"
                required
              />
              <Button
                type="submit"
                className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-gray-200" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            © {new Date().getFullYear()} Avon Hills Ressort. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
