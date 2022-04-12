import DropdownStyled from "../../Dropdown/Dropdown";
import Text from "../../Text/Text";
import React, { useState } from "react";
import { TriggerButton } from "../DataGrid.styles";
import { densityDropdown } from "../staticData";
import { DENSITY_TYPE } from "../type";

function DensityOption({
  setdensitySelected,
  densitySelected,
}: {
  setdensitySelected: any;
  densitySelected: DENSITY_TYPE;
}) {
  return (
    <DropdownStyled
      arr={densityDropdown}
      align="end"
      trigger={
        <TriggerButton aria-label="Customise options">
          <Text>{densitySelected}</Text>
        </TriggerButton>
      }
      triggerProps={{ asChild: true }}
      onSelect={(val: any) => setdensitySelected(val.name)}
    />
  );
}

export default React.memo(DensityOption);
