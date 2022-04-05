import React from 'react'
import { SingleItemType } from './Dropdown'
import { DropdownMenuItem } from './Dropdown.styles'

type SingleItemProps = {
    item: SingleItemType,
    onSelect: (id: string | number, index: number) => void
    index: number
}

function SingleItem({item, onSelect, index}: SingleItemProps) {
  return (
    <DropdownMenuItem
    key={item.name}
    onClick={() => onSelect(item.id, index)}
  >
    {item.name}
  </DropdownMenuItem>
  )
}

export default SingleItem