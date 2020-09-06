/* eslint-disable react/jsx-props-no-spreading */
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from './primitives/link';
import websiteConfig from '../config/website';

const { socialLinks } = websiteConfig;

const SocialLinksStyles = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${themeGet('space.md')};

  a {
    color: ${props => themeGet(`colors.${props.iconColor}`)(props)};
    transition: color 200ms ease-in-out;
    display: block;
    margin: 0 ${themeGet('space.xs')};

    &:hover {
      color: ${props => themeGet(`colors.${props.iconHoverColor}`)(props)};
    }
  }
`;

const SocialLinks = ({ className, iconColor = 'primary', iconHoverColor = 'secondary' }) => (
  <SocialLinksStyles className={className} iconColor={iconColor} iconHoverColor={iconHoverColor}>
    <IconContext.Provider value={{ size: '2rem' }}>
      <Link to={socialLinks.twitter} openNewTab>
        <FaTwitter />
      </Link>

      <Link to={socialLinks.github} openNewTab>
        <FaGithub />
      </Link>

      <Link to={socialLinks.linkedin} openNewTab>
        <FaLinkedin />
      </Link>

      <Link to={socialLinks.instagram} openNewTab>
        <FaInstagram />
      </Link>
    </IconContext.Provider>
  </SocialLinksStyles>
);

export default SocialLinks;
