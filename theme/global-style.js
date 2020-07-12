import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px ${themeGet('colors.orange')};
  }

  ::selection {
    background-color: ${themeGet('colors.secondary')};
    color: ${themeGet('colors.primary')};
  }

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

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: ${themeGet('fonts.heading')};
    font-weight: ${themeGet('fontWeights.heading')};
    line-height: ${themeGet('lineHeights.heading')};
  }

  h1 {
    margin-top: 0;
    font-size: ${themeGet('fontSizes.6')};
  }

  h2 {
    font-size: ${themeGet('fontSizes.5')};
  }

  h3 {
    font-size: ${themeGet('fontSizes.4')};
  }

  h4 {
    font-size: ${themeGet('fontSizes.3')};
  }

  h5 {
    font-size: ${themeGet('fontSizes.2')};
  }

  a {
    color: ${themeGet('colors.secondary')};
    text-decoration: none;
  }

  p {
    margin-top: 0;
    margin-bottom: ${themeGet('lineHeights.heading')}rem;
  }

  small {
    font-size: ${themeGet('fontSizes.sm')};
  }
`;

export default GlobalStyle;
