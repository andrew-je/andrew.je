import { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <article className="prose dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  );
}
