import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

// Configure MDX with Next.js
const withMDX = createMDX({
  // Handle both .md and .mdx files
  extension: /\.mdx?$/,
  options: {
    // If you want to use remark-gfm, install it and uncomment:
    // remarkPlugins: [require('remark-gfm')],
    // If you want to use rehype plugins, install them and uncomment:
    // rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
