import React from 'react'
import { StyledLabel } from './Label.styles'

function Label({...props}) {
    const {children, ...rest} = props;
  return (
    <StyledLabel {...rest}>
        {children}
    </StyledLabel>
  )
}

export default Label