import { cssFocusVisible, styled } from "../..theme/stitches.config";
import { StyledDrip } from "../utils";

export const StyledBadge = styled(
    'span',
    {
      variants: {
        position: {
          topLeft: {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(-50%, -50%)',
          },
          topRight: {
            position: 'absolute',
            right: 0,
            top: 0,
            transform: 'translate(50%, -50%)',
          },
          bottomLeft: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            transform: 'translate(-50%, 50%)',
          },
          bottomRight: {
            position: 'absolute',
            right: 0,
            bottom: 0,
            transform: 'translate(50%, 50%)',
          },
        },
        type: {
          dot: {
            p: '$3',
          }
        },
        bordered: {
          true: {
            bg: 'transparent',
            borderStyle: 'solid',
            color: '$text'
          }
        },
        ghost: {
          true: {
              bg: "transparent",
              borderStyle: 'solid',
              color: 'black',

            '&:hover': {
              color: 'black',
              borderColor: "$indigo9"
            }
          }
        },
        color: { 
          default: {
            backgroundColor: "$indigo9",
            color: "$whiteA12"
          },
          red: {
            backgroundColor: "red",
            color: "$whiteA12"
          },
          orange: {
            backgroundColor: "orange",
            color: "$whiteA12"
          },
          yellow: {
            backgroundColor: "yellow",
            color: "$whiteA12"
          }
        },
        size: {
          xs: {
            $$buttonPadding: '$space$3',
            px: '$3',
            height: '$10',
            lh: '$space$10',
            width: 'auto',
            minWidth: '$20',
            fontSize: '$tiny',
            br: '$xs'
          },
          sm: {
            $$buttonPadding: '$space$5',
            px: '$5',
            height: '$12',
            lh: '$space$14',
            width: 'auto',
            minWidth: '$36',
            fontSize: '$xs',
            br: '$sm'
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
        borderWeight: {
          light: {
            bw: '$light'
          },
          normal: {
            bw: '$normal'
          },
          bold: {
            bw: '$bold'
          },
          extrabold: {
            bw: '$extrabold'
          },
          black: {
            bw: '$black'
          }
        },
        flat: {
          true: {
            color: '$text'
          }
        },
        light: {
          true: {
            bg: 'transparent',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                opacity: 0.8,
                fill: '$accents2'
              }
            }
          }
        },
        shadow: {
          true: {
            bs: '$sm'
          }
        },
        disabled: {
          true: {
            bg: '$accents2',
            color: '$accents4',
            cursor: 'not-allowed',
            pe: 'auto',
            '&:hover': {
              opacity: 1
            }
          }
        },
        // clickable: {
        //   false: {
        //     cursor: 'default',
        //     pe: 'none'
        //   }
        // },
        // animated: {
        //   true: {
        //     '&:active': {
        //       transform: 'scale(0.94)'
        //     }
        //   },
        //   false: {
        //     transition: 'none'
        //   }
        // },
        auto: {
          true: {
            width: 'auto',
            minWidth: 'min-content'
          }
        },
        rounded: {
          true: {
            br: '$pill'
          }
        }
      },
      compoundVariants: [
        // size / auto
        {
          auto: true,
          size: 'xs',
          css: {
            px: '$5',
            minWidth: 'min-content'
          }
        },
        {
          auto: true,
          size: 'sm',
          css: {
            px: '$8',
            minWidth: 'min-content'
          }
        },
        {
          auto: true,
          size: 'md',
          css: {
            px: '$9',
            minWidth: 'min-content'
          }
        },
        {
          auto: true,
          size: 'lg',
          css: {
            px: '$10',
            minWidth: 'min-content'
          }
        },
        {
          auto: true,
          size: 'xl',
          css: {
            px: '$11',
            minWidth: 'min-content'
          }
        },
        // animated / disabled
        {
          disabled: true,
          css: {
            '&:active': {
              transform: 'none'
            }
          }
        },
        // shadow / color
        {
          shadow: true,
          color: 'default',
          css: {
            normalShadow: '$primaryShadow'
          }
        },
        {
          shadow: true,
          color: 'primary',
          css: {
            normalShadow: '$primaryShadow'
          }
        },
        {
          shadow: true,
          color: 'secondary',
          css: {
            normalShadow: '$secondaryShadow'
          }
        },
        {
          shadow: true,
          color: 'warning',
          css: {
            normalShadow: '$warningShadow'
          }
        },
        {
          shadow: true,
          color: 'success',
          css: {
            normalShadow: '$successShadow'
          }
        },
        {
          shadow: true,
          color: 'error',
          css: {
            normalShadow: '$errorShadow'
          }
        },
        {
          shadow: true,
          color: 'gradient',
          css: {
            normalShadow: '$primaryShadow'
          }
        },
        // light / color
        {
          light: true,
          color: 'default',
          css: {
            bg: 'transparent',
            color: '$text'
          }
        },
        {
          light: true,
          color: 'primary',
          css: {
            bg: 'transparent',
            color: '$primary'
          }
        },
        {
          light: true,
          color: 'secondary',
          css: {
            bg: 'transparent',
            color: '$secondary'
          }
        },
        {
          light: true,
          color: 'warning',
          css: {
            bg: 'transparent',
            color: '$warning'
          }
        },
        {
          light: true,
          color: 'success',
          css: {
            bg: 'transparent',
            color: '$success'
          }
        },
        {
          light: true,
          color: 'error',
          css: {
            bg: 'transparent',
            color: '$error'
          }
        },
        // bordered / color
        {
          bordered: true,
          color: 'default',
          css: {
            bg: 'transparent',
            borderColor: '$indigo9',
            color: '$indigo9',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                fill: '$indigo9'
              }
            }
          }
        },
        {
          bordered: true,
          color: 'primary',
          css: {
            bg: 'transparent',
            borderColor: '$primary',
            color: '$primary',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                fill: '$primary'
              }
            }
          }
        },
        {
          bordered: true,
          color: 'secondary',
          css: {
            bg: 'transparent',
            borderColor: '$secondary',
            color: '$secondary',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                fill: '$secondary'
              }
            }
          }
        },
        {
          bordered: true,
          color: 'success',
          css: {
            bg: 'transparent',
            borderColor: '$success',
            color: '$success',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                fill: '$success'
              }
            }
          }
        },
        {
          bordered: true,
          color: 'warning',
          css: {
            bg: 'transparent',
            borderColor: '$warning',
            color: '$warning',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                fill: '$warning'
              }
            }
          }
        },
        {
          bordered: true,
          color: 'error',
          css: {
            bg: 'transparent',
            borderColor: '$error',
            color: '$error',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                fill: '$error'
              }
            }
          }
        },
        {
          bordered: true,
          color: 'gradient',
          css: {
            bg: 'transparent',
            color: '$text',
            padding: '$1',
            bgClip: 'content-box, border-box',
            borderColor: '$primary',
            backgroundImage:
              'linear-gradient($background, $background), $gradient',
            border: 'none',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                fill: '$secondary'
              }
            }
          }
        },
        // ghost / color
        {
          ghost: true,
          color: 'default',
          css: {
            '&:hover': {
              bg: '$indigo9'
            }
          }
        },
        {
          ghost: true,
          color: 'primary',
          css: {
            '&:hover': {
              bg: '$primary'
            }
          }
        },
        {
          ghost: true,
          color: 'secondary',
          css: {
            '&:hover': {
              bg: '$secondary'
            }
          }
        },
        {
          ghost: true,
          color: 'success',
          css: {
            '&:hover': {
              bg: '$success'
            }
          }
        },
        {
          ghost: true,
          color: 'warning',
          css: {
            '&:hover': {
              bg: '$warning'
            }
          }
        },
        {
          ghost: true,
          color: 'error',
          css: {
            '&:hover': {
              bg: '$error'
            }
          }
        },
        {
          ghost: true,
          color: 'gradient',
          css: {
            '&:hover': {
              bg: '$gradient'
            }
          }
        },
        // flat / color
        {
          flat: true,
          color: 'default',
          css: {
            bg: '$primaryLight',
            color: '$primary',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                opacity: 0.4,
                fill: '$primary'
              }
            }
          }
        },
        {
          flat: true,
          color: 'primary',
          css: {
            bg: '$primaryLight',
            color: '$primary',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                opacity: 0.4,
                fill: '$primary'
              }
            }
          }
        },
        {
          flat: true,
          color: 'secondary',
          css: {
            bg: '$secondaryLight',
            color: '$secondary',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                opacity: 0.4,
                fill: '$secondary'
              }
            }
          }
        },
        {
          flat: true,
          color: 'success',
          css: {
            bg: '$successLight',
            color: '$success',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                opacity: 0.4,
                fill: '$success'
              }
            }
          }
        },
        {
          flat: true,
          color: 'warning',
          css: {
            bg: '$warningLight',
            color: '$warning',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                opacity: 0.4,
                fill: '$warning'
              }
            }
          }
        },
        {
          flat: true,
          color: 'error',
          css: {
            bg: '$errorLight',
            color: '$error',
            [`& ${StyledDrip}`]: {
              '.nextui-drip-filler': {
                opacity: 0.4,
                fill: '$error'
              }
            }
          }
        },
        // border-weight / gradient-color / bordered
        {
          bordered: true,
          color: 'gradient',
          borderWeight: 'light',
          css: {
            padding: '$borderWeights$light'
          }
        },
        {
          bordered: true,
          color: 'gradient',
          borderWeight: 'normal',
          css: {
            padding: '$borderWeights$normal'
          }
        },
        {
          bordered: true,
          color: 'gradient',
          borderWeight: 'bold',
          css: {
            padding: '$borderWeights$bold'
          }
        },
        {
          bordered: true,
          color: 'gradient',
          borderWeight: 'extrabold',
          css: {
            padding: '$borderWeights$extrabold'
          }
        },
        {
          bordered: true,
          color: 'gradient',
          borderWeight: 'black',
          css: {
            padding: '$borderWeights$black'
          }
        },
        // size / auto / gradient-color / bordered
        {
          auto: true,
          color: 'gradient',
          bordered: true,
          size: 'xs',
          css: {
            px: '$1',
            py: '$1',
            '.nextui-button-text': {
              px: '$5'
            }
          }
        },
        {
          auto: true,
          color: 'gradient',
          bordered: true,
          size: 'sm',
          css: {
            px: '$1',
            py: '$1',
            '.nextui-button-text': {
              px: '$8'
            }
          }
        },
        {
          auto: true,
          color: 'gradient',
          bordered: true,
          size: 'md',
          css: {
            px: '$1',
            py: '$1',
            '.nextui-button-text': {
              px: '$9'
            }
          }
        },
        {
          auto: true,
          color: 'gradient',
          bordered: true,
          size: 'lg',
          css: {
            px: '$1',
            py: '$1',
            '.nextui-button-text': {
              px: '$14'
            }
          }
        },
        {
          auto: true,
          color: 'gradient',
          bordered: true,
          size: 'xl',
          css: {
            px: '$1',
            py: '$1',
            '.nextui-button-text': {
              px: '$12'
            }
          }
        },
        // rounded && size
        {
          rounded: true,
          size: 'xs',
          css: {
            br: '$pill'
          }
        },
        {
          rounded: true,
          size: 'sm',
          css: {
            br: '$pill'
          }
        },
        {
          rounded: true,
          size: 'md',
          css: {
            br: '$pill'
          }
        },
        {
          rounded: true,
          size: 'lg',
          css: {
            br: '$pill'
          }
        },
        {
          rounded: true,
          size: 'xl',
          css: {
            br: '$pill'
          }
        }
      ],
      defaultVariants: {
        color: "default",
        borderWeight: 'normal',
        // animated: true,
        size: 'xs',
      }
    },
    cssFocusVisible
  );
  