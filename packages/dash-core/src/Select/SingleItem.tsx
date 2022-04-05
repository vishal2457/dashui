import { CheckIcon } from '@radix-ui/react-icons'
import React from 'react'
import { SelectItem, SelectItemIndicator, SelectItemText } from './Select.styles'

function SingleItem({item}:any) {
  return (
    <SelectItem value={item.value}>
    <SelectItemText>{item.label}</SelectItemText>
    <SelectItemIndicator><CheckIcon /></SelectItemIndicator>
  </SelectItem>
  )
}

export default SingleItem