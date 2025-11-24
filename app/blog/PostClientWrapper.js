'use client';

import { use } from 'react'; // <-- importante per Next.js 15

export default function PostClientWrapper({ 
  slug, 
  MDXComponents 
}: { 
  slug: string; 
  MDXComponents: any;
}) {
  // Carichiamo il file MDX SOLO sul client
  const PostModule = use(import(`../posts/${slug}.mdx`));
  const Post = PostModule.default;

  return <Post components={MDXComponents} />;
}
