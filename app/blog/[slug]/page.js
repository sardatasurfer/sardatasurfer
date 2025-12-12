// app/blog/[slug]/page.js
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';

const postModules = {
  'qualita-aria-sardegna-s5p': () => import('../posts/qualita-aria-sardegna-s5p.mdx'),
  'produzione-energia-sardegna-2025': () => import('../posts/produzione-energia-sardegna-2025.mdx'),
  // aggiungi qui gli altri post...
};

export function generateStaticParams() {
  return Object.keys(postModules).map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const slug = params?.slug;

  if (!slug || !postModules[slug]) {
    notFound();
  }

  const meta = getPostBySlug(slug);

  let MDX;
  try {
    MDX = (await postModules[slug]()).default;
  } catch (e) {
    notFound();
  }

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{meta.title}</h1>
      <MDX />
    </article>
  );
}
