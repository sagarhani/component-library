import React from 'react';
import { Box } from '../../Box';
import { space } from '../../../tokens/spaces';
import { colors } from '../../../tokens/colors';

export interface GridProps {
  children: React.ReactNode[];
  space: keyof typeof space;
  bg?: keyof typeof colors;
}

export const Grid: React.FC<GridProps> = ({ children, space, ...props }) => {
  return (
    <Box display="flex" {...props}>
      {React.Children.map(children, (child, index) => {
        if (index > 0) {
          return <Box marginLeft={space}>{child}</Box>;
        }
        return <Box>{child}</Box>;
      })}
    </Box>
  );
};
