import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import "./globals.css"

const siteUrl = "https://andrew.je";

export const metadata: Metadata = {
  title: "Andrew",
  description: "andrew.je",
    robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "andrew.je",
    description: "andrew.je",
    url: "https://andrew.je",
    siteName: "andrew.je",
    images: [
      {
        url: `${siteUrl}/assets/site-cover.png`,
        width: 1200,
        height: 630,
        alt: "andrew.je",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "andrew.je",
    description: "andrew.je",
    images: [`${siteUrl}/assets/site-cover.png`],
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
