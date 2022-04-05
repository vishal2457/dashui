import React from 'react'
import { StyledTextarea } from './Textarea.styles'
import { StyledTextareaWrapper } from './TextareaWrapper.styles';
import Label from './Label';

function Textarea(props: any) {
  const {label, children, ...rest} = props;
  return (
    <StyledTextareaWrapper>
    {label ?  <Label>{label}</Label> : null }
    <StyledTextarea {...rest} /> 
    </StyledTextareaWrapper>
  )
}

export default Textarea