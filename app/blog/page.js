import { PostsList } from '../../_components/PostsList';

export const metadata = {
  title: 'Blog - SarDataSurfer',
  description: 'Analisi dati aperti Sardegna',
};

export default function Blog() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-950 to-cyan-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-white text-center mb-6">
          Blog SarDataSurfer
        </h1>
        <p className="text-2xl text-cyan-300 text-center mb-16">
          Cavalca le onde dei dati con noi 🌊📊
        </p>
        <PostsList />
      </div>
    </section>
  );
}
