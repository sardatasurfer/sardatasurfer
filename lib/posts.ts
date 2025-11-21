import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
};

export async function getPosts(): Promise<Post[]> {
  // Se la cartella posts non esiste ancora, ritorna array vuoto (evita errori)
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((file) => file.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace('.mdx', ''),
        title: data.title || 'Senza titolo',
        description: data.description || '',
        date: data.date || '2025-01-01',
        readingTime: data.readingTime || 5,
      } as Post;
    });

  // Ordina dal più recente
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
