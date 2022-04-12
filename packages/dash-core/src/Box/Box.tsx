import React from 'react'
import { StyledBox } from './Box.styles'

function Box(props: any) {
  return (
    <StyledBox {...props} >
      {props.children}
    </StyledBox>
  )
}

export default Box