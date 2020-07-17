import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Heading from './primitives/heading';
import SocialLinks from './social-links';

const FooterStyles = styled.footer`
  width: 100%;
  background-color: ${themeGet('colors.primary')};
  color: ${themeGet('colors.white')};
  padding: ${themeGet('space.xl')} ${themeGet('space.default')} ${themeGet('space.lg')};

  .footer-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  q {
    font-weight: ${themeGet('fontWeights.body')};
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="footer-content">
      <Heading as="q" looksLike="h4" textColor="white">
        Whatever you are waiting for is on its way to you. Be patient!
      </Heading>

      <SocialLinks iconColor="white" />

      <p>Website made by me &copy; 2020</p>
    </div>
  </FooterStyles>
);

export default Footer;
