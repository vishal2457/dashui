import React from "react";
import SingleHeader from "./components/SingleHeader";
import {
  ColumnParent,
  ColumnRow,
} from "./DataGrid.styles";
import { headerObject } from "./type";

function DataHeader({ header }: { header: headerObject[] }) {
  return (
    <ColumnParent>
      <ColumnRow>
        {header.map((item) => {
          return <SingleHeader key={item.field} {...item} />
        })}
      </ColumnRow>
    </ColumnParent>
  );
}

export default React.memo(DataHeader);
