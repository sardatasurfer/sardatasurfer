import { notFound } from 'next/not-found';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title + ' - SarDataSurfer',
    description: post.description,
  };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <p className="text-2xl text-cyan-300 mb-4">{post.description}</p>
          <div className="text-cyan-400">
            {post.date} · {post.readingTime} min lettura
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
