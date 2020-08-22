/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import theme from '../theme';
import GlobalStyle from '../theme/global-style';
import Layout from '../components/layout';

import SEO from '../next-seo.config';

export default class SiteApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
