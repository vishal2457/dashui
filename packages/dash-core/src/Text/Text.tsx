import React from 'react'
import { StyledText, TextVariantsProps } from './Text.styles'
import type * as Stitches from '@stitches/react';


type textProps = {children :React.ReactNode} & TextVariantsProps & {className?: string, css?: Stitches.CSS}

function Text({children,className, ...rest}: textProps) {
  return (
    <StyledText {...rest} className={className} >
      {children}
    </StyledText>
  )
}

export default Text