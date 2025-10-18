// This file allows you to customize the built-in MDX components
// You can add custom components here that will be available in your MDX files

import type { MDXComponents } from 'mdx/types';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold my-3">{children}</h2>,
    p: ({ children }) => <p className="my-4">{children}</p>,
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    ...components,
  };
}
