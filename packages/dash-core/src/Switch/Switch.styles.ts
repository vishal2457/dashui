import { blackA } from '@radix-ui/colors';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled, VariantProps } from 'theme/stitches.config';

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  bg: "$bg2",
  $$bc: "$colors$border",
  borderRadius: '9999px',
  borderWidth: "1px",
  borderColor: "$$bc",
  borderStyle: "solid",
  position: 'relative',
  px: "$1",
  $$bxShadow: "$colors$bg3",
  boxShadow: `0 2px 10px $$bxShadow`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 1.2px $$bc` },
  '&[data-state="checked"]': { backgroundColor: "$bgSolid1" },

  variants: {
    size: {
      xs: {
        width: 30,
        height: 15
      },
      sm: {
        width: 35,
        height: 20
      },
      md: {
        width: 40,
        height: 25
      },
      lg: {
        width: 50,
        height: 30
      },
      xl: {
        width: 55,
        height: 35
      },
    }
  },
  defaultVariants: {
    size: "md"
  }

});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  backgroundColor: "$pText1",
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 150ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)', bg: "$bg3" },
  variants: {
    size: {
      xs: {
        width: 12,
        height: 12
      },
      sm: {
        width: 16,
        height: 16
      },
      md: {
        width: 21,
        height: 21
      },
      lg: {
        width: 26,
        height: 26
      },
      xl: {
        width: 31,
        height: 31
      },
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// Exports
export const SwitchThumb = StyledThumb;

export type SwitchVariantProps = VariantProps<typeof StyledSwitch>;

// Your app...
export const Flex = styled('div', { display: 'flex' });
