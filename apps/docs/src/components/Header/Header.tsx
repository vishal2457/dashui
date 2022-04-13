import { Text, Box } from "@dash/core";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React from "react";
import { HeaderContainer, IconButton } from "./Header.styles";


function Header() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <HeaderContainer>
      <Text className="text" css={{px: "$5"}} size="h3">
        dash-ui
      </Text>
      <Box css={{display: "flex"}}>
        <IconButton 
        css={{
          p: "$4",
        }}
        onClick={handleThemeChange} >
        {theme == "light" ? <SunIcon />  : <MoonIcon />  }
        </IconButton>
      </Box>
    </HeaderContainer>
  );
}

export default Header;
