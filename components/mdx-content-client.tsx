'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';

export function MDXContentClient({ source }: { source: string }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
