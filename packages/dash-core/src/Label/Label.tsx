import type * as Stitches from '@stitches/react';
import React from 'react'
import { LabelVariantProps, RequiredSpan, StyledLabel } from './Label.styles'
type defaultProps = {
    label: string,
    htmlFor?: string,
    required?: boolean,
    css?: Stitches.CSS
}

type labelProps = defaultProps & LabelVariantProps;

const Label = ({label, htmlFor, required, css}: labelProps) => {

  return (
    <StyledLabel htmlFor={htmlFor} css={css}  showCursor={!!htmlFor} >
        {label} {required ? <RequiredSpan>*</RequiredSpan> : null} 
    </StyledLabel>
  )
}

export default Label