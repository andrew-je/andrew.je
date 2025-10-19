import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { compileMDX } from 'next-mdx-remote/rsc';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold my-3" {...props} />,
  p: (props: any) => <p className="my-4" {...props} />,
  a: (props: any) => <a className="text-blue-500 hover:underline" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 my-2" {...props} />,
  li: (props: any) => <li className="my-1" {...props} />,
  // Add more components as needed
};

interface Frontmatter {
  title: string;
  date: string;
  description?: string;
}

interface Post {
  content: any; // MDX content
  frontmatter: Frontmatter;
}

// This function runs at build time to generate static params
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'app', 'posts');
  try {
    const postFiles = fs.readdirSync(postsDir);
    return postFiles
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => ({
        slug: file.replace(/\.mdx?$/, ''),
      }));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(process.cwd(), 'app', 'posts', `${slug}.mdx`);
  
  try {
    const source = fs.readFileSync(filePath, 'utf8');
    
    // Extract frontmatter using a more robust regex
    const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    
    if (!frontmatterMatch) {
      throw new Error('No frontmatter found in the post');
    }
    
    // Parse frontmatter
    const frontmatter = frontmatterMatch[1].split('\n').reduce((acc, line) => {
      const [key, ...value] = line.split(':').map(s => s.trim());
      if (key && value.length > 0) {
        // Remove surrounding quotes if present
        acc[key] = value.join(':').trim().replace(/^['"](.*)['"]$/, '$1');
      }
      return acc;
    }, {} as Record<string, string>);
    
    // Remove frontmatter from content
    const content = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n*/, '');

    // Generate a title from the slug if not provided
    const title = frontmatter.title || 
      slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return { 
      content,
      frontmatter: {
        title,
        date: frontmatter.date || new Date().toISOString().split('T')[0]
      },
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// This function gets called at build time to generate metadata
export async function generateMetadata({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  // Await params if it's a Promise
  const { slug } = await Promise.resolve(params);
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description || `Post: ${post.frontmatter.title}`,
  };
}

// The actual page component that receives the slug as a prop
async function PostPage({ slug }: { slug: string }) {
  // Fetch the post data
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = post;
  
  // Update metadata with the actual post data
  const metadata: Metadata = {
    title: frontmatter.title,
    description: `Post: ${frontmatter.title}`,
  };

  // Compile MDX content
  const mdxSource = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false, // We're handling frontmatter manually
    },
    components,
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {frontmatter.title}
          </h1>
          {frontmatter.date && (
            <p className="text-muted-foreground text-sm">
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </header>
        
        {mdxSource.content}
      </article>
    </div>
  );
}

// This is a workaround for the params issue in Next.js 13+
// We'll use a wrapper component to handle the params
export default async function PostPageWrapper({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  // Ensure params is resolved if it's a Promise
  const { slug } = await Promise.resolve(params);
  return <PostPage slug={slug} />;
}
