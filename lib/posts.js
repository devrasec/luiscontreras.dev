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

export async function getAllPosts() {
  const posts = [];
  const files = getBlogFilePaths();

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

  // TODO: Order posts by date.
  return posts;
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
