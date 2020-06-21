import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import MainNav from './main-nav';

const HeaderStyles = styled.header`
  align-items: center;
  background: ${themeGet('colors.white')};
  box-shadow: ${themeGet('shadows.subtle')};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding-left: ${themeGet('space.default')};
  padding-right: ${themeGet('space.default')};
  width: 100%;
`;

const BrandName = styled.div`
  margin-left: ${themeGet('space.sm')};
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('colors.blue.dark')};
`;

const Header = () => (
  <HeaderStyles>
    <div
      css={`
        display: flex;
        align-items: center;
      `}
    >
      <img
        css={`
          width: 48px;
        `}
        alt="website logo"
        src="/images/logo.svg"
      />
      <BrandName>Luis Contreras</BrandName>
    </div>

    <MainNav />
  </HeaderStyles>
);

export default Header;
