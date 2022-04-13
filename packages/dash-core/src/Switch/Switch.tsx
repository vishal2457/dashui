import { useId } from "@dash/utils";
import React from "react";
import Label from "../Label/Label";
import {
  SwitchThumb,
  Flex,
  StyledSwitch,
  SwitchVariantProps,
} from "./Switch.styles";

type defaultProps = {
  label: string;
  id?: string;
  labelLeft?: boolean;
  checked: boolean;
  onChange: (val: boolean) => void;
  size?: string;
};
type propTypes = defaultProps & SwitchVariantProps;

function Switch({
  label,
  id,
  labelLeft,
  checked = false,
  onChange,
  size,
}: propTypes) {
  let SwitchID = useId(id);
  return (
    <Flex css={{ alignItems: "center" }}>
      {labelLeft ? (
        <Label htmlFor={SwitchID} css={{ paddingRight: 15 }} label={label} />
      ) : null}
      <StyledSwitch
        size={size}
        defaultChecked
        id={SwitchID}
        checked={checked}
        onCheckedChange={onChange}
      >
        <SwitchThumb size={size} />
      </StyledSwitch>
      {!labelLeft ? (
        <Label htmlFor={SwitchID} css={{ paddingRight: 15 }} label={label} />
      ) : null}
    </Flex>
  );
}

export default Switch;
