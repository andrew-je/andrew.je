'use client';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import mdxComponents from './mdx-components';

export default function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote 
        source={source} 
        components={mdxComponents} 
      />
    </div>
  );
}
