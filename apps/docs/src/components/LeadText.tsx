import Text from '@ui/Text/Text'
import React from 'react'

function LeadText({children}:any) {
  return (
      <Text decoration="underline" weight={'bold'} >{children}</Text>
  )
}

export default LeadText