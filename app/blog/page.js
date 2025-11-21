import { getPosts } from '@/lib/posts';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title + ' - SarDataSurfer',
    description: post.description,
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {data.title}
          </h1>
          <p className="text-2xl text-cyan-300 mb-4">{data.description}</p>
          <div className="text-cyan-400">
            {data.date} · {data.readingTime || 5} min lettura
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-white">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </article>
  );
}
