import matter from 'gray-matter';
import glob from 'fast-glob';
import { promises as fs } from 'fs';
import path from 'path';

const contentPath = 'content/posts';
const contentGlob = `${contentPath}/**/*.mdx`;

const getBlogSlug = blogFilePath => {
  const filename = blogFilePath.replace(`${contentPath}/`, '');
  return filename.replace(/\/index\.mdx$/, '');
};

const getBlogFilePaths = () => glob.sync(contentGlob);

export async function getAllPosts(paths) {
  if (paths && !Array.isArray(paths)) {
    throw new Error('Parameter "paths" is not an Array.');
  }

  const posts = [];
  const files = paths || getBlogFilePaths();

  for (const file of files) {
    /* eslint-disable-next-line no-await-in-loop */
    const content = await fs.readFile(file);
    const { data } = matter(content);
    const id = file.replace(/\.mdx$/, '');
    const slug = getBlogSlug(file);

    posts.push({
      id,
      ...data,
      slug,
    });
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getLatestPosts() {
  const files = getBlogFilePaths();

  return getAllPosts(files.slice(0, 5));
}

export async function getPostBySlug(slug) {
  const files = getBlogFilePaths();
  const slugPath = path.join(...slug);
  const pathRegex = new RegExp(`^${contentPath}/${slugPath}/index.mdx$`);
  const blogFilePath = files.find(file => pathRegex.test(file));

  if (!blogFilePath) {
    console.warn(`No MDX file found for slug: ${slugPath}`);
  }

  const fileContent = await fs.readFile(blogFilePath);
  const { content, data } = matter(fileContent);
  return {
    rawContent: content,
    ...data,
    slug: slugPath,
  };
}

export function getAllPostSlugs() {
  const files = getBlogFilePaths();

  return files.map(file => ({
    params: {
      slug: getBlogSlug(file).split('/'),
    },
  }));
}
