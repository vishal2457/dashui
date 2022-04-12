import DropdownStyled from "../../Dropdown/Dropdown";
import Text from "../../Text/Text";
import React from "react";
import { TriggerButton } from "../DataGrid.styles";
import { itemsPerPage } from "../staticData";

function ItemsPerPage({
  limit,
  setlimit,
}: {
  limit: number;
  setlimit: any;
}) {
  return (
    <DropdownStyled
      arr={itemsPerPage}
      align="end"
      trigger={
        <TriggerButton aria-label="Customise options">
          <Text>{limit}</Text>
        </TriggerButton>
      }
      triggerProps={{ asChild: true }}
      onSelect={(val: any) => setlimit(parseInt(val.name))}
    />
  );
}

export default ItemsPerPage;
