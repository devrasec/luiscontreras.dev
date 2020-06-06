import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-size: 100%;
  }

  body {
    background-color: ${themeGet('bgColor', 'red')};
    font-family: ${themeGet('fonts.body')};
    font-weight: ${themeGet('fontWeights.body')};
    line-height: ${themeGet('lineHeights.body')};
    color: ${themeGet('textColor')};
  }

  h1, h2, h3, h4, h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: ${themeGet('fonts.heading')};
    font-weight: ${themeGet('fontWeights.heading')};
    line-height: ${themeGet('lineHeights.heading')};
  }

  h1 {
    margin-top: 0;
    font-size: ${themeGet('fontSizes.7')};
  }

  h2 {
    font-size: ${themeGet('fontSizes.6')};
  }

  h3 {
    font-size: ${themeGet('fontSizes.5')};
  }

  h4 {
    font-size: ${themeGet('fontSizes.4')};
  }

  h5 {
    font-size: ${themeGet('fontSizes.3')};
  }

  p {
    margin-bottom: ${themeGet('lineHeights.heading')}rem;
  }
`;

export default GlobalStyle;
