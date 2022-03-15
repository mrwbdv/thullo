import React from 'react';
import { Button } from '../shared/atoms';
import { GlobalStyles } from './global-styles';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Button>Test Button</Button>
    </>
  );
}