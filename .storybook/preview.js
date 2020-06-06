import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

const ThemeDecorator = StoryFn => (
  <ThemeProvider theme={theme}>
    <div style={{ minHeight: '100vh', padding: '15px', position: 'relative' }}>
      <StoryFn />
    </div>
  </ThemeProvider>
);

addDecorator(ThemeDecorator);
