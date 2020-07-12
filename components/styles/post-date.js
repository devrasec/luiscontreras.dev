import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PostDate = styled.span`
  color: ${themeGet('colors.primary')};
  font-size: ${themeGet('fontSizes.sm')};
  font-weight: ${themeGet('fontWeights.bold')};
`;

export default PostDate;
