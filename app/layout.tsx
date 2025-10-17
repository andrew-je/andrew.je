import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Andrew",
  description: "Personal website of Andrew, Software Engineer at Lloyds Banking Group",
  generator: "v0.app",
    robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="andrew-portfolio-theme">
          <Suspense fallback={null}>
            <Navigation />
          </Suspense>
          <main className="pt-16">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
