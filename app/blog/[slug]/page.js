import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/posts';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

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

async function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, content } = matter(fileContents);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    readingTime: frontmatter.readingTime,
    content,
  };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: {},
  });

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

        <div className="prose prose-invert prose-lg max-w-none text-white">
          {content}
        </div>
      </div>
    </article>
  );
}
