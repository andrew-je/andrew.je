import { ReactNode } from 'react';

import Link from "next/link";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-2xl py-16 px-0">
      <div className="px-6">
        <article className="prose dark:prose-invert max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
}
