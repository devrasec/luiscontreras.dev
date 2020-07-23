import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');
const mdxRegex = /\.mdx$/;

export async function getAllPosts() {
  const context = require.context('../content/posts', false, /\.mdx$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    /* eslint-disable-next-line no-await-in-loop */
    const content = await import(`../content/posts/${post}`);
    const matterResult = matter(content.default);
    const id = post.replace(mdxRegex, '');

    posts.push({
      id,
      ...matterResult.data,
    });
  }

  // TODO: Order posts by date.
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../content/posts/${slug}.mdx`);
  const matterResult = matter(fileContent.default);
  return {
    rawContent: matterResult.content,
    ...matterResult.data,
  };
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.match(mdxRegex))
    .map(fileName => ({
      params: {
        slug: fileName.replace(mdxRegex, ''),
      },
    }));
}
