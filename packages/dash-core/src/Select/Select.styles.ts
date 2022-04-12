import { mauve } from '@radix-ui/colors';
import * as SelectPrimitive from '@radix-ui/react-select';
import { styled } from "../..theme/stitches.config";


const StyledSelect = styled(SelectPrimitive.Root, {
    maxHeight: "10px"
})

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 13,
    lineHeight: 1,
    height: 35,
    gap: 5,
    backgroundColor: 'white',
    color: "$indigo11",
    // boxShadow: `0 2px 10px ${blackA.blackA7}`,
    '&:hover': { backgroundColor: "$indigo3" },
    '&:focus': { boxShadow: `0 0 0 2px black` },
  });


  const StyledContent = styled(SelectPrimitive.Content, {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow:
      '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  });

  const StyledViewport = styled(SelectPrimitive.Viewport, {
    padding: 5,
  });
  

  const StyledItem = styled(SelectPrimitive.Item, {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: "$indigo11",
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',
  
    '&[data-disabled]': {
      color: mauve.mauve8,
      pointerEvents: 'none',
    },
  
    '&:focus': {
      backgroundColor: "$indigo9",
      color: "$indigo1",
    },
  });

  const StyledLabel = styled(SelectPrimitive.Label, {
    padding: '0 25px',
    fontSize: 12,
    lineHeight: '25px',
    color: mauve.mauve11,
  });

  const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const scrollButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    backgroundColor: 'white',
    color: "$indigo11",
    cursor: 'default',
  };

  const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);
  const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);


  export const Select = StyledSelect;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = SelectPrimitive.Icon;
export const SelectContent = StyledContent;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;