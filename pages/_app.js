import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyle from '../theme/global-style';
import Layout from '../components/layout';

export default class SiteApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
