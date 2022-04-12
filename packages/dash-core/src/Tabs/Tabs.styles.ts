import { violet, mauve, blackA } from '@radix-ui/colors';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '../..theme/stitches.config';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  // width: 300,
  margin: '$4',
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  backgroundColor: '$bgActive',
  borderBottom: `1px solid $bgSolid1`,
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  fontWeight: 'bold',
  backgroundColor: "$bg1",
  padding: '5px 50px',
  height: 30,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: '$bgSolid2',
  userSelect: 'none',
  '&:hover': { color: "$bgSolid1", backgroundColor: "$bgHover" },
  '&[data-state="active"]': {
    backgroundColor: '$bgActive',
   boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { 
    position: 'relative', 
},
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '$bg1',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
   '&:focus': { boxShadow: `0 0 0 2px black` },
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;