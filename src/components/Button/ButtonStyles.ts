import styled, { DefaultTheme } from 'styled-components';
import { ButtonProps, ButtonSizeType } from './Button';
import { BaseElement } from '../Element';

const BaseButton = styled(BaseElement)({
  cursor: 'pointer',
});

const getPaddingBySize = <T extends DefaultTheme, S extends ButtonSizeType>({
  theme,
  size,
}: {
  theme: T;
  size: S;
}) => {
  switch (size) {
    case 'small':
      return `${theme.space['3x']} ${theme.space['6x']}`;
    case 'default':
      return `${theme.space['6x']} ${theme.space['12x']}`;
    case 'large':
      return `${theme.space['8x']} ${theme.space['18x']}`;
    default:
      return `${theme.space['6x']} ${theme.space['12x']}`;
  }
};

export const StyledButton = styled(BaseButton)<ButtonProps>`
  outline: none;
  background: linear-gradient(
    130deg,
    ${({ theme, appearance }) =>
      theme.colors.button[appearance!]?.background[0]},
    ${({ theme, appearance }) =>
      theme.colors.button[appearance!]?.background[1] ||
      theme.colors.button[appearance!]?.background[0]}
  );
  color: ${({ theme, appearance }) => theme.colors.button[appearance!]?.text};
  border-radius: ${({ theme, borderRadius }) => theme.RADII[borderRadius!]};
  padding: ${({ theme, size }) =>
    getPaddingBySize({ theme, size: size || 'default' })};
`;
