import { ReactNode } from 'react';

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-2xl px-6 py-16">
      <div className="space-y-8">
        <div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
}
