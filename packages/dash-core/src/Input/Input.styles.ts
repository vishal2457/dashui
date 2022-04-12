import { cssFocusVisible, styled, VariantProps } from "../..theme/stitches.config";

export const StyledInput = styled(
    'input', {
      // my: 0,
      position: 'relative',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '$borderLight',
      transition: '$default',
      variants: {
        size: {
          xs: {
            height: '$9',
            p: "$2",
            width: 'auto',
            minWidth: '$20',
            fontSize: '$tiny',
            br: '$xs'
          },
          sm: {
            height: '$11',
            width: 'auto',
            p: "$3",
            minWidth: '$36',
            fontSize: '$xs',
            br: '$sm'
          },
          md: {
            height: '$14',
            width: 'auto',
            minWidth: '$48',
            fontSize: '$xs',
            br: '$md'
          },
          lg: {
     
            height: '$15',
            width: 'auto',
            minWidth: '$60',
            fontSize: '$base',
            br: '$base'
          },
          xl: {
            height: '$17',
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
        size: 'sm',
      }
    },
    cssFocusVisible
  );
  
export type InputVariantsProps = VariantProps<typeof StyledInput>;
