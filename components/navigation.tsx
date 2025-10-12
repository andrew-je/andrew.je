"use client"

import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <nav className="fixed top-6 right-6 z-50">
      <ThemeToggle />
    </nav>
  )
}
