import { darkColors, defaultTokens, defaultUtils, lightColors, shadows } from './common';
import { createStitches, createTheme } from '@stitches/react';
import type * as Stitches from '@stitches/react';



const stitches = createStitches({
    theme: {
      ...defaultTokens,
      colors:lightColors,
      shadows: {
        ...shadows
      },
    },
    utils: defaultUtils,
    media: {
      bp1: '(min-width: 480px)',
    },
  });

  export const cssFocusVisible = stitches.css({
    variants: {
      isFocusVisible: {
        true: {
          outline: 'none',
          boxShadow:
            '0 0 0 2px $colors$background, 0 0 0 4px $colors$primary !important'
        }
      }
    }
  });

  export const darkTheme = createTheme({ 
      colors:darkColors,
      shadows: {
        ...shadows
      },
  });

  export type VariantProps<T> = Stitches.VariantProps<T>;
  export const {theme, styled, keyframes} = stitches;
