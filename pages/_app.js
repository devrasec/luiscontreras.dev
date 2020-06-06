import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

export default class SiteApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
