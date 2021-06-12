import React from 'react';
import styled from '@emotion/styled';
import { scales } from './scales';
import { ThemeProvider } from './index';

export const withScales = (Component: React.FC) => styled(Component)(scales);

export const ThemeProviderWrapper: React.FC<{
  children: React.ReactChildren;
}> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
