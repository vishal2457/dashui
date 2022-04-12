
import React, { useEffect } from "react";
import { Box } from "../Box";
import { Button } from "../Button/Button";
import Group from "../Group/Group";
import ColumnOptions from "./components/ColumnOptions";
import DensityOption from "./components/DensityOption";
import ItemsPerPage from "./components/ItemsPerPage";
import Pagination from "./components/Pagination";
import Data from "./Data";
import { GridContainer, Table } from "./DataGrid.styles";
import DataHeader from "./DataHeader";
import Filters from "./Filters";
import { gridReducer, initialState } from "./reducer";
import { ACTION_TYPE, DENSITY_TYPE, gridProps } from "./type";
import { getValidColumns } from "./utils";

function Datagrid({
  header,
  data,
  actionButtons,
  bordered,
  clickOnAction,
  emitChange,
  pageCount,
  limit = 5,
  loading,
}: gridProps) {
  const [state, dispatch] = React.useReducer(gridReducer, initialState);

  useEffect(() => {
    if (state.emitFilterValues && emitChange) {
      emitChange(state.gridOutsideConfig);
    }
  }, [state.gridOutsideConfig]);

  //handle column change
  const handleColumnChange = (visibility: boolean, index: number) => {
    let arr: any = state?.columns;
    arr[index].visible = visibility;
    dispatch({ type: ACTION_TYPE.COLUMN_CHANGE, payload: arr });
  };

  const handleDensityChange = (density: DENSITY_TYPE) => {
    dispatch({ type: ACTION_TYPE.DENSITY_CHANGE, payload: density });
  };

  const handlePageChange = ({selected}:{selected : number}) => {
    dispatch({type: ACTION_TYPE.PAGE_CHANGE, payload: selected+1})
    
  }

  //handle item per page change
  const handleLimitChange = (itemLimit: number) => {
    dispatch({ type: ACTION_TYPE.SET_ITEM_PER_PAGE, payload: itemLimit });
  };

  const handleFilter = (value: any) => {
    dispatch({ type: ACTION_TYPE.FILTER_CHANGE, payload: value });
  };

  useEffect(() => {
    dispatch({ type: ACTION_TYPE.SET_INITIAL_COLUMN, payload: header });
    return () => {};
  }, [header]);

  return (
    <Box css={{ width: "100%" }}>
      <Group position="right" css={{ mb: "$5" }}>
        <Button size="sm" bordered disabled={loading}>
          Export
        </Button>
        <ColumnOptions
          columns={state?.columns || []}
          handleColumnChange={handleColumnChange}
        />
        <ItemsPerPage
          limit={state.gridOutsideConfig.limit}
          setlimit={handleLimitChange}
        />
        <DensityOption
          densitySelected={state.densitySelected}
          setdensitySelected={handleDensityChange}
        />
      </Group>
      <GridContainer>
        <Table bordered={bordered}>
          <DataHeader header={getValidColumns(state?.columns)} />
          <Filters
            headers={getValidColumns(state?.columns)}
            handleFilter={handleFilter}
          />
          <Data
            density={state.densitySelected}
            headers={getValidColumns(state?.columns)}
            data={data}
            actionButtons={actionButtons}
            onActionClick={clickOnAction}
            loading={loading}
          />
        </Table>
      </GridContainer>
      <Group position="right">
        <Pagination totalCount={pageCount} limit={limit} onPageChange={handlePageChange} />
      </Group>
    </Box>
  );
}

export default Datagrid;
