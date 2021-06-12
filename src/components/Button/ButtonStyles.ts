import styled, { DefaultTheme } from "styled-components";
import { ButtonProps, ButtonSizeType } from "./Button";
import { BaseElement } from "../Element";

const BaseButton = styled(BaseElement)({
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed"
  }
});

const getPaddingBySize = <T extends DefaultTheme, S extends ButtonSizeType>({
  theme,
  size
}: {
  theme: T;
  size: S;
}) => {
  switch (size) {
    case "small":
      return `${theme.SPACES["3x"]} ${theme.SPACES["6x"]}`;
    case "default":
      return `${theme.SPACES["6x"]} ${theme.SPACES["12x"]}`;
    case "large":
      return `${theme.SPACES["8x"]} ${theme.SPACES["18x"]}`;
    default:
      return `${theme.SPACES["6x"]} ${theme.SPACES["12x"]}`;
  }
};

export const StyledButton = styled(BaseButton)<ButtonProps>`
  outline: none;
  background: linear-gradient(
    130deg,
    ${({ theme, appearance }) =>
      theme.COLORS.button[appearance!]?.background[0]},
    ${({ theme, appearance }) =>
      theme.COLORS.button[appearance!]?.background[1] ||
      theme.COLORS.button[appearance!]?.background[0]}
  );
  color: ${({ theme, appearance }) => theme.COLORS.button[appearance!]?.text};
  border-radius: ${({ theme, borderRadius }) => theme.RADII[borderRadius!]};
  padding: ${({ theme, size }) =>
    getPaddingBySize({ theme, size: size || "default" })};
`;
