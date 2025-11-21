import { PostsList } from '@/components/PostsList';

export const metadata = {
  title: 'Blog - SarDataSurfer',
  description: 'Analisi e dati aperti sulla Sardegna: energia, aria, ambiente',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-white text-center mb-6">
          Blog SarDataSurfer
        </h1>
        <p className="text-2xl text-cyan-200 text-center mb-16">
          Cavalca le onde dei dati con noi 🌊📊
        </p>
        <PostsList />
      </div>
    </div>
  );
}
