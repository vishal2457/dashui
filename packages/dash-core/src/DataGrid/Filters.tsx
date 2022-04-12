import React from "react";
import FilterRenderer from "./components/FilterRenderer";
import { Column, ColumnParent, ColumnRow } from "./DataGrid.styles";
import { headerObject } from "./type";
import debounce from "lodash.debounce";

type propTypes = {
  headers: headerObject[];
  handleFilter?: any;
};

function Filters({ headers, handleFilter }: propTypes) {

  const handleFilterChange = debounce((e: any) => {
    handleFilter({ [e.target.name]: e.target.value });
  }, 400);

  return (
    <ColumnParent>
      <ColumnRow>
        {headers.map((item) => {
          return (
            <Column>
              <FilterRenderer
                onChange={handleFilterChange}
                name={item.field}
                filter={item.filter}
                align={item.align}
              />
            </Column>
          );
        })}
      </ColumnRow>
    </ColumnParent>
  );
}

export default Filters;
