import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import PostDate from './styles/post-date';
import TeaserHeading from './styles/teaser-heading';

const PostTeaserStyles = styled.div`
  ${PostDate} {
    display: inline-block;
    margin-bottom: ${themeGet('space.xxs')};
  }
`;

const PostTeaser = ({ post, className }) => {
  const { title, intro, date } = post;

  return (
    <PostTeaserStyles className={className}>
      <TeaserHeading>{title}</TeaserHeading>
      <PostDate>{date}</PostDate>
      <p>{intro}</p>
    </PostTeaserStyles>
  );
};

export default PostTeaser;
