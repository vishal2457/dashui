import React from "react";
import { theme } from "./stitches.config";

export const defaultContext: { theme: any } = {
  theme,
};

const ThemeContext: React.Context<{ theme: any }> = React.createContext<{
  theme: any;
}>(defaultContext);

export default ThemeContext;
