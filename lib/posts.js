import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

export async function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))  // solo file .mdx
    .map(fileName => {
      // Rimuove correttamente l'estensione .mdx anche se c'è un numero prima
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,           // → "produzione-energia-sardegna-2025"
        ...data         // frontmatter: title, date, ecc.
      };
    });

  return posts;
}
