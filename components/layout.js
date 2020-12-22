import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import PageWrapper from './styles/page-wrapper';
import config from '../config/website';

const fontsToPreload = [
  'raleway-v18-latin-700',
  'raleway-v18-latin-regular',
  'raleway-v18-latin-700italic',
  'raleway-v18-latin-italic',
  'montserrat-v15-latin-regular',
  'montserrat-v15-latin-700',
];

const Layout = ({ children }) => {
  const router = useRouter();
  const isFrontpage = router.pathname === '/';

  return (
    <>
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

      <div
        css={`
          flex: 1 0 auto;
        `}
      >
        <Header />

        {isFrontpage ? children : <PageWrapper>{children}</PageWrapper>}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
