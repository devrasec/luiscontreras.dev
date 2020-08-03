import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
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
`;

const PostTeaser = ({ post, className }) => {
  const { title, summary, date, tags = [] } = post;

  return (
    <PostTeaserStyles className={className}>
      <TeaserHeading>{title}</TeaserHeading>
      <PostDate>{date}</PostDate>
      <p>{summary}</p>
      {tags.map(tag => (
        <Tag tagName={tag} key={tag} />
      ))}
    </PostTeaserStyles>
  );
};

export default PostTeaser;
