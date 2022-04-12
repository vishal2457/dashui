import { useId } from "../../utils/hooks/useId";
import React from "react";
import Box from "../Box/Box";
import Label from "../Label/Label";
import {  RadioVariantsProps, RadioGroupRadio, RadioGroupIndicator } from "./Radio.styles";

interface Props {
  checked?: boolean;
  value?: string | number;
  disabled?: boolean;
  preventDefault?: boolean;
  // onChange?: (e: RadioEvent) => void;
  size?: string;
  color?: string;
  textColor?: any;
}

type LabelProps = {
  label: string;
};

type NativeAttrs = Omit<React.InputHTMLAttributes<unknown>, keyof Props>;
type RadioProps = NativeAttrs & RadioVariantsProps & LabelProps & Props;

const Radio = ({ label, ...rest }: RadioProps) => {
  const radioID = useId(rest.id)

  return (
      <Box>
        <RadioGroupRadio value={rest.value} id={radioID} size={rest.size}>
          <RadioGroupIndicator size={rest.size} />
        </RadioGroupRadio>
        {label ? (
        <Label label={label} htmlFor={radioID} required={rest.required} />
      ) : null}
      </Box>      
  );
};

export default Radio;
