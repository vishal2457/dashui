import { keyframes, styled } from "../theme/stitches.config";

const expand = keyframes({
    '0%': {
      opacity: 0,
      transform: 'scale(0.25)'
    },
    '30%': {
      opacity: 1
    },
    '80%': {
      opacity: 0.5
    },
    '100%': {
      transform: 'scale(28)',
      opacity: 0
    }
  });

export const StyledDrip = styled('div', {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    '& svg': {
      position: 'absolute',
      animation: `350ms linear ${expand}`,
      animationFillMode: 'forwards',
      width: '$md',
      height: '$md'
    }
  });