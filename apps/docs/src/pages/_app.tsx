import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import "../styles/global.css"
import { darkTheme } from '@dash/core';
function MyApp({ Component, pageProps }: AppProps) {
  return  <ThemeProvider
  attribute="class"
  defaultTheme="dark"
  value={{
    light: "light",
    dark: darkTheme.className
  }}
>
<Component {...pageProps} />

</ThemeProvider>
  
}

export default MyApp
