import React from 'react';
import styled from 'styled-components';

type Ref = React.RefObject<HTMLElement>;
type Props = {
  children: React.ReactNode;
  component: any;
};

const Base = React.forwardRef<Ref, Props>(
  ({ children, component = 'div', ...rest }, ref) => {
    const Component = component;
    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    );
  }
);
export const BaseElement = styled(Base)`
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
`;
