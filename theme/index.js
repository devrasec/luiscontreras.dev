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

export const fonts = {
  body: '"Raleway", -apple-system, BlinkMacSystemFont, sans-serif',
  heading: '"Montserrat", -apple-system, BlinkMacSystemFont, sans-serif',
};

export const fontSizes = [0.707, 1, 1.414, 1.999, 2.827, 3.998, 5.653].map(value => `${value}rem`);

const [textSizeSm, textSize] = fontSizes;
fontSizes.body = textSize;
fontSizes.sm = textSizeSm;

// Fibonacci scale :)
export const space = {
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1.25rem',
  lg: '2rem',
  xl: '3.25',
  xxl: '5.25rem',
};

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
};
