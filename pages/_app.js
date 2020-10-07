/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import theme from '../theme';
import GlobalStyle from '../theme/global-style';
import Layout from '../components/layout';
import { pageView } from '../lib/gtag';
import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
