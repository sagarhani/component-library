import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Appearance = Template.bind({});
Appearance.args = {
  appearance: 'primary',
  children: 'Primary Button',
};

export const Size = Template.bind({});
Size.args = {
  size: 'large',
  children: 'Large Button',
};
