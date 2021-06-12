import React from 'react';
import styled from 'styled-components';

type Ref = HTMLElement;
type Props = {
  children: React.ReactNode;
  component: any;
};

const Base = React.forwardRef<Ref, Props>(
  ({ children, component = 'div', ...rest }) => {
    const Component = component;
    return <Component {...rest}>{children}</Component>;
  }
);
export const BaseElement = styled(Base)`
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
`;
