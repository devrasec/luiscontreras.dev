/* eslint-disable react/jsx-props-no-spreading */
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import websiteConfig from '../config/website';

const { socialLinks } = websiteConfig;

const commonLinkProps = {
  rel: 'noreferrer noopener',
  target: '_blank',
};

// TODO: Create links component (anchors).
const SocialLinksStyles = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${themeGet('space.md')};

  a {
    color: ${themeGet('colors.primary')};
    transition: color 200ms ease-in-out;
    display: block;
    margin: 0 ${themeGet('space.xs')};

    &:hover {
      color: ${themeGet('colors.white')};
    }
  }
`;

const SocialLinks = ({ className }) => (
  <SocialLinksStyles className={className}>
    <IconContext.Provider value={{ size: '2rem' }}>
      <a href={socialLinks.twitter} {...commonLinkProps}>
        <FaTwitter />
      </a>

      <a href={socialLinks.github} {...commonLinkProps}>
        <FaGithub />
      </a>

      <a href={socialLinks.linkedin} {...commonLinkProps}>
        <FaLinkedin />
      </a>
    </IconContext.Provider>
  </SocialLinksStyles>
);

export default SocialLinks;
