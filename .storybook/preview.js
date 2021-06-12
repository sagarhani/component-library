import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/components/Providers/Provider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);
