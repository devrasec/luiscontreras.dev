import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <div
      css={`
        flex: 1 0 auto;
      `}
    >
      <Header />

      {children}
    </div>

    <Footer />
  </>
);

export default Layout;
