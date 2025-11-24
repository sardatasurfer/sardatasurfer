import { getPosts } from '@/lib/posts';

// 1. Importiamo la configurazione MDX (assicurati che custom-mdx-components.js sia nella root)
import MDXComponents from '@/custom-mdx-components'; 

// 2. Importiamo il wrapper Client-Side.
// NOTA: Questo assume che il file PostClientWrapper.js si trovi nella cartella "app/blog/"
// Se lo hai messo altrove, aggiusta questo percorso (es: '@/app/_components/PostClientWrapper')
import PostClientWrapper from '../PostClientWrapper';

// Generazione dei percorsi statici (Server Side)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generazione dei metadati SEO (Server Side)
export async function generateMetadata({ params }) {
  const { slug } = params;
  const PostModule = await import(`../posts/${slug}.mdx`);
  const Post = PostModule.default;

  return {
    title: Post.frontmatter?.title || 'SarDataSurfer',
    description: Post.frontmatter?.description || 'Approfondimento su tematiche energetiche e ambientali in Sardegna.',
  };
}

// Componente Pagina (Server Component)
export default async function PostPage({ params }) {
  const { slug } = params;
  
  // Caricamento dinamico del contenuto MDX
  const PostModule = await import(`../posts/${slug}.mdx`);
  const Post = PostModule.default;

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      {/* Passiamo tutto al wrapper client.
         Questo isola l'esecuzione di componenti come 'recharts' nel browser,
         prevenendo l'errore "createContext is not a function" durante il build.
      */}
      <PostClientWrapper Post={Post} MDXComponents={MDXComponents} />
    </article>
  );
}
