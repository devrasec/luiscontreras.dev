import Header from './header';

const Layout = ({ children }) => (
  <>
    <Header />

    {children}
  </>
);

export default Layout;
