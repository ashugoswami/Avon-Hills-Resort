import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add security headers
  const response = NextResponse.next()

  // HSTS
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")

  // XSS Protection
  response.headers.set("X-XSS-Protection", "1; mode=block")

  // Content Security Policy
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:;",
  )

  // Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff")

  // Referrer Policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Frame Options
  response.headers.set("X-Frame-Options", "DENY")

  return response
}

export const config = {
  matcher: "/:path*",
}

