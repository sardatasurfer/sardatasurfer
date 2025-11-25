import { getPosts } from '@/lib/posts';
import MDXComponents from '@/custom-mdx-components';
import PostClientWrapper from '../PostClientWrapper';

// 1. Genera i percorsi statici (necessario per il build statico)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Metadati SEO (server-side, legge solo il frontmatter)
export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    // *** CORREZIONE CRITICA: Uso di un percorso relativo (../posts) ***
    // per l'import dinamico, che è più robusto dell'alias in questo contesto.
    const PostModule = await import(`../posts/${slug}.mdx`);
    
    const { frontmatter } = PostModule;
    return {
      title: frontmatter?.title || 'SarDataSurfer',
      description:
        frontmatter?.description ||
        'Approfondimento su energia e ambiente in Sardegna',
    };
  } catch {
    return {
      title: 'Articolo non trovato',
      description: 'Il post richiesto non esiste.',
    };
  }
}

// 3. IMPORTANTE: accetta anche slug non presenti in generateStaticParams
//    (fondamentale finché non hai tutti i post pushati o se getPosts fallisce)
export const dynamicParams = true;

// 4. Pagina principale (Server Component pulito)
export default function PostPage({ params }) {
  const { slug } = params;

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      {/* Tutto il rendering MDX + Recharts avviene solo nel client */}
      <PostClientWrapper slug={slug} MDXComponents={MDXComponents} />
    </article>
  );
}
