import { Posts } from '@/components/Posts';

export const metadata = {
  title: 'Blog - SarDataSurfer',
  description: 'Articoli e analisi sui dati aperti della Sardegna',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">
          Blog SarDataSurfer
        </h1>
        <p className="text-xl text-blue-200 text-center mb-16">
          Cavalca le onde dei dati con noi
        </p>
        <Posts />
      </div>
    </div>
  );
}
