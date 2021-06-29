import { css } from 'styled-components';

const rootThemeConfigs = css`
  :root {
    --system-fonts-body: system-ui, sans-serif;
    --system-fonts-heading: Georgia, serif;
    --system-fonts-mono: Menlo, monospace;

    /* font Sizes */
    --system-fontSize-xs: 0.75rem;
    --system-fontSize-sm: 0.875rem;
    --system-fontSize-md: 1rem;
    --system-fontSize-lg: 1.125rem;
    --system-fontSize-xl: 1.25rem;
    --system-fontSize-2xl: 1.5rem;
    --system-fontSize-3xl: 1.875rem;
    --system-fontSize-4xl: 2.25rem;
    --system-fontSize-5xl: 3rem;
    --system-fontSize-6xl: 3.75rem;
    --system-fontSize-7xl: 4.5rem;
    --system-fontSize-8xl: 6rem;
    --system-fontSize-9xl: 8rem;

    /**font weights */
    --system-fontWeight-hairline: 100;
    --system-fontWeight-thin: 200;
    --system-fontWeight-light: 300;
    --system-fontWeight-normal: 400;
    --system-fontWeight-medium: 500;
    --system-fontWeight-semibold: 600;
    --system-fontWeight-bold: 700;
    --system-fontWeight-extrabold: 800;
    --system-fontWeight-black: 900;

    /**line height */
    --system-fontHeight-normal: normal;
    --system-fontHeight-none: 1;
    --system-fontHeight-shorter: 1.25;
    --system-fontHeight-short: 1.375;
    --system-fontHeight-base: 1.5;
    --system-fontHeight-tall: 1.625;
    --system-fontHeight-taller: 2;
    --system-fontHeight-3: 0.75rem;
    --system-fontHeight-4: 1rem;
    --system-fontHeight-5: 1.25rem;
    --system-fontHeight-6: 1.5rem;
    --system-fontHeight-7: 1.75rem;
    --system-fontHeight-8: 2rem;
    --system-fontHeight-9: 2.25rem;
    --system-fontHeight-10: 2.5rem;

    /* letter spacing */
    --system-letterSpacing-tighter: -0.05em;
    --system-letterSpacing-tight: -0.025em;
    --system-letterSpacing-normal: 0;
    --system-letterSpacing-wide: 0.025em;
    --system-letterSpacing-wider: 0.05em;
    --system-letterSpacing-widest: 0.1em;

    /* sizes */

    /* --size-05: 0.125rem; */
    /* --size-15: 0.375rem; */
    /* --size-25: 0.625rem; */
    /* --size-35: 0.875rem; */
    --size-px: 1px;
    --size-0: 0;
    --size-1: 0.25rem;
    --size-2: 0.5rem;
    --size-3: 0.75rem;
    --size-4: 1rem;
    --size-5: 1.25rem;
    --size-6: 1.5rem;
    --size-7: 1.75rem;
    --size-8: 2rem;
    --size-9: 2.25rem;
    --size-10: 2.5rem;
    --size-12: 3rem;
    --size-14: 3.5rem;
    --size-16: 4rem;
    --size-20: 5rem;
    --size-24: 6rem;
    --size-28: 7rem;
    --size-32: 8rem;
    --size-36: 9rem;
    --size-40: 10rem;
    --size-44: 11rem;
    --size-48: 12rem;
    --size-52: 13rem;
    --size-56: 14rem;
    --size-60: 15rem;
    --size-64: 16rem;
    --size-72: 18rem;
    --size-80: 20rem;
    --size-96: 24rem;
    --size-max: max-content;
    --size-min: min-content;
    --size-full: 100%;
    --size-3xs: 14rem;
    --size-2xs: 16rem;
    --size-xs: 20rem;
    --size-sm: 24rem;
    --size-md: 28rem;
    --size-lg: 32rem;
    --size-xl: 36rem;
    --size-2xl: 42rem;
    --size-3xl: 48rem;
    --size-4xl: 56rem;
    --size-5xl: 64rem;
    --size-6xl: 72rem;
    --size-7xl: 80rem;
    --size-8xl: 90rem;

    /* radii */
    --radius-none: 0;
    --radius-sm: 0.125rem;
    --radius-base: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-full: 9999px;

    /* colors */
    --colors-iconGray: hsl(0, 0%, 30%);
    --color-red50: hsl(0, 100%, 98%);
    --color-red100: hsl(0, 95%, 92%);
    --color-red200: hsl(0, 97%, 85%);
    --color-red300: hsl(0, 95%, 75%);
    --color-red400: hsl(0, 88%, 68%);
    --color-red500: hsl(0, 76%, 57%);
    --color-red600: hsl(0, 61%, 48%);
    --system-palette-transparent: transparent;
    --system-palette-white: hsl(0, 0%, 100%);
    --system-palette-white95: hsla(0, 0%, 100%, 0.95);
    --system-palette-white90: hsla(0, 0%, 100%, 0.9);
    --system-palette-white80: hsla(0, 0%, 100%, 0.8);
    --system-palette-white70: hsla(0, 0%, 100%, 0.7);
    --system-palette-white60: hsla(0, 0%, 100%, 0.6);
    --system-palette-white50: hsla(0, 0%, 100%, 0.5);
    --system-palette-white40: hsla(0, 0%, 100%, 0.4);
    --system-palette-white30: hsla(0, 0%, 100%, 0.3);
    --system-palette-white20: hsla(0, 0%, 100%, 0.2);
    --system-palette-white15: hsla(0, 0%, 100%, 0.15);
    --system-palette-white12: hsla(0, 0%, 100%, 0.12);
    --system-palette-white10: hsla(0, 0%, 100%, 0.1);
    --system-palette-white07: hsla(0, 0%, 100%, 0.07);
    --system-palette-white05: hsla(0, 0%, 100%, 0.05);
    --system-palette-white02: hsla(0, 0%, 100%, 0.02);
    --system-palette-black: hsl(0, 0%, 0%);
    --system-palette-black95: hsla(0, 0%, 0%, 0.95);
    --system-palette-black90: hsla(0, 0%, 0%, 0.9);
    --system-palette-black80: hsla(0, 0%, 0%, 0.8);
    --system-palette-black70: hsla(0, 0%, 0%, 0.7);
    --system-palette-black60: hsla(0, 0%, 0%, 0.6);
    --system-palette-black50: hsla(0, 0%, 0%, 0.5);
    --system-palette-black40: hsla(0, 0%, 0%, 0.4);
    --system-palette-black30: hsla(0, 0%, 0%, 0.3);
    --system-palette-black20: hsla(0, 0%, 0%, 0.2);
    --system-palette-black15: hsla(0, 0%, 0%, 0.15);
    --system-palette-black12: hsla(0, 0%, 0%, 0.12);
    --system-palette-black10: hsla(0, 0%, 0%, 0.1);
    --system-palette-black07: hsla(0, 0%, 0%, 0.07);
    --system-palette-black05: hsla(0, 0%, 0%, 0.05);
    --system-palette-black02: hsla(0, 0%, 0%, 0.02);
    --system-palette-gray02: hsl(0, 0%, 2%);
    --system-palette-gray04: hsl(0, 0%, 4%);
    --system-palette-gray06: hsl(0, 0%, 6%);
    --system-palette-gray08: hsl(0, 0%, 8%);
    --system-palette-gray10: hsl(0, 0%, 10%);
    --system-palette-gray14: hsl(0, 0%, 14%);
    --system-palette-gray19: hsl(0, 0%, 19%);
    --system-palette-gray24: hsl(0, 0%, 24%);
    --system-palette-gray37: hsl(0, 0%, 37%);
    --system-palette-gray54: hsl(0, 0%, 54%);
    --system-palette-gray70: hsl(0, 0%, 70%);
    --system-palette-gray83: hsl(0, 0%, 83%);
    --system-palette-gray92: hsl(0, 0%, 92%);
    --system-palette-gray95: hsl(0, 0%, 95%);
    --system-palette-gray97: hsl(0, 0%, 97%);
    --system-palette-gray98: hsl(0, 0%, 98%);
    --system-palette-gray99: hsl(0, 0%, 99%);

    /* shadow */
    --system-shadow-1: 0px 1px 2px 0px rgba(0, 0, 0, 0.1),
      0px 2px 10px 0px rgba(0, 0, 0, 0.08);
    --system-shadow-2: 0 6px 12px 0 rgba(0, 0, 0, 0.04),
      0 0 0 1px rgba(0, 0, 0, 0.04);
    --system-shadow-3: 0 6px 8px 0 rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(0, 0, 0, 0.04);
    --system-shadow-4: 0 8px 12px 0 rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(0, 0, 0, 0.04);
  }
`;

export default rootThemeConfigs;
