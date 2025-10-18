'use client';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';

type MDXContentProps = {
  source: string;
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote 
        source={source} 
        components={mdxComponents} 
      />
    </div>
  );
}
