import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const getFontSize = props => {
  const { looksLike, as } = props;
  const styleAs = looksLike || as;

  switch (styleAs) {
    case 'h2':
      return `font-size: ${themeGet('fontSizes.5')(props)}`;
    case 'h3':
      return `font-size: ${themeGet('fontSizes.4')(props)}`;
    case 'h4':
      return `font-size: ${themeGet('fontSizes.3')(props)}`;
    case 'h5':
      return `font-size: ${themeGet('fontSizes.2')(props)}`;
    default:
      return `font-size: ${themeGet('fontSizes.6')(props)}`;
  }
};

const Heading = styled.h1`
  ${getFontSize};
  margin: 2.75rem 0 1.05rem;
  font-family: ${themeGet('fonts.heading')};
  font-weight: ${themeGet('fontWeights.heading')};
  line-height: ${themeGet('lineHeights.heading')};
  ${({ as }) => (!as || as === 'h1') && 'margin-top: 0'};
`;

export default Heading;
