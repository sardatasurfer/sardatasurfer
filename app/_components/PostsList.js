import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export async function PostsList() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <p className="text-center text-cyan-300 text-xl">
        Nessun articolo ancora... la prima onda sta arrivando! 🌊
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all border border-cyan-500/30 shadow-2xl hover:shadow-cyan-500/50">
            <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
            <p className="text-cyan-200 mb-6 line-clamp-3">{post.description}</p>
            <div className="flex items-center gap-4 text-sm text-cyan-300">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime} min lettura</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
