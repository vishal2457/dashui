import { styled } from "@dash/core";



export const MainSidebar = styled('div', {
    background: "$bg2",
    transition: "$default",
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
    whiteSpace: "nowrap",
    left: 0,
    position: "sticky",
    top: 0,
    // my: "$10",
    variants: {
        open: {
            true: {
                width: "300px"
            },
            false: {
                width: "0px"
            }
        },
    },
    defaultVariants: {
        open: true
    }
});

export const ParentElement = styled('div', {
    display: "flex",
    // justifyContent: "space-between",
    py: '$5',
    // mb: "$5",
});


export const IconContainer = styled('div', {
    marginRight: 2,

})

export const ParentContainer = styled('ul', {
    listStyle: "none",
    margin: 0,
    padding: 0,
});

export const Parent = styled('li', {
  listStyle : "none",
  px: "$9",
  py:"$3"
});


export const ChildLi = styled('a', {
    borderRight: 0,
    borderTop: 0,
    borderBottom: 0,
    outline: 0,
    cursor: "pointer",
    display: "block",
    textDecoration: "none",
    paddingLeft: "$10",
    marginLeft: "$4",
    lineHeight: "34px",
    borderTopRightRadius: "$sm",
    borderBottomRightRadius: "$sm",
    userSelect: "none",
    fontWeight: "$thin",
    position: "relative",
    variants: {
        active: {
            true: {
                borderLeft: "1.5px",
                borderStyle: "solid",
                borderColor: "$bgSolid1",
                backgroundColor: "$bgActive",
                color: "$pText1",
                fontWeight: "$bold",
   
            },
            false: {
                borderLeft: "1.5px",
                borderStyle: "solid",
                borderColor: "$borderLight",
                color:"$pText2"
            },
        }
    }
});
