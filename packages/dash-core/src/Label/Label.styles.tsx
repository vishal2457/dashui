import * as LabelPrimitive from "@radix-ui/react-label";
import { styled, VariantProps } from "../theme";

export const StyledLabel = styled(LabelPrimitive.Root, {
  userSelect: "none",
  lineHeight: 1,
  paddingLeft: 15,
  variants: {
    showCursor: {
      true: {
        cursor: "pointer",
      },
    },
  },
});

export const RequiredSpan = styled("span", {
  color: "red",
 
});

export type LabelVariantProps = VariantProps<typeof StyledLabel>;
