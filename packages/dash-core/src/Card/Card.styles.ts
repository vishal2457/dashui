import { styled } from "../theme/stitches.config";


export const StyledCard = styled('div', {
  margin: "$4",
  padding: "$4",
  borderRadius: "$md",
  position: 'relative',
  display: 'inline',
  // overflow: 'hidden',
  height: 'auto',
  boxSizing: 'border-box',
  variants: {
    color: {
        default: {
          backgroundColor: "$whiteA12"
        },
        
      },
      //bordered
    bordered: {
        true: {
          borderStyle: 'solid',
          borderColor: '$gray6'
        },
        false: {
          borderWidth: 0
        }
      },
      //clickable
      clickable: {
        true: {
          cursor: 'pointer',
          us: 'none',
          WebkitTapHighlightColor: 'transparent',
          '&:focus:not(&:focus-visible)': {
            boxShadow: 'none'
          },
          '&:focus': {
            outline: 'none',
          },
          '@safari': {
            WebkitTapHighlightColor: 'transparent',
            outline: 'none'
          }
        }
      },
      //shadow
      shadow: {
        true: {
          boxShadow: "$sm"
        }
      },
      //hoverable
      hoverable: {
        true: {
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '$md'
          }
        }
      },
      animated: {
        true: {
          transition: '$default'
        },
        false: {
          transition: 'none'
        }
      },
  },
  compoundVariants: [
    // clickable && animated
    {
      clickable: true,
      animated: true,
      css: {
        '&:active': {
          scale: 0.97
        }
      }
    }
  ],
  defaultVariants: {
    color: 'default',
    animated: true,
    bordered: false,
    shadow: true,
    clickable: false
  }
})