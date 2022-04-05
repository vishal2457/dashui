import { cssFocusVisible, styled, VariantProps } from "../theme/stitches.config";

export const StyledCheckbox = styled(
  'input', {
    // my: 0,
    position: 'relative',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$borderLight',
    "&:before" : {
        content: '',
        position: 'absolute',
        display: 'block',
        borderRadius: 2,
        borderWidth: 2,
        borderStyle: 'solid',
        height: '100%',
          width: '100%',
          borderColor: '$indigo9',
          backgroundColor: 'white'
    },
    "&:checked:after" : {
      content: '',
      position: 'absolute',
      display: 'block',
      borderRadius: '2',
      borderWidth: 2,
      borderStyle: 'solid',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: '$indigo9',
      borderBottomColor: '$indigo9',
      transform: 'rotate(-45deg)',
      height: 4,
      width: 8,
      marginLeft: 4,
      marginTop: 3,
      // backgroundColor: '$indigo9',
    },
    variants: {
      size: {
        xs: {
          height: '10',
          width: '10',
        },
        sm: {
          height: 15,
          width: 15,
        },
        md: {
          height: 20,
          width: 20,
        },
        lg: {
          height: 25,
          width: 25,
        },
        xl: {
          height: 30,
          width: 30,
        }
      },
      color: { 
        default: {
          backgroundColor: "transparent",
          color: '$indigo4',
          "&:before" : {
                borderColor: '$indigo9',
                backgroundColor: 'white'
          },
          "&:checked:after" : {
            // backgroundColor: '$indigo9',
          },
        }
      },
      error: {
        true: {
          borderColor: 'red',
        }
      },
      success: {
        true: {
          borderColor: 'green',
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
  

export type CheckboxVariantsProps = VariantProps<typeof StyledCheckbox>;
