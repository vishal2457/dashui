import Box from '../../Box/Box';
import Text from '../../Text/Text';
import { useTheme } from 'next-themes';
import React from 'react';
import { a11yDark, a11yLight, CopyBlock } from "react-code-blocks";

function DisplayCode({code, language }:any) {
  const { theme, setTheme } = useTheme();

  return (
    <Box>
      <Text css={{pt:15}}>Example.</Text>
  <CopyBlock
    text={code}
    language={"jsx"}
    showLineNumbers={true}
    wrapLines
    theme={theme == 'light' ? a11yLight : a11yDark}/>
    </Box>
  
  )
}

export default DisplayCode
