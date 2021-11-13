import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { FaLaptopCode, FaHeart, FaMugHot } from 'react-icons/fa';
import { rem } from 'polished';
import Heading from './primitives/heading';
import SocialLinks from './social-links';

const FooterStyles = styled.footer`
  width: 100%;
  background-color: ${themeGet('colors.primary')};
  color: ${themeGet('colors.white')};
  padding: ${themeGet('space.xl')} ${themeGet('space.default')} ${themeGet('space.lg')};
  flex-shrink: 0;

  .footer-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  q {
    font-weight: ${themeGet('fontWeights.body')};
  }
`;

const Copyright = styled.p`
  max-width: 260px;
  margin: ${themeGet('space.xxl')} auto 0;
  display: grid;
  align-items: center;
  grid-gap: ${themeGet('space.sm')};
  column-gap: ${themeGet('space.sm')};
  grid-template-columns: minmax(${rem(165)}, 1fr) repeat(3, 1fr);

  svg {
    justify-self: center;
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="footer-content">
      <Heading as="q" looksLike="h4" textColor="white">
        Whatever you are waiting for is on its way to you. Be patient!
      </Heading>

      <SocialLinks iconColor="white" />

      <Copyright>
        <span>Luis Contreras &copy; 2021</span>
        <FaLaptopCode title="Code" />
        <FaMugHot title="Coffee" />
        <FaHeart title="Love" />
      </Copyright>
    </div>
  </FooterStyles>
);

export default Footer;
