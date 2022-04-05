// import { cssFocusVisible, styled } from "../theme/stitches.config";

import { styled, cssFocusVisible } from "../theme/stitches.config";

export const StyledLabel= styled(
    'label', {
        display: 'block',
        variants: {
          size: {
            xs: {
              lh: '$space$7',
              width: 'auto',
              fontSize: '$tiny',
              mb: '$1'
            },
            sm: {
              lh: '$space$9',
              width: 'auto',
              fontSize: '$xs',
              mb: '$1'
            },
            md: {
              $$buttonPadding: '$space$7',
              px: '$7',
              height: '$14',
              lh: '$space$14',
              width: 'auto',
              minWidth: '$48',
              fontSize: '$xs',
              br: '$md'
            },
            lg: {
              $$buttonPadding: '$space$9',
              px: '$9',
              height: '$15',
              lh: '$space$15',
              width: 'auto',
              minWidth: '$60',
              fontSize: '$base',
              br: '$base'
            },
            xl: {
              $$buttonPadding: '$space$10',
              px: '$10',
              height: '$17',
              lh: '$space$17',
              width: 'auto',
              minWidth: '$72',
              fontSize: '$sm',
              br: '$xl'
            }
          },
          color: { 
            default: {
              backgroundColor: "transparent",
              '&:focus': {
                $$bsColor: '$colors$indigo4',
                boxShadow: '0 0 0 0.25rem $$bsColor',
                outline: 0,
              },
            }
          },
          rounded: {
            true: {
              br: '$pill'
            }
          },
          error: {
            true: {
              borderColor: 'red',
              '&:focus': {
                boxShadow: '0 0 0 0.25rem rgba(255,0,0,0.2)',
              },
            }
          },
          success: {
            true: {
              borderColor: 'green',
              '&:focus': {
                boxShadow: '0 0 0 0.25rem rgba(0,128,0,0.2)',
              },
            }
          },
        },
        defaultVariants: {
          color: 'default',
          // weight: 'normal',
          // style: 'normal',
          size: 'sm',
        }
    },
    cssFocusVisible
  );
  