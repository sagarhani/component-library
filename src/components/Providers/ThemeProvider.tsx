import React from 'react';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
