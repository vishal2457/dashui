import React from 'react'
import { StyledBadge } from './Badge.styles'

const Badge = (props: any) => {
  return (
    <StyledBadge {...props} >
      {props.children}
    </StyledBadge>
  )
}

export default Badge