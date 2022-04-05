import { useId } from "@dash/utils";
import React from "react";
import Box from "../Box/Box";
import Label from "../Label/Label";
import { CheckboxVariantsProps, StyledCheckbox } from "./Checkbox.styles";

interface Props {
  checked?: boolean;
  value?: string | number;
  disabled?: boolean;
  preventDefault?: boolean;
  size?: string;
  color?: string;
  textColor?: any;
}

type LabelProps = {
  label: string;
};

type NativeAttrs = Omit<React.InputHTMLAttributes<unknown>, keyof Props>;
type CheckboxProps = NativeAttrs & CheckboxVariantsProps & LabelProps & Props;

const Checkbox = ({ label, ...rest }: CheckboxProps) => {
      const checkBoxID = useId(rest.id);
  return (
    <Box>
      <StyledCheckbox type="checkbox" {...rest} id={checkBoxID} />
      {label ? (
        <Label label={label} htmlFor={checkBoxID} required={rest.required} />
      ) : null}
    </Box>
  );
};

export default Checkbox;
