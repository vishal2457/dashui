import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./Dropdown.styles";
import DropdownTrigger from "./DropdownTrigger";
import SingleItem from "./SingleItem";


export type SingleItemType = { name: string; id: string | number; icon?: any }

type propTypes = {
  arr: SingleItemType[];
  trigger: React.ReactNode;
  onSelect: (id: string | number, index: number) => void;
  triggerProps?: any
};

function DropdownStyled({ arr, onSelect, trigger, triggerProps }: propTypes) {
  return (
    <DropdownMenu>
      <DropdownTrigger 
      triggerProps={triggerProps}
      trigger={trigger}
      />
      <DropdownMenuContent sideOffset={5}>
        {arr.map((item, index) => {
          return (
            <SingleItem
            key={item.name}
            item={item}
            onSelect={onSelect}
            index={index}
            />
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownStyled;
