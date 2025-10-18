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
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.643c3.63-1.313 4.512-4.996 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.407l1.155 3.337c-.436.636-2.4 1.374-4.156 1.538-.401.042-.803.07-1.202.093z"/>
            </svg>
          </a>
        </section>

        {/* Projects Link */}
        <section>
          <Link href="/projects" className="inline-flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors underline">
            View Notes →
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
