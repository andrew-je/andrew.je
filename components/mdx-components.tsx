'use client';

import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

// Simple utility function to join class names
function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Type for component props
interface MDXComponentProps {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    // Style the default HTML elements
    h1: ({ className, ...props }: MDXComponentProps) => (
      <h1
        className={cn(
          'mt-8 mb-6 text-4xl font-bold leading-tight tracking-tighter',
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: MDXComponentProps) => (
      <h2
        className={cn(
          'mt-10 mb-4 text-2xl font-semibold tracking-tight border-b pb-2',
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: MDXComponentProps) => (
      <h3
        className={cn('mt-8 mb-3 text-xl font-semibold', className)}
        {...props}
      />
    ),
    p: ({ className, ...props }: MDXComponentProps) => (
      <p
        className={cn('text-gray-800 dark:text-gray-200 leading-7 [&:not(:first-child)]:mt-4', className)}
        {...props}
      />
    ),
    a: ({ href, className, children, ...props }: MDXComponentProps & { href?: string }) => {
      const isExternal = href?.startsWith('http');
      const linkClasses = 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors';
      
      if (isExternal) {
        return (
          <a
            href={href} 
            className={cn(linkClasses, className)}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
            <span className="inline-block ml-1">↗</span>
          </a>
        );
      }

      return (
        <Link 
          href={href || '#'} 
          className={cn(linkClasses, className)}
          {...props}
        >
          {children}
        </Link>
      );
    },
    ul: ({ className, ...props }: MDXComponentProps) => (
      <ul
        className={cn('list-disc pl-6 my-4 space-y-2', className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }: MDXComponentProps) => (
      <ol
        className={cn('list-decimal pl-6 my-4 space-y-2', className)}
        {...props}
      />
    ),
    li: ({ className, ...props }: MDXComponentProps) => (
      <li className={cn('text-gray-700 dark:text-gray-300', className)} {...props} />
    ),
    blockquote: ({ className, ...props }: MDXComponentProps) => (
      <blockquote
        className={cn(
          'border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2 my-6 text-gray-700 dark:text-gray-300 italic',
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: MDXComponentProps) => (
      <code
        className={cn(
          'bg-gray-100 dark:bg-gray-800 text-sm px-1.5 py-0.5 rounded',
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: MDXComponentProps) => (
      <pre
        className={cn(
          'bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-6 overflow-x-auto text-sm',
          className
        )}
        {...props}
      />
    ),
    img: ({
      className,
      alt,
      src,
      ...props
    }: MDXComponentProps & { alt?: string; src?: string }) => {
      if (!src) return null;
      
      return (
        <div className="my-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={alt || ''}
              fill
              className={cn('object-cover', className)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              {...props}
            />
          </div>
          {alt && (
            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              {alt}
            </p>
          )}
        </div>
      );
    },
    hr: ({ className, ...props }: MDXComponentProps) => (
      <hr className={cn('my-8 border-gray-200 dark:border-gray-700', className)} {...props} />
    ),
    table: ({ className, ...props }: MDXComponentProps) => (
      <div className="my-6 w-full overflow-x-auto">
        <table
          className={cn('w-full border-collapse', className)}
          {...props}
        />
      </div>
    ),
    th: ({ className, ...props }: MDXComponentProps) => (
      <th
        className={cn(
          'border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold',
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: MDXComponentProps) => (
      <td
        className={cn(
          'border border-gray-200 dark:border-gray-700 px-4 py-2',
          className
        )}
        {...props}
      />
    ),
    // Add any custom components here
    ...components,
  };
}

// Export the components directly for use in the MDXProvider
export const mdxComponents: MDXComponents = useMDXComponents({});
