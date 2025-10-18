import Link from "next/link"

const projects = [
  {
    title: "Hello World",
    year: "2025",
    slug: "hello-world",
    tag: "Post"
  },
  {
    title: "andrew.je (New)",
    year: "2025",
    url: "http://andrew.je",
    tag: "Project"
  },
  {
    title: "The Moorings Cottage",
    year: "2020",
    url: "http://themooringscottage.com",
    tag: "Project"
  },
  {
    title: "aem+",
    year: "2017",
    url: "https://github.com/nomad10z/aem-plus",
    tag: "Project"
  },
  {
    title: "Hack Cancer",
    year: "2015",
    url: "https://medium.com/hackcancer-hackathon/a-hackathon-that-changed-the-world-c4a25ea61238",
    tag: "Project"
  },
  {
    title: "Speakability",
    year: "2014",
    url: "https://github.com/andrew-je/speakability",
    tag: "Project"
  },
]

const tagColors = {
  Project: "bg-[#E8F5E9] text-[#1B5E20] dark:bg-[#2E7D32]/30 dark:text-[#A5D6A7]",
  Post: "bg-[#E3F2FD] text-[#0D47A1] dark:bg-[#1565C0]/30 dark:text-[#90CAF9]"
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-2xl px-6 py-16">
      <div className="space-y-12">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Andrew</h1>
          <p className="text-muted-foreground leading-relaxed">Software Engineer · London, UK · Lloyds Banking Group</p>
        </section>

        <section className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="flex items-baseline justify-between gap-4">
              <div className="flex items-center gap-2">
                {project.slug ? (
                  <Link 
                    href={`/posts/${project.slug}`}
                    className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors underline"
                  >
                    {project.title}
                  </Link>
                ) : (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-muted-foreground transition-colors underline"
                  >
                    {project.title}
                  </a>
                )}
                <span className={`text-xs px-2 py-0.5 rounded-full ${tagColors[project.tag as keyof typeof tagColors]}`}>
                  {project.tag}
                </span>
              </div>
              <span className="text-muted-foreground text-sm">{project.year}</span>
            </div>
          ))}
        </section>

        <section>
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </section>
      </div>
    </div>
  )
}
