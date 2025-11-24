import { getPosts } from '@/lib/posts';
import MDXComponents from '@/custom-mdx-components';
import PostClientWrapper from '../PostClientWrapper';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ← Rimosso i tipi TypeScript
export async function generateMetadata({ params }) {
  const { slug } = params;
  const PostModule = await import(`../posts/${slug}.mdx`);
  return {
    title: PostModule.frontmatter?.title || 'SarDataSurfer',
    description: PostModule.frontmatter?.description || 'Approfondimento su tematiche energetiche e ambientali in Sardegna.',
  };
}

// ← Rimosso i tipi TypeScript
export default function PostPage({ params }) {
  const { slug } = params;

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      <PostClientWrapper slug={slug} MDXComponents={MDXComponents} />
    </article>
  );
}
