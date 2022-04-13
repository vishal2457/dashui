import { cssFocusVisible, styled } from "../theme";


export const StyledInputWrapper= styled(
    'div', {
        textAlign: 'left',
        marginBottom: 15,
        variants: {
            position: {
                left: {
                    textAlign: 'left'
                },
                right: {
                    textAlign: 'right'
                },
                center: {
                    textAlign: "center"
                }
            }
        },
        defaultVariants: {
            position: "left"
        }
    },
    cssFocusVisible
  );
  