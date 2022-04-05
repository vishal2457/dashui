import React from "react";
import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  Select
} from "./Select.styles";
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons"
import SingleItem from "./SingleItem";

function SelectMenu({ bindLabel, bindValue, items}:any) {
  return (
    <div>
      <Select defaultValue={items[0][bindLabel]}>
        <SelectTrigger aria-label="Food">
          <SelectValue />
          <SelectIcon>< ChevronDownIcon /></SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton><ChevronUpIcon /></SelectScrollUpButton>
          <SelectViewport>
            {items ? items.map((item:any, index:number) => {
            return <SingleItem item={{value: item[bindValue], label: item[bindLabel]}} />
            }) : null}
          </SelectViewport>
          <SelectScrollDownButton></SelectScrollDownButton>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectMenu;
