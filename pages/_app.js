import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from '../theme/global-style';

export default class SiteApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
