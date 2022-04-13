import { styled, VariantProps } from "../theme";

export const StyledSpacer = styled('span', {
    variants: {
       inline: {
           true: {
                display: "inline"
           },
           false :{
               display: "block"
           }
       }
    },
    defaultVariants: {
        inline: false
    }
});

export type SpacerVariantsProps = VariantProps<typeof StyledSpacer>;
