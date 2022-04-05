import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { StyledContent, StyledOverlay } from './Dialog.styles';

function DialogContent({children ,...props}: {children: React.ReactNode, props?:any}) {
  return (
    <DialogPrimitive.Portal>
    <StyledOverlay  />
    <StyledContent {...props}>{children}</StyledContent>
  </DialogPrimitive.Portal>
  )
}

export default DialogContent