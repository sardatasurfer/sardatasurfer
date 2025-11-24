import { getPosts } from '@/lib/posts';
import MDXComponents from '@/custom-mdx-components';
import PostClientWrapper from '../PostClientWrapper';

// Genera i percorsi statici
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Metadati (va bene così, legge solo il frontmatter)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const PostModule = await import(`../posts/${slug}.mdx`);
  return {
    title: PostModule.frontmatter?.title || 'SarDataSurfer',
    description: PostModule.frontmatter?.description || 'Approfondimento su tematiche energetiche e ambientali in Sardegna.',
  };
}

// Pagina Server Component – NON renderizza più nulla di MDX!
export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      {/* Passiamo solo lo slug, tutto il resto lo fa il wrapper client-side */}
      <PostClientWrapper slug={slug} MDXComponents={MDXComponents} />
    </article>
  );
}
