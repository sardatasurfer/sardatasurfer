// app/blog/page.js (Pagina Elenco)
import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-blue-950 to-cyan-900">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-white mb-10">Tutti i Post</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="block p-6 bg-cyan-900/50 rounded-lg shadow-xl hover:bg-cyan-800/70 transition-colors"
            >
              <h2 className="text-3xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-cyan-200 mb-3">{post.description}</p>
              <p className="text-cyan-400 text-sm">{post.date}</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
