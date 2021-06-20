import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box } from '../../Box';
import { Container, ContainerProps } from '.';

export default {
  title: 'Layout/Container',
  component: Container,
} as Meta;

const BoxItem = () => {
  return <Box bg="cornflowerblue">Box</Box>;
};

const Template: Story<ContainerProps> = args => (
  <Container {...args}>
    <BoxItem />
  </Container>
);

export const Flex = Template.bind({});
Flex.args = {
  display: 'flex',
};
