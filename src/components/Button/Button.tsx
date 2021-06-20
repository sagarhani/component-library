import React from 'react';
import { StyledButton } from './ButtonStyles';
import { RADII } from '../../tokens/radii';

export type ButtonAppearanceType = 'primary' | 'secondary' | 'link';

const buttonAppearances: Array<ButtonAppearanceType> = [
  'primary',
  'secondary',
  'link',
];
const buttonSizes: Array<ButtonSizeType> = ['small', 'default', 'large'];

export type ButtonSizeType = 'default' | 'small' | 'large';
export interface ButtonProps {
  appearance?: ButtonAppearanceType;
  size?: ButtonSizeType;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  borderRadius?: keyof typeof RADII;
  children?: React.ReactChild;
}

export type Ref = HTMLButtonElement;
const defaultButtonProps: ButtonProps = {
  appearance: 'primary',
  size: 'default',
  disabled: false,
  type: 'button',
  borderRadius: 'none',
};

const getPropValue = <
  T extends keyof ButtonProps,
  U extends string,
  L extends Array<ButtonAppearanceType | ButtonSizeType>
>(
  propName: T,
  userProvidedValue: U,
  list: L
) => {
  const found = list.find((name: string) => name === userProvidedValue);
  return found ? userProvidedValue : defaultButtonProps[propName];
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = props => {
  const {
    appearance,
    size,
    disabled,
    children,
    borderRadius = 'none',
    ...rest
  } = props;
  return (
    <StyledButton
      component="button"
      appearance={
        getPropValue(
          'appearance' as keyof ButtonProps,
          appearance!,
          buttonAppearances
        ) as ButtonAppearanceType
      }
      size={
        getPropValue(
          'size' as keyof ButtonProps,
          size!,
          buttonSizes
        ) as ButtonSizeType
      }
      disabled={disabled}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  appearance: 'primary',
};
