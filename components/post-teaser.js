import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';
import PostDate from './styles/post-date';
import TeaserHeading from './styles/teaser-heading';
import BaseTag from './tag';

const Tag = styled(BaseTag)``;

const PostTeaserStyles = styled.article`
  ${PostDate} {
    display: inline-block;
    margin-bottom: ${themeGet('space.xxs')};
  }

  p {
    margin-bottom: ${themeGet('space.xs')};
  }

  ${Tag} {
    &:not(:last-child) {
      margin-right: ${themeGet('space.xs')};
    }
  }

  .tags {
    margin-bottom: ${themeGet('space.default')};
  }

  .readmore-link {
    text-align: right;
  }
`;

const PostTeaser = ({ post, className }) => {
  const { title, summary, date, slug, tags = [] } = post;

  return (
    <PostTeaserStyles className={className}>
      <TeaserHeading>
        {slug ? (
          <Link href="/blog/[slug]" as={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        ) : (
          title
        )}
      </TeaserHeading>
      <PostDate>{date}</PostDate>
      <p>{summary}</p>
      <div className="tags">
        {tags.map(tag => (
          <Tag tagName={tag} key={tag} />
        ))}
      </div>
    </PostTeaserStyles>
  );
};

export default PostTeaser;
