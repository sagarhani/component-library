import styled from 'styled-components';
import { color, flexbox, layout, space } from 'styled-system';
import { withScales } from '../../utils';
import { BaseElement } from '../Element';

const BaseBox = withScales(BaseElement);

export const Box = styled(BaseBox)`
  ${color}
  ${flexbox}
  ${layout}
  ${space}
`;
