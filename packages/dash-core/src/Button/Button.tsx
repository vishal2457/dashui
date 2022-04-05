import React from 'react'
import { ButtonVariantsProps, StyledButton } from './Button.styles'



type ButtonProps = React.ButtonHTMLAttributes<unknown> & ButtonVariantsProps & {loading?: boolean};

export const Button = (props: ButtonProps) => {
  let {loading=false,children,disabled, ...rest} = props;
  return (
   <StyledButton {...rest} disabled={disabled||loading}>
     {loading ? 'loading...' : children}
   </StyledButton>
  )
}
