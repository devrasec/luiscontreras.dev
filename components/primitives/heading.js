import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { responsiveFontBreakpoint, large } from '../../lib/breakpoints';

const headingSizes = {
  big: {
    viewUnit: '5.7674vw',
    maxFontSize: 'fontSizes.7',
  },
  h1: {
    viewUnit: '4.0175vw',
    maxFontSize: 'fontSizes.6',
  },
  h2: {
    viewUnit: '2.7014vw',
    maxFontSize: 'fontSizes.5',
  },
  h3: {
    viewUnit: '1.715vw',
    maxFontSize: 'fontSizes.4',
  },
  h4: {
    viewUnit: '.9744vw',
    maxFontSize: 'fontSizes.3',
  },
  h5: {
    viewUnit: '.418vw',
    maxFontSize: 'fontSizes.2',
  },
};

const getHeadingStyles = heading => css`
  ${responsiveFontBreakpoint} {
    font-size: calc(1rem + ${headingSizes[heading].viewUnit});
  }

  ${large} {
    font-size: ${themeGet(headingSizes[heading].maxFontSize)};
  }
`;

const getFontSize = props => {
  const { looksLike, as, isBig } = props;

  if (isBig) {
    return getHeadingStyles('big');
  }

  const styleAs = looksLike || as;

  // TODO: Check efficiency of this.
  switch (styleAs) {
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
      return getHeadingStyles(styleAs);
    default:
      return getHeadingStyles('h1');
  }
};

const Heading = styled.h1`
  ${getFontSize};
  margin: 2.5rem 0 1.05rem;
  font-family: ${themeGet('fonts.heading')};
  font-weight: ${themeGet('fontWeights.heading')};
  line-height: ${themeGet('lineHeights.heading')};
  ${({ as }) => (!as || as === 'h1') && 'margin-top: 0'};
  color: ${({ textColor, theme }) =>
    themeGet(textColor ? `colors.${textColor}` : 'textColor')({ theme })};
`;

export default Heading;
