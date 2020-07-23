import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import PostDate from './styles/post-date';
import TeaserHeading from './styles/teaser-heading';

const PostTeaserStyles = styled.article`
  ${PostDate} {
    display: inline-block;
    margin-bottom: ${themeGet('space.xxs')};
  }
`;

const PostTeaser = ({ post, className }) => {
  const { title, summary, date } = post;

  return (
    <PostTeaserStyles className={className}>
      <TeaserHeading>{title}</TeaserHeading>
      <PostDate>{date}</PostDate>
      <p>{summary}</p>
    </PostTeaserStyles>
  );
};

export default PostTeaser;
