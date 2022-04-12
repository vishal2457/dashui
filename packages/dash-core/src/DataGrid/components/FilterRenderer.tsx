import Input from "../../Input/Input";
import React from "react";
import { FilterRendererType } from "../type";

function FilterRenderer({
  name,
  filter,
  onChange,
  align = "center",
}: FilterRendererType) {
  if (!filter) return null;
  if (filter.type == "number") {
    return (
      <Input
        parentCSS={{ mb: 0 }}
        size="sm"
        position={align}
        type="number"
        onChange={onChange}
        name={name}
      />
    );
  }
  return (
    <Input
      parentCSS={{ mb: 0 }}
      size="sm"
      position={align}
      onChange={onChange}
      name={name}
    />
  );
}

export default FilterRenderer;
