import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from '../theme/global-style';

const containerStyles = {
  maxWidth: '1440px',
  minHeight: '100vh',
  padding: '15px',
  position: 'relative',
  margin: '0 auto',
  width: '100%',
};

const ThemeDecorator = StoryFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div style={containerStyles}>
      <StoryFn />
    </div>
  </ThemeProvider>
);

addDecorator(ThemeDecorator);
