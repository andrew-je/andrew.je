import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { compileMDX } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx-components';

interface Frontmatter {
  title: string;
  date: string;
}

// This function gets called at build time to generate the static paths
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'app', 'posts');
  try {
    const entries = await fs.promises.readdir(postsDir, { withFileTypes: true });
    const mdxFiles = entries.filter(
      (entry) => entry.isFile() && (entry.name.endsWith('.mdx') || entry.name.endsWith('.md'))
    );
    
    return mdxFiles.map((file) => ({
      slug: file.name.replace(/\.mdx?$/, '')
    }));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  // Read the MDX file to get the frontmatter
  try {
    const filePath = path.join(process.cwd(), 'app/posts', `${params.slug}.mdx`);
    const source = await fs.promises.readFile(filePath, 'utf8');
    
    const { frontmatter } = await compileMDX<Frontmatter>({
      source,
      options: { parseFrontmatter: true }
    });

    return {
      title: `${frontmatter.title || params.slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')} | Andrew's Notes`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: `${params.slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')} | Andrew's Notes`,
    };
  }
}

async function getPostContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'app/posts', `${slug}.mdx`);
    const source = await fs.promises.readFile(filePath, 'utf8');
    
    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source,
      options: { parseFrontmatter: true }
    });

    return { 
      content,
      frontmatter: {
        title: frontmatter.title || slug.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        date: frontmatter.date || new Date().toISOString().split('T')[0]
      }
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostContent(slug);

  if (!post) {
    return notFound();
  }

  const { content, frontmatter } = post;

  return (
    <div className="container mx-auto max-w-2xl px-6 py-16">
      <div className="space-y-8">
        <div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all notes
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {frontmatter.title}
          </h1>
          
          {frontmatter.date && (
            <p className="text-muted-foreground text-sm mb-6">
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
}
