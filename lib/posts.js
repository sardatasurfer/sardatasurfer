import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

export async function getPosts() {
  // Se la cartella non esiste ancora (perché non abbiamo articoli) ritorna array vuoto
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.mdx?$/, ''),
        title: data.title || 'Senza titolo',
        description: data.description || '',
        date: data.date || '2025-01-01',
        readingTime: data.readingTime || 5,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
