import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx-components';
import fs from 'fs';
import path from 'path';

export default function TestMDXPage() {
  const mdxSource = `# Test MDX Page

This is a test MDX page.

\`\`\`js
console.log('Hello from MDX!');
\`\`\`
`;

  return (
    <div className="container mx-auto max-w-2xl p-8">
      <MDXRemote source={mdxSource} components={mdxComponents} />
    </div>
  );
}
