import React from 'react'
import { DropdownMenuTrigger } from './Dropdown.styles'


type triggerPropType = {triggerProps: any, trigger: React.ReactNode}

function DropdownTrigger({triggerProps, trigger}:triggerPropType ) {
  return (
    <DropdownMenuTrigger {...triggerProps}>
    {trigger}
  </DropdownMenuTrigger>  )
}

export default DropdownTrigger