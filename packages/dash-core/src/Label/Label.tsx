import React from 'react'
import { LabelVariantProps, RequiredSpan, StyledLabel } from './Label.styles'
type defaultProps = {
    label: string,
    htmlFor?: string,
    required?: boolean
}

type labelProps = defaultProps & LabelVariantProps;

const Label = ({label, htmlFor, required}: labelProps) => {

  return (
    <StyledLabel htmlFor={htmlFor}  showCursor={!!htmlFor} >
        {label} {required ? <RequiredSpan>*</RequiredSpan> : null} 
    </StyledLabel>
  )
}

export default Label