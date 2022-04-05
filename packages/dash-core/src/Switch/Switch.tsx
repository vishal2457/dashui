import React from 'react'
import { SwitchThumb, Flex, Label } from './Switch.styles'

function Switch(props: any) {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <Label htmlFor="s1" css={{ paddingRight: 15 }}>
        Airplane mode
      </Label>
      <Switch defaultChecked id="s1">
        <SwitchThumb />
      </Switch>
    </Flex>
  )
}

export default Switch