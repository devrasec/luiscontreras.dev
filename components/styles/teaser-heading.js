import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Heading from '../primitives/heading';

const TeaserHeading = styled(Heading).attrs({ as: 'h3', looksLike: 'h5' })`
  color: ${themeGet('colors.secondary')};
  margin-top: 0;
`;

export default TeaserHeading;
