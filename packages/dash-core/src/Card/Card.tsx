import React from 'react'
import { StyledCard } from './Card.styles'

function Card({children, ...rest}:any) {
  
  return (
    <StyledCard
    {...rest}
    >{children}</StyledCard>
  )
}

export default Card