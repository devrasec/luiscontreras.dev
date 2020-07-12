import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import PostDate from './styles/post-date';

const PostTeaserStyles = styled.div`
  h3 {
    color: ${themeGet('colors.secondary')};
    font-size: ${themeGet('fontSizes.2')};
    margin-top: 0;
  }

  ${PostDate} {
    display: inline-block;
    margin-bottom: ${themeGet('space.xxs')};
  }
`;

const PostTeaser = ({ post, className }) => {
  const { title, intro, date } = post;

  return (
    <PostTeaserStyles className={className}>
      <h3>{title}</h3>
      <PostDate>{date}</PostDate>
      <p>{intro}</p>
    </PostTeaserStyles>
  );
};

export default PostTeaser;
