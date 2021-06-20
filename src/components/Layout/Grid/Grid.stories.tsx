import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../../Box';
import { Grid, GridProps } from '.';

export default {
  title: 'Layout/Grid',
  component: Grid,
} as Meta;

const BoxItem = () => {
  return (
    <Box bg="cornflowerblue" color="white" padding="12px">
      Box
    </Box>
  );
};

const Template: Story<GridProps> = args => (
  <Grid {...args}>
    <BoxItem />
    <BoxItem />
    <BoxItem />
    <BoxItem />
  </Grid>
);

export const Space = Template.bind({});
Space.args = {
  space: '12x',
};
