import { cssFocusVisible, styled } from "../theme";

export const StyledBox = styled(
    'div', {
      variants: {
        display: {
          block: {
            display: 'block',
          },
          flex: {
            display: 'flex',
            flexWrap: 'wrap',
            width: "100%",
            "&>*": {
              flex: '1 0 0%',
              width: "100%",
              maxWidth: "100%",
            },
          },
          table: {
            display: 'table',
          },
          inlineBlock: {
            display: 'inline-block'
          },
        },
        height: {
          full: {
            height: '100vh'
          },
        }
      },
      defaultVariants: {
      }
    },
    cssFocusVisible
  );
  