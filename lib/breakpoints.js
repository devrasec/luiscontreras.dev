export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
};

export const responsiveFontBreakpoint = `@media (max-width: ${breakpoints.xl}px)`;

export const mobilePlus = `@media (min-width: ${breakpoints.sm}px)`;
export const tablet = `@media (min-width: ${breakpoints.md}px)`;
export const desktop = `@media (min-width: ${breakpoints.lg}px)`;
export const large = `@media (min-width: ${breakpoints.xl}px)`;
export const hd = `@media (min-width: ${breakpoints.xxl}px)`;

export const untilDesktop = `@media (max-width: ${breakpoints.lg}px)`;
export const untilTablet = `@media (max-width: ${breakpoints.md}px)`;
