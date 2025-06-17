import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avon Hills Resort",
    short_name: "Avon Hills",
    description: "Experience luxury living in the heart of nature at Avon Hills Resort",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1B4332",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

