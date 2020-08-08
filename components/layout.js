import { useRouter } from 'next/router';
import Header from './header';
import Footer from './footer';
import PageWrapper from './styles/page-wrapper';

const Layout = ({ children }) => {
  const router = useRouter();
  const isFrontpage = router.pathname === '/';

  return (
    <>
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
