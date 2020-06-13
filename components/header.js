import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import logoImage from '../assets/images/logo.svg';

const HeaderStyles = styled.header`
  align-items: center;
  background: ${themeGet('colors.white')};
  box-shadow: ${themeGet('shadows.subtle')};
  display: flex;
  height: 80px;
  padding-left: ${themeGet('space.default')};
  padding-right: ${themeGet('space.default')};
  width: 100%;
`;

const Logo = styled.img`
  width: 48px;
`;

const BrandName = styled.div`
  margin-left: ${themeGet('space.sm')};
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('colors.blue.dark')};
`;

const Header = () => (
  <HeaderStyles>
    <Logo src={logoImage} />
    <BrandName>Luis Contreras</BrandName>
  </HeaderStyles>
);

export default Header;
