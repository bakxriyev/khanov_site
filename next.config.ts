import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone", // agar serverda PM2 yoki Nginx bilan ishlatayotgan bo‘lsangiz
  reactStrictMode: true,
  images: {
    unoptimized: true, // <img> ishlatganingiz uchun Next image optimizatsiyasi kerak emas
  },
}

export default nextConfig
