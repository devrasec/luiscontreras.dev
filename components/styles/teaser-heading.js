import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const TeaserHeading = styled.h3`
  color: ${themeGet('colors.secondary')};
  font-size: ${themeGet('fontSizes.2')};
  margin-top: 0;
`;

export default TeaserHeading;
