import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';
import MainNav from './main-nav';
import { tablet, untilMobilePlus } from '../lib/breakpoints';

const HeaderStyles = styled.header`
  align-items: center;
  background: ${themeGet('colors.white')};
  box-shadow: ${themeGet('shadows.subtle')};
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding-left: ${themeGet('space.default')};
  padding-right: ${themeGet('space.default')};
  width: 100%;
  ${tablet} {
    height: 80px;
  }
`;

const BrandName = styled.div`
  margin-left: ${themeGet('space.sm')};
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('colors.blue.dark')};
  font-size: ${themeGet('fontSizes.2')};
  text-transform: uppercase;
  font-family: ${themeGet('fonts.heading')};
  line-height: 1;
  ${untilMobilePlus} {
    display: none;
  }
`;

const Header = () => (
  <HeaderStyles>
    <Link href="/" passHref>
      <a
        css={`
          display: flex;
          align-items: center;
          text-decoration: none;
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
      </a>
    </Link>

    <MainNav />
  </HeaderStyles>
);

export default Header;
