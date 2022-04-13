import { cssFocusVisible, styled } from "../theme";
import ReactPaginate from "react-paginate";

export const GridContainer = styled("div", {
  overflowX: "auto",
});

//table
export const Table = styled("table", {
  width: "100%",
  borderSpacing: 0,
  borderCollapse: "collapse",
  variants: {
    bordered: {
      true: {
        borderWidth: "1px",
        borderRadius: "$base",
        borderStyle: "solid",
        borderColor: "$gray5",
      },
    },
  },
});

//table head
export const ColumnParent = styled("thead", {
  bg: "$gray1",
  height: "2rem",
});

export const ColumnRow = styled("tr", {
  borderBottomWidth: "1px",
  borderTopWidth: "0px",
  borderLeftWidth: "0px",
  borderRightWidth: "0px",
  borderStyle: "solid",
  borderColor: "$gray4",
});

//th
export const Column = styled("th", {
  p: "$2",
  variants: {
    position: {
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
      left: {
        textAlign: "left",
      },
    },
  },
});

//data parent
export const DataParent = styled("tbody", {});

//Data parent
export const DataRow = styled("tr", {
  transition: "all 150ms linear",
  borderBottomWidth: "1px",
  borderTopWidth: "0px",
  borderLeftWidth: "0px",
  borderRightWidth: "0px",
  borderStyle: "solid",
  borderColor: "$gray4",
  variants: {
    density: {
      compact: {
        height: "1.5rem",
      },
      standard: {
        height: "2.2rem",
      },

      comfortable: {
        height: "2.8rem",
      },
    },
  },
});

export const DraggableSpan = styled("span", {
  cursor: "move",
  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
  defaultVariants: {
    show: false,
  },
});

//data cell
export const DataCell = styled("td", {
  variants: {
    position: {
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
      left: {
        textAlign: "left",
      },
    },
  },
});

export const SingleAction = styled("span", {
  cursor: "pointer",
  height: "15px",
  width: "15px",
  "&:hover": {
    transform: "translateY(-1.5px)",
  },
  "&:active": {
    scale: 0.97,
  },
});

export const ActionButtonWrapper = styled("td", {
  alignItems: "center",
});

export const TriggerButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  display: "inline-block",
  py: "$2",
  px: "$6",
  borderRadius: "$md",
  alignItems: "center",
  justifyContent: "center",
  color: "$pText1",
  $$bs: "$colors$indigo5",
  borderColor: "$bgSolid1",
  borderWidth: "1px",
  borderStyle: "solid",
  "&:hover": { backgroundColor: "$bgHover" },
  "&:focus": { backgroundColor: "$bgActive" },
});

export const StyledPagination = styled(ReactPaginate, {
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  minHeight: "1.5rem",
  "& li": {
    px: "$3",
    cursor: "pointer",
    color: "$pText1",
    // transition: "all 50ms linear",
    "&.activeClass": {
      color: "$pText2",
      bg: "$bgActive",
      borderRadius: "3px",
    },
    "&.disabled": {
      "&:hover": {
        color: "$pText2",
        bg: "$gray5",
        borderRadius: "3px",
      },
    },
    "&:hover": {
      color: "$pText2",
      bg: "$bg3",
      borderRadius: "3px",
    },
    "&.next": {
      cursor: "pointer",
    },
  },
});
