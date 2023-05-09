import { css } from 'styled-components';

export const PLATFORMS = {
  xdesktop: 'xdesktop',
  desktop: 'desktop',
  tablet: 'tablet',
  phone: 'phone'
};

export const MERGED_PLATFORMS = {
  desktopTablet: 'desktopTablet',
  tabletPhone: 'tabletPhone'
};

export const SIZES = {
  [PLATFORMS.xdesktop]: 1980,
  [PLATFORMS.desktop]: 980,
  [PLATFORMS.tablet]: 600,
  [PLATFORMS.phone]: 0
};

export const QUERIES = {
  [PLATFORMS.xdesktop]: `screen and (min-width: ${SIZES[PLATFORMS.xdesktop]}px)`,
  [PLATFORMS.desktop]: `screen and (min-width: ${SIZES[PLATFORMS.desktop]}px) and (max-width: ${
    SIZES[PLATFORMS.xdesktop] - 1
  }px)`,
  [PLATFORMS.tablet]: `screen and (min-width: ${SIZES[PLATFORMS.tablet]}px) and (max-width: ${
    SIZES[PLATFORMS.desktop] - 1
  }px)`,
  [PLATFORMS.phone]: `screen and (min-width: ${SIZES[PLATFORMS.phone]}px) and (max-width: ${
    SIZES[PLATFORMS.tablet] - 1
  }px)`,
  [MERGED_PLATFORMS.desktopTablet]: `screen and (min-width: ${SIZES[PLATFORMS.tablet]}px) and (max-width: ${
    SIZES[PLATFORMS.xdesktop] - 1
  }px)`,
  [MERGED_PLATFORMS.tabletPhone]: `screen and (min-width: ${SIZES[PLATFORMS.phone]}px) and (max-width: ${
    SIZES[PLATFORMS.desktop] - 1
  }px)`
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
