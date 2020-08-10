import matter from 'gray-matter';

export async function getAllPosts() {
  const context = require.context('../content/posts', true, /\.mdx$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    /* eslint-disable-next-line no-await-in-loop */
    const content = await import(`../content/posts/${post}`);
    const matterResult = matter(content.default);
    const id = post.replace(/\.mdx$/, '');

    posts.push({
      id,
      ...matterResult.data,
    });
  }

  // TODO: Order posts by date.
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../content/posts/${slug}/index.mdx`);
  const matterResult = matter(fileContent.default);
  return {
    rawContent: matterResult.content,
    ...matterResult.data,
  };
}

export async function getAllPostSlugs() {
  const posts = await getAllPosts();
  return posts.map(post => ({ params: { slug: post.slug } }));
}
