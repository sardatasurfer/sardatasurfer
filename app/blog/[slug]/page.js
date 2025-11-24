import { getPosts } from '@/lib/posts';
// ✅ CORREZIONE: Importa il file rinominato
import MDXComponents from '@/custom-mdx-components'; 

// Questa funzione indica a Next.js quali slug pre-renderizzare (Server Component)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Questa funzione genera i metadati (titolo, descrizione) per la pagina
export async function generateMetadata({ params }) {
  const { slug } = params;
  // Usiamo l'importazione dinamica per caricare il contenuto MDX
  const PostModule = await import(`../posts/${slug}.mdx`);
  const Post = PostModule.default;

  return {
    title: Post.frontmatter?.title || 'SarDataSurfer',
    description: Post.frontmatter?.description || 'Approfondimento su tematiche energetiche e ambientali in Sardegna.',
  };
}

// Componente principale della pagina
export default async function PostPage({ params }) {
  const { slug } = params;
  
  // Importazione del contenuto del post MDX
  const PostModule = await import(`../posts/${slug}.mdx`);
  const Post = PostModule.default;

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Passiamo l'oggetto MDXComponents per la corretta mappatura dei componenti client */}
        <Post components={MDXComponents} />
      </div>
    </article>
  );
}
