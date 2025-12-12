// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'app', 'blog', 'posts');

export function getPostSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug) {
  if (!slug) throw new Error('getPostBySlug: slug is undefined');

  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(file);

  return {
    slug, // ✅ sempre definito
    ...data, // title, date, ecc
  };
}

export function getAllPostsMeta() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
