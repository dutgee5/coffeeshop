import { createFont, createTamagui, createTokens, getFontSizeToken } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { tokens, themes } from '@tamagui/config/v3'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from '@my/ui/src/animations'
import { getConfig, getTokens } from '@tamagui/core'

const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

const interFont = createFont({
  family: 'Sora',
  size: {
    1: 32,
    2: 20,
    3: 18,
    4: 16,
    5: 14,
    6: 12,
  },
  lineHeight: {
    /* px ? */ 1: 48,
    2: 30,
    3: 27,
    4: 24,
    5: 21,
    6: 19.2,
    7: 18,
    8: 16.8,
    9: 14.4,
  },
  weight: {},
  letterSpacing: {},
})

export const token = createTokens({
  /* name */
  color: {
    brown: '#C67C4E',
    skin_tone: '#EDD6C8',
    black: '#313131',
    gray: '#E3E3E3',
    white: '#F9F2ED',
  },
  space: {},
  size: {},
  radius: {},
  zIndex: {},
  icon: {
    small: 16,
  },
})
export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,

  // highly recommended to turn this on if you are using shorthands
  // to avoid having multiple valid style keys that do the same thing
  // we leave it off by default because it can be confusing as you onboard.
  onlyAllowShorthands: false,
  shorthands,

  fonts: {
    body: bodyFont,
    heading: headingFont,
    inter: interFont,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
  themes,
  token,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

// for the compiler to find it
export default config
