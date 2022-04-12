import { ACTION_TYPE, GRID_STATE_TYPE } from "./type";
import { formatHeaderData, sanitizeFilters } from "./utils";

export let initialState: GRID_STATE_TYPE = {
  gridOutsideConfig: {
    page: 1,
    limit: 10,
    filters: {},
  },
  densitySelected: "standard",
  columns: [],
  emitFilterValues: false,
};

export const gridReducer = (
  state = initialState,
  action: { type: any; payload: any }
): GRID_STATE_TYPE => {
  let { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.COLUMN_CHANGE:
      return { ...state, columns: [...payload] };

    case ACTION_TYPE.SET_INITIAL_COLUMN:
      let arr = formatHeaderData(payload);
      return { ...state, columns: [...arr] };

    case ACTION_TYPE.SET_ITEM_PER_PAGE:
      return {
        ...state,
        emitFilterValues: true,
        gridOutsideConfig: { ...state.gridOutsideConfig, limit: payload },
      };

    case ACTION_TYPE.DENSITY_CHANGE:
      return { ...state, densitySelected: payload };

    case ACTION_TYPE.FILTER_CHANGE:
      let sanitizedFilters = sanitizeFilters({...state.gridOutsideConfig.filters, ...payload });      
      return {
        ...state,
        emitFilterValues: true,
        gridOutsideConfig: {
          ...state.gridOutsideConfig,
          filters: sanitizedFilters ? {...sanitizedFilters } : null,
        },
      };

    case ACTION_TYPE.PAGE_CHANGE: 
     return {
      ...state,
      emitFilterValues: true,
      gridOutsideConfig: {
        ...state.gridOutsideConfig,
        page: payload
      },
    };
    default:
      return state;
  }
};
