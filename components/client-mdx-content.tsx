'use client';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';

interface ClientMDXContentProps {
  source: string;
}

export function ClientMDXContent({ source }: ClientMDXContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote 
        source={source} 
        components={mdxComponents} 
      />
    </div>
  );
}
