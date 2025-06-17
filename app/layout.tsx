import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import "./globals.css"
import type React from "react"
import WhatsAppButton from "@/components/whatsapp-button"
import ErrorBoundary from "@/lib/error-boundary"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://avonhillsresort.com"),
  title: {
    default: "Avon Hills Resort | Forest Living Holiday Homes",
    template: "%s | Avon Hills Resort",
  },
  description:
    "Experience nature's luxury at Avon Hills Resort. Discover our forest living holiday homes and immerse yourself in the beauty of nature.",
  keywords: [
    "Avon Hills Resort",
    "holiday homes",
    "forest living",
    "luxury resort",
    "Rajaji National Park",
    "Dehradun resort",
  ],
  authors: [{ name: "Avon Hills Resort" }],
  creator: "Avon Hills Resort",
  publisher: "Avon Hills Resort",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fav-8tVFrqJtQBylEjF5nPOkT2388lSkkL.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avonhillsresort.com",
    title: "Avon Hills Resort | Forest Living Holiday Homes",
    description:
      "Experience nature's luxury at Avon Hills Resort. Discover our forest living holiday homes and immerse yourself in the beauty of nature.",
    siteName: "Avon Hills Resort",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-bpAiQM27spYJUsQQsgWoNBBbTC6ZmK.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avon Hills Resort | Forest Living Holiday Homes",
    description:
      "Experience nature's luxury at Avon Hills Resort. Discover our forest living holiday homes and immerse yourself in the beauty of nature.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-bpAiQM27spYJUsQQsgWoNBBbTC6ZmK.png"],
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  )
}

