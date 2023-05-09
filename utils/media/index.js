import { css } from 'styled-components';

export const PLATFORMS = {
  xdesktop: 'xdesktop',
  desktop: 'desktop',
  tablet: 'tablet',
  phone: 'phone',
  desktopXDesktop: 'desktopXDesktop',
  desktopTablet: 'desktopTablet',
  tabletPhone: 'tabletPhone',
  landscape: 'landscape',
  portrait: 'portrait'
};

export const MERGED_PLATFORMS = {
  desktopTablet: 'desktopTablet',
  tabletPhone: 'tabletPhone',
  landscape: 'landscape',
  portrait: 'portrait'
};

export const SIZES = {
  [PLATFORMS.xdesktop]: 1980,
  [PLATFORMS.desktop]: 980,
  [PLATFORMS.tablet]: 600,
  [PLATFORMS.phone]: 0
};

export const QUERIES = {
  [PLATFORMS.xdesktop]: `screen and (min-width: ${SIZES[PLATFORMS.xdesktop]}px)`,
  [PLATFORMS.desktop]: `screen and (min-width: ${SIZES[PLATFORMS.desktop]}px) and (max-width: ${SIZES[PLATFORMS.xdesktop] - 1}px)`,
  [PLATFORMS.tablet]: `screen and (min-width: ${SIZES[PLATFORMS.tablet]}px) and (max-width: ${SIZES[PLATFORMS.desktop] - 1}px)`,
  [PLATFORMS.phone]: `screen and (min-width: ${SIZES[PLATFORMS.phone]}px) and (max-width: ${SIZES[PLATFORMS.tablet] - 1}px)`,
  [PLATFORMS.desktopTablet]: `screen and (min-width: ${SIZES[PLATFORMS.tablet]}px) and (max-width: ${SIZES[PLATFORMS.xdesktop] - 1}px)`,
  [PLATFORMS.tabletPhone]: `screen and (min-width: ${SIZES[PLATFORMS.phone]}px) and (max-width: ${SIZES[PLATFORMS.desktop] - 1}px)`,
  [MERGED_PLATFORMS.landscape]: `screen and (min-width: ${SIZES[PLATFORMS.phone]}px) and (max-width: ${
    SIZES[PLATFORMS.desktop] - 1
  }px) and (orientation : landscape)`,
  [MERGED_PLATFORMS.portrait]: `screen and (min-width: ${SIZES[PLATFORMS.phone]}px) and (max-width: ${
    SIZES[PLATFORMS.desktop] - 1
  }px) and (orientation : portrait)`
};

/**
 * creates a reusable media query for each platform with template literals, usage: media.phone` padding: 20px;
 */
export const query = Object.keys(QUERIES).reduce((obj, platform) => {
  obj[platform] = (first, ...args) => css`
    @media ${QUERIES[platform]} {
      ${css(first, ...args)}
    }
  `;

  return obj;
}, {});
