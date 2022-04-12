import Switch from "../../Switch/Switch";
import React from "react";
import { TriggerButton } from "../DataGrid.styles";
import { ColumnTypes } from "../type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./column.styles";

function ColumnOptions({
  columns,
  handleColumnChange,
}: {
  columns: ColumnTypes[];
  handleColumnChange: (visibility: boolean, index: number) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <TriggerButton>Columns</TriggerButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={5} align="end">
        {columns.map((item, index) => {
          return (
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              key={item.title}
            >
              <Switch
                label={item.title}
                size="sm"
                checked={item.visible}
                onChange={(e) => handleColumnChange(e, index)}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default React.memo(ColumnOptions) ;
