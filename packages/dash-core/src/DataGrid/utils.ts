import { headerObject } from "./type";

export const formatHeaderData = (header: headerObject[]) => {
  return header.map((item: any, index: number) => {
    return {
      ...item,
      position: index,
      visible: item.visible ?? true,
    };
  });
};

export const getValidColumns = (header: headerObject[] | undefined) => {
  if (!header) return [];
  return header.filter((item) => item.visible);
};

export const sanitizeFilters = (filter: any) => {
  let obj: any = {};
  for (let i in filter) {
    let singleValue = filter[i]
    if (singleValue != "" && singleValue != null) {
      obj[i] = singleValue;
    }
  }
  return Object.keys(obj).length ? obj : null;
};
