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

  html,
  body {
    height: 100%;
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

    &.menu-open {
      overflow: hidden;
    }
  }

  a {
    color: ${themeGet('colors.blue.default')};
    text-decoration: underline;
    &:hover {
      color: ${themeGet('colors.blue.dark')};
    }
  }

  p {
    margin-top: 0;
    margin-bottom: ${themeGet('lineHeights.heading')}rem;
  }

  small {
    font-size: ${themeGet('fontSizes.sm')};
  }

  b,
  strong {
    font-weight: ${themeGet('fontWeights.bold')};
  }
`;

export default GlobalStyle;
