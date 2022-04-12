import React from 'react'
import { Column } from '../DataGrid.styles'
import { headerObject } from '../type'

function SingleHeader({title, align="center"}: headerObject) {
  return (
    <Column position={align} >{title}</Column>
  )
}

export default SingleHeader