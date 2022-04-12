import React, { ReactNode } from "react";

export type actionTitleTypes = "View" | "Edit" | "Delete" | "Plus" | "Minus" | "QRCode";
export type alignType = "left"| "center" | "right";
export type gridFilterObject = {
  type: "text" | "select" | "date" | "number";
  bindValue?: string;
  bindName?: string;
  arr?:any;
}
export type inputObject = {
  name: string;
  align?: string;
  type: "text" | "select" | "date";
  value?: any,
  bindValue?: string;
  bindName?: string;
  arr?:any;
  disabled?: boolean;
  isClearable?: boolean;
  indexes?: { headIndex: number; dataIndex: number };
}



//density types
export type DENSITY_TYPE = "compact" | "standard" | "comfortable"

//type for props of the main gridprops
export type gridProps = {
  bordered?: boolean
  density?: DENSITY_TYPE
  header: headerObject[];
  actionButtons: actionButtonType[];
  data: any[];
  clickOnAction?: any;
  pageCount: number;
  limit?: number;
  emitChange?: (values: any) => void;
  loading: boolean
};

export type headerObject = {
  field: string;
  title: string;
  align?: alignType;
  filter?: gridFilterObject;
  customElement?: HTMLElement;
  formatter?: (value: any) => any;
  input?: inputObject;
  visible?:boolean
};


export type GRID_STATE_TYPE = {
  gridOutsideConfig: {
    page: number
    limit: number,
    filters: any
  }
  densitySelected: DENSITY_TYPE
  columns: ColumnTypes[]
  emitFilterValues: boolean
}

export type actionButtonType = {
  field?: string;
  icon?: ReactNode;
  title: actionTitleTypes;
  className?: string;
  visible?: boolean;
};


export type POSITION_TYPE = "center"|"right"|"left"

export type SingleCellType = {
  cell: string | number | React.ReactNode;
  position?: POSITION_TYPE
  formatter?: (value: any, header: headerObject) => any;
  header: headerObject,
  onClick?: any
};


export type FilterRendererType = {
  name: string;
  filter: gridFilterObject|undefined;
  onChange: any;
  align?: alignType
}

//action enums
export enum ACTION_TYPE  {
  COLUMN_CHANGE = "COLUMN_CHANGE",
  SET_INITIAL_COLUMN = "SET_INITIAL_COLUMN",
  SET_ITEM_PER_PAGE = "SET_ITEM_PER_PAGE",
  DENSITY_CHANGE = "DENSITY_CHANGE",
  FILTER_CHANGE = "FILTER_CHANGE",
  PAGE_CHANGE = "PAGE_CHANGE"
}

//column options
export type ColumnTypes = {
  title: string, 
  position: number, 
  visible: boolean, 
  field: string
}

export const IS_ACTION = "action"