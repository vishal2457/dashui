import React from 'react'
import { SingleItemType } from './Dropdown'
import { DropdownMenuItem, RightSlot } from './Dropdown.styles'

type SingleItemProps = {
    item: SingleItemType,
    onSelect: (item: SingleItemType, index: number) => void
    index: number
}



function SingleItem({item, onSelect, index}: SingleItemProps) {
  return (
    <DropdownMenuItem
    key={item.name}
    onClick={() => onSelect(item, index)}
  >
    {item.name} {item.icon ? <RightSlot>{item.icon}</RightSlot> : null}
  </DropdownMenuItem>
  )
}

export default SingleItem