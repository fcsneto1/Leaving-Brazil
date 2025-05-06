import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Leaving Brazil",
  description:
    "Realize seu sonho de morar no exterior",
    generator: '@netocgi'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Add GoogleTagManager in the <head> section with your GTM ID */}
        <GoogleTagManager gtmId="GTM-PLKD26KG" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
