import { getPosts } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const Post = (await import(`../posts/${slug}.mdx`)).default;

  return {
    title: Post.frontmatter?.title || 'SarDataSurfer',
    description: Post.frontmatter?.description || '',
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const Post = (await import(`../posts/${slug}.mdx`)).default;

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <Post />
      </div>
    </article>
  );
}
