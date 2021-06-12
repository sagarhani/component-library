# React Component Library

> 📚 React based component library

## Installation

```bash
npm i @sagarhani/component-library react react-dom styled-components
```

or

```bash
yarn add @sagarhani/component-library react react-dom styled-components
```

## Set up Provider

For Component library to work correctly, you need to set up the `ThemeProvider` at the root of your application.

Go to the root of your application and do this:

```js
import * as React from 'react';

// 1. import `ThemeProvider` component
import { ThemeProvider } from '@sagarhani/component-library';

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}
```
