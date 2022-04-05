import React from 'react'
import { StyledArrow, TooltipContent, TooltipTrigger, TooltipWrapper } from './Tooltip.styles'

function Tooltip({
  children,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  side = "top",
  ...props
}: any) {
  return (
    <TooltipWrapper
    delayDuration={100}
    >
      <TooltipTrigger asChild>
        {trigger}
      </TooltipTrigger>
      <TooltipContent sideOffset={5} side={side} {...props} >
        {children}
        <StyledArrow />
      </TooltipContent>
    </TooltipWrapper>
  )
}

export default Tooltip