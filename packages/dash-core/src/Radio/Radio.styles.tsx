import { styled, VariantProps } from "../..theme/stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  borderRadius: "100%",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$borderLight",
  my: "$1",
  "&:hover": { backgroundColor: "$bgHover" },
  variants: {
    size: {
      xs: {
        height: 10,
        width: 10,
      },
      sm: {
        height: 15,
        width: 15,
      },
      md: {
        height: 20,
        width: 20,
      },
      lg: {
        height: 25,
        width: 25,
      },
      xl: {
        height: 30,
        width: 30,
      },
    },
    color: {
      default: {
         backgroundColor: "transparent",
        color: '$indigo4',
        "&:before" : {
              borderColor: '$sbgSolid1',
              backgroundColor: 'white'
        },
        "&:checked:after" : {
          backgroundColor: '$sbgSolid1',
        },
      }
    },
    error: {
      true: {
        borderColor: 'red',
      }
    },
    success: {
      true: {
        borderColor: 'green',
      }
    },
  },
  defaultVariants: {
    size: "sm",
    color: "default"
  },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 21,
    height: 21,
    borderRadius: "50%",
    backgroundColor: "$bgSolid2",
  },
  variants: {
    size: {
      xs: {
        "&::after": {
          height: 7,
          width: 7,
        },
      },
      sm: {
        "&::after": {
          height: 12,
          width: 12,
        },

      },
      md: {
        "&::after": {
          height: 17,
          width: 17,
        },

      },
      lg: {
        "&::after": {
          height: 22,
          width: 22,
        },

      },
      xl: {
        "&::after": {
          height: 27,
          width: 27,
        },

      },
    },
    color: {
      default: {
         backgroundColor: "transparent",
        color: '$indigo4',
        "&:before" : {
              borderColor: '$sbgSolid1',
              backgroundColor: 'white'
        },
        "&:checked:after" : {
          backgroundColor: '$sbgSolid1',
        },
      }
    },
    error: {
      true: {
        borderColor: 'red',
      }
    },
    success: {
      true: {
        borderColor: 'green',
      }
    },
  },
  defaultVariants: {
    size: "sm",
    color: "default"
  },
});

// export const StyledRadio = styled(
//     'input', {
//       cursor: "pointer",
//       position: 'relative',
//       borderWidth: 1,
//       borderStyle: 'solid',
//       borderColor: '$borderLight',
//       "&:before" : {
//           content: '',
//           position: 'absolute',
//           left: -2,
//           display: 'block',
//           borderRadius: '50%',
//           borderWidth: 2,
//           borderStyle: 'solid',
//           height: '100%',
//           width: '100%',
//           borderColor: '$sbg3',
//           backgroundColor: 'white'
//       },
//       "&:checked:after" : {
//         content: '',
//         position: 'absolute',
//         left: -2,
//         display: 'block',
//         borderRadius: '50%',
//         borderWidth: 2,
//         borderStyle: 'solid',
//         height: '80%',
//         width: '80%',
//         margin: '10%',
//         backgroundColor: '$sbg3',
//       },
// variants: {
//   size: {
//     xs: {
//       height: '10',
//       width: '10',
//     },
//     sm: {
//       height: 15,
//       width: 15,
//     },
//     md: {
//       height: 20,
//       width: 20,
//     },
//     lg: {
//       height: 25,
//       width: 25,
//     },
//     xl: {
//       height: 30,
//       width: 30,
//     }
//   },
        // color: {
        //   default: {
        //      backgroundColor: "transparent",
        //     color: '$indigo4',
        //     "&:before" : {
        //           borderColor: '$sbgSolid1',
        //           backgroundColor: 'white'
        //     },
        //     "&:checked:after" : {
        //       backgroundColor: '$sbgSolid1',
        //     },
        //   }
        // },
        // error: {
        //   true: {
        //     borderColor: 'red',
        //   }
        // },
        // success: {
        //   true: {
        //     borderColor: 'green',
        //   }
        // },
//       },
// defaultVariants: {
//   color: 'default',
//   size: 'sm',
// }
//     },
//     cssFocusVisible
//   );

export const RadioGroupPrivate = RadioGroupPrimitive.Root;
export const RadioGroupRadio = StyledRadio;
export const RadioGroupIndicator = StyledIndicator;

export type RadioVariantsProps = VariantProps<typeof StyledRadio>;
