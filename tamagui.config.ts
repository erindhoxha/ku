// @tamagui/core doesn't include `createMedia` so that it can avoid
// a dependency on react-native. If you are using tamagui, you can
// import createMedia from there directly and avoid this line:
import { createMedia } from '@tamagui/react-native-media-driver';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
import { createFont, createTamagui, createTokens } from 'tamagui';

// Create a font:

// To work with the tamagui UI kit styled components (which is optional)
// you'd want the keys used for `size`, `lineHeight`, `weight` and
// `letterSpacing` to be consistent. The `createFont` function
// will fill-in any missing values if `lineHeight`, `weight` or
// `letterSpacing` are subsets of `size`.

const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    8: 20,
    9: 24,
    10: 42,
  },
  lineHeight: {
    1: 22,
    2: 24,
    3: 20,
    4: 28,
    8: 30,
    9: 42,
    10: 46,
  },
  weight: {
    1: '300',
    2: '400',
    3: '600',
  },
  letterSpacing: {
    1: 0,
    2: -1,
    3: 0,
    // 3 will be -1
  },
  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
  },
});

// Set up our tokens

// The keys can be whatever you want, but we do recommend keeping them
// consistent across the different token categories and intended for
// usage together to make nice designs - eg for a Button to use.

const size = {
  0: 0,
  1: 12,
  2: 16,
  3: 24,
  4: 32,
  true: 32,
  8: 36,
  9: 42,
  10: 46,
};

export const tokens = createTokens({
  size,
  space: { ...size },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#000',
    blue: 'rgb(33, 103, 194)',
    green: 'rgb(12, 115, 12)',
  },
});

const config = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: interFont,
    body: interFont,
  },
  tokens,

  // For more on themes, see the Themes page
  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
    blue: {
      background: tokens.color.blue,
      color: tokens.color.white,
    },
    green: {
      background: tokens.color.green,
      color: tokens.color.white,
    },
  },

  // For web-only, media queries work out of the box and you can avoid the
  // `createMedia` call here by passing the media object directly.
  // If you are going to target React Native, use `createMedia` (it's an identity
  // function on web so you can import it there without concern).
  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),

  // Shorthands
  // Adds <View m={10} /> to <View margin={10} />
  // See Settings section on this page to only allow shorthands
  // Be sure to have `as const` at the end
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
  } as const,

  // Change the default props for any styled() component with a name.
  // We are discouraging the use of this and have deprecated it, prefer to use
  // styled() on any component to change it's styles.
  defaultProps: {
    Text: {
      color: 'green',
    },
  },
});

type AppConfig = typeof config;

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}

  // if you want types for group styling props, define them like so:
  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c';
  }
}

export default config;
