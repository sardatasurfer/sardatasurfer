// app/blog/page.js
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/posts';

export default async function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
