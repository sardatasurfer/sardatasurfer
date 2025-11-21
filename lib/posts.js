import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

export async function getPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: file.replace('.mdx', ''),
        title: data.title || 'Senza titolo',
        description: data.description || '',
        date: data.date || '',
        readingTime: data.readingTime || 5,
      };
    });

  return posts.sort((a, b) => (b.date > a.date ? 1 : -1));
}
