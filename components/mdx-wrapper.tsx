'use client';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';

interface MDXWrapperProps {
  source: string;
}

export function MDXWrapper({ source }: MDXWrapperProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote 
        source={source} 
        components={mdxComponents}
        options={{
          mdxOptions: {
            // Add any MDX options here
            rehypePlugins: [],
            remarkPlugins: [],
          },
        }}
      />
    </div>
  );
}
