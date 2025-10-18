'use client';

import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types';

// Custom components to be used in MDX
const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-3xl font-bold my-6">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-bold my-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-bold my-3">{children}</h3>,
  p: ({ children }) => <p className="my-4">{children}</p>,
  a: ({ href, children }) => (
    <a href={href} className="text-blue-600 hover:underline">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc pl-6 my-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 my-4">{children}</ol>,
  li: ({ children }) => <li className="my-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => (
    <code className={`bg-gray-100 dark:bg-gray-800 rounded px-1 ${className || ''}`}>
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
      {children}
    </pre>
  ),
};

export function MDXProviderWrapper({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
