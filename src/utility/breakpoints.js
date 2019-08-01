const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

export const device = {
  mobile: `(min-width: ${breakpoints.sm})`,
  tablet: `(min-width: ${breakpoints.md})`,
  laptop: `(min-width: ${breakpoints.lg})`,
  desktop: `(min-width: ${breakpoints.xl})`,
};
