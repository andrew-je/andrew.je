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
