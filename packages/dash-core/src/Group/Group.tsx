import React from 'react'
import { GroupBox, GroupVariantsProps } from './Group.styles'
import type * as Stitches from '@stitches/react';


type groupProps = {children :React.ReactNode} & GroupVariantsProps & {className?: string, css?: Stitches.CSS}

function Group({children, className, ...rest}: groupProps) {
  return (
    <GroupBox {...rest} className={className}>
        {children}
    </GroupBox>
  )
}

export default Group