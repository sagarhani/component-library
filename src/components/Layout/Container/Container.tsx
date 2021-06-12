import React from 'react';
import { space } from '../../../tokens/spaces';
import { colors } from '../../../tokens/colors';
import { Box } from '../../Box';
import { display as displayProps } from '../../../tokens/display';

export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  space: keyof typeof space;
  bg?: keyof typeof colors;
  display?: keyof typeof displayProps;
}

export const Container: React.FC<ContainerProps> = ({ display, ...rest }) => {
  return (
    <Box display={display} {...rest}>
      {rest.children}
    </Box>
  );
};
