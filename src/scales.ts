import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';

const baseScales = compose(
  typography,
  space,
  layout,
  color,
  flexbox,
  background,
  border,
  position,
  shadow
);

export const scales = baseScales;
