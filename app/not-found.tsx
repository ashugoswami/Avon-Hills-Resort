import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-4">Could not find requested resource</p>
        <Button asChild className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

