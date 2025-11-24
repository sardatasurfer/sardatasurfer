'use client';

import { use } from 'react';

export default function PostClientWrapper({ slug, MDXComponents }) {
  const PostModule = use(import(`@/posts/${slug}.mdx`));
  const Post = PostModule.default;

  return <Post components={MDXComponents} />;
}
