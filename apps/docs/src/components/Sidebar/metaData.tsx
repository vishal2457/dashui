
export type SINGLE_MENU = {
  name: string;
  link: string;
  children?: SINGLE_MENU[];
};

export const permission = {
  view: false,
  add: false,
  edit: false,
  delete: false,
};

export const permissionAll = {
  viewAll: false,
  addAll: false,
  editAll: false,
  deleteAll: false,
};

export const MENU: SINGLE_MENU[] = [
 {
   name: "Components",
  link: "",
  children: [
    {
      name: "Button",
      link: "/docs/button"
    },
    {
      name: "Text",
      link: "/docs/text"
    },
    {
      name: "Radio",
      link: "/docs/radio"
    },
    {
      name: "Check box",
      link: "/docs/checkbox"
    },
    {
      name: "Badge",
      link: "/docs/badge"
    },
    {
      name: "Box",
      link: "/docs/box"
    },
    {
      name: "Card",
      link: "/docs/card"
    },
    {
      name: "Dialog",
      link: "/docs/dialog"
    },
    {
      name: "Dropdown",
      link: "/docs/dropdown"
    },
    {
      name: "Input",
      link: "/docs/input"
    },
    {
      name: "Labek",
      link: "/docs/label"
    },
    {
      name: "Select",
      link: "/docs/select"
    },
    {
      name: "Tabs",
      link: "/docs/tabs"
    },
    {
      name: "TextArea",
      link: "/docs/textarea"
    },
    {
      name: "Datagrid",
      link: "/docs/dataGrid"
    },
  ]
 }
];
