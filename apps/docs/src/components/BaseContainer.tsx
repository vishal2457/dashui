import Box from '@ui/Box/Box'
import React from 'react'

function BaseContainer({children}:{children: React.ReactNode}) {
  return (
    <Box css={{py:20}}>
    {children}
    </Box>
  )
}

export default BaseContainer