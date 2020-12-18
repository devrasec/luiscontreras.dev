/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import config from '../config/website';

const fontsToPreload = [
  'raleway-v18-latin-700',
  'raleway-v18-latin-regular',
  'raleway-v18-latin-700italic',
  'raleway-v18-latin-italic',
  'montserrat-v15-latin-regular',
  'montserrat-v15-latin-700',
];
export default class SiteDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/jsx-props-no-spreading
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {process.env.ENV === 'production' && (
            <>
              <script
                src={`https://www.googletagmanager.com/gtag/js?id=${config.ga.trackingId}`}
                async
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.ga.trackingId}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
          {fontsToPreload.map(font => (
            <link
              key={font}
              rel="preload"
              as="font"
              type="font/woff2"
              href={`/fonts/${font}.woff2`}
              crossOrigin="anonymous"
            />
          ))}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f26c4f" />
          <meta name="msapplication-TileColor" content="#f26c4f" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
