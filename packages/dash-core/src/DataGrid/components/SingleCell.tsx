import React from "react";
import { DataCell } from "../DataGrid.styles";
import { SingleCellType } from "../type";

function SingleCell({
  cell,
  position = "center",
  onClick,
  formatter,
  header,
}: SingleCellType) {
  //formatter function
  if (formatter) {    
    return (
      <DataCell position={position} onClick={onClick}>
        {formatter(cell, header)}
      </DataCell>
    );
  }

  //single cell
  if (cell) {
    return (
      <DataCell position={position} onClick={onClick}>
        {cell}
      </DataCell>
    );
  }

  //if not data
  return <DataCell position={position}>-</DataCell>;
}

export default SingleCell;
