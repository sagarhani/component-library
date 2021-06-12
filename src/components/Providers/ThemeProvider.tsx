import React from "react";
import * as tokens from "../../theme";
import { ThemeProvider } from "styled-components";

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={tokens}>{children}</ThemeProvider>
);
