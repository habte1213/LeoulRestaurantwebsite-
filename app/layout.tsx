import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeRegistry from "./components/layout/ThemeRegistry"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leoul Bar &  Restaurant - Fine Dining Experience",
  description: "Welcome to LEOUL Bar &  Restaurant, where culinary excellence meets elegant atmosphere",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}

