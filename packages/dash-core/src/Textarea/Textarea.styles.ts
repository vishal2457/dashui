import { cssFocusVisible, styled } from "../..theme/stitches.config";
import { StyledDrip } from "../utils";

export const StyledTextarea = styled(
    'textarea', {
      // my: 0,
      position: 'relative',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '$borderLight',
      transition: '$default',
      width: '100%',
      variants: {
        size: {
          xs: {
            $$buttonPadding: '$space$3',
            px: '$3',
            height: '$10',
            lh: '$space$10',
            // width: 'auto',
            minWidth: '$20',
            fontSize: '$tiny',
            // br: '$xs'
          },
          sm: {
            $$buttonPadding: '$space$5',
            px: '$5',
            height: '$11',
            lh: '$space$12',
            // width: 'auto',
            minWidth: '$36',
            fontSize: '$xs',
            // br: '$sm'
          },
          md: {
            $$buttonPadding: '$space$7',
            px: '$7',
            height: '$14',
            lh: '$space$14',
            // width: 'auto',
            minWidth: '$48',
            fontSize: '$xs',
            // br: '$md'
          },
          lg: {
            $$buttonPadding: '$space$9',
            px: '$9',
            height: '$15',
            lh: '$space$15',
            // width: 'auto',
            minWidth: '$60',
            fontSize: '$base',
            // br: '$base'
          },
          xl: {
            $$buttonPadding: '$space$10',
            px: '$10',
            height: '$17',
            lh: '$space$17',
            // width: 'auto',
            minWidth: '$72',
            fontSize: '$sm',
            // br: '$xl'
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
  