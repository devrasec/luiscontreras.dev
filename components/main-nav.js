import { useState } from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';

import SocialLinks from './social-links';

const barHeight = '4px';
const barWidth = '40px';
const barColor = 'colors.primary';

const barStyles = css`
  background-color: ${themeGet(barColor)};
  height: ${barHeight};
  left: 0;
  position: absolute;
  width: ${barWidth};
  transition: all 200ms ease-in-out;
`;

const MenuIcon = styled.div`
  ${barStyles};
  top: 10px;
  ${props => props.isToggleOn && `background-color: transparent`};

  ::before,
  ::after {
    ${barStyles};
    content: '';
  }

  ::before {
    top: -10px;
    ${props => (props.isToggleOn ? `transform: rotate(45deg); top: 0;` : `transform: rotate(0)`)}
  }

  ::after {
    top: 10px;
    ${props => (props.isToggleOn ? `transform: rotate(-45deg); top: 0;` : `transform: rotate(0)`)}
  }
`;

const MenuOverlay = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  position: absolute;
  left: 0;
  top: 80px;
  background: ${themeGet('colors.secondary')};
  padding-top: ${themeGet('space.xl')};

  nav {
    > ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: center;
      font-size: ${themeGet('fontSizes.3')};
      font-family: ${themeGet('fonts.heading')};
      font-weight: ${themeGet('fontWeights.bold')};

      li {
        margin-bottom: ${themeGet('space.default')};
      }

      a {
        color: ${themeGet('colors.white')};
        text-decoration: none;
        transition: color 200ms ease-in-out;

        &:hover {
          color: ${themeGet('colors.primary')};
        }
      }
    }
  }
`;

const MainNav = () => {
  const [isToggleOn, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!isToggleOn);

  return (
    <>
      <button
        onClick={toggleMenu}
        css={`
          background: transparent;
          border: none;
          position: relative;
          cursor: pointer;
          width: ${barWidth};
          height: 24px;
          :hover,
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
        type="button"
      >
        <MenuIcon isToggleOn={isToggleOn} />
      </button>

      {isToggleOn && (
        <MenuOverlay>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>

          <SocialLinks />
        </MenuOverlay>
      )}
    </>
  );
};

export default MainNav;
