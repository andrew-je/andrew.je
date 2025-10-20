'use client'

import React from 'react'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function ShareButton(): JSX.Element {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy URL: ', err)
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className="text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1"
      aria-label={isCopied ? 'Copied to clipboard' : 'Copy link to clipboard'}
      type="button"
    >
      {isCopied ? (
        <>
          <Check className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm">Copied!</span>
        </>
      ) : (
        <Copy className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  )
}
