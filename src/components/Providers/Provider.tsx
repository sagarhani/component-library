import React from "react";
import { Provider } from "./ThemeProvider";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider>{children}</Provider>
);
