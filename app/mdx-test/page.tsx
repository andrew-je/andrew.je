import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx-components';

export default function MDXTestPage() {
  const mdxContent = `# MDX Test Page

This is a test page to verify MDX rendering.

## Features

- **Markdown** support
- **JSX** support
- **Components** support

\`\`\`js
console.log('Hello from MDX!');
\`\`\`

## How to use

1. Create a new MDX file in the \`app/posts\` directory
2. Add your content using Markdown or JSX
3. The content will be automatically rendered with the configured components
`;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <MDXRemote source={mdxContent} components={mdxComponents} />
    </div>
  );
}
