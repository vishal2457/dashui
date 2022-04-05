import React from 'react'
import { GroupBox, GroupVariantsProps } from './Group.styles'


type groupProps = {children :React.ReactNode} & GroupVariantsProps & {className?: string}

function Group({children, className, ...rest}: groupProps) {
  return (
    <GroupBox {...rest} className={className}>
        {children}
    </GroupBox>
  )
}

export default Group