import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google"

import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Khanov Bekzod - ITZONE UZ",
  description: "Created by ITZONE UZ",
  generator: "ITZONE UZ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode


  
}>) {
  return (
    <html lang="uz">
      <body className={`font-sans antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
