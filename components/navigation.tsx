"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { ShareButton } from "./share-button"

export function Navigation() {
  return (
    <nav className="fixed top-6 right-6 z-50 flex items-center gap-4">
      <ShareButton />
      <ThemeToggle />
    </nav>
  )
}
