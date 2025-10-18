import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto max-w-2xl px-6 py-16">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Andrew</h1>
          <p className="text-muted-foreground leading-relaxed">Software Engineer · London, UK · Lloyds Banking Group</p>
        </section>

        {/* Social Links */}
        <section className="flex items-center gap-4">
          <a
            href="https://x.com/andrewje_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Follow me on X"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-je/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/andrew-je"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.tumblr.com/andrew-je"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Tumblr"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </section>

        {/* Projects Link */}
        <section>
          <Link href="/projects" className="inline-flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors underline">
            Projects & Posts →
          </Link>
        </section>

        {/* Static Images */}
        <section className="pt-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/jakarta.jpeg"
                alt="Jakarta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/scotland.jpeg"
                alt="Isle of Iona"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/toraja.jpeg"
                alt="Toraja"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
