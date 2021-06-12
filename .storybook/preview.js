import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/components/Providers/Provider';

export const parameters = {
  options: {
    storySort: {
      order: ['Intro', 'Getting Started', 'Components', 'Layout'],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);
