/* eslint-disable prefer-destructuring */
export const colors = {
  blue: {
    default: '#3A89C9',
    dark: '#1B325F',
    light: '#9CC4E4',
  },
  gray: {
    light: '#F2F2F2',
    medium: '#C4C4C4',
  },
  black: '#000000',
  white: '#FFFFFF',
  orange: '#F26C4F',
  red: '#FF2047',
};

colors.primary = colors.blue.dark;
colors.secondary = colors.orange;

export const fonts = {
  body: '"Raleway", -apple-system, BlinkMacSystemFont, sans-serif',
  heading: '"Montserrat", -apple-system, BlinkMacSystemFont, sans-serif',
};

export const fontSizes = [0.75, 1, 1.333, 1.777, 2.369, 3.157, 4.209, 5.61].map(
  value => `${value}rem`
);

fontSizes.sm = fontSizes[0];
fontSizes.body = fontSizes[1];
fontSizes.big = fontSizes[7];

// Fibonacci scale :)
export const space = {
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  default: '1rem',
  md: '1.25rem',
  lg: '2rem',
  xl: '3.25rem',
  xxl: '5.25rem',
};

const gap = space.md;

export default {
  colors,
  fonts,
  fontSizes,
  space,
  textColor: colors.black,
  bgColor: colors.white,

  lineHeights: {
    body: 1.65,
    heading: 1.15,
  },

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  shadows: {
    subtle: '2px 2px 15px rgba(0, 0, 0, 0.07)',
  },

  gap,
  maxWidth: `calc(720px + (${gap} * 2))`,
  maxWidthBig: `calc(920px + (${gap} * 2))`,
};
