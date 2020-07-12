import { useState } from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';

import SocialLinks from './social-links';
import { tablet } from '../lib/breakpoints';

const barHeight = '4px';
const barWidth = '40px';
const barColor = 'colors.primary';

const barStyles = css`
  background-color: ${themeGet(barColor)};
  height: ${barHeight};
  right: 10px;
  position: absolute;
  width: ${barWidth};
  transition: all 200ms ease-in-out;
`;

const MenuIcon = styled.div`
  ${barStyles};
  top: 20px;
  ${props => props.isToggleOn && `background-color: transparent`};

  ::before,
  ::after {
    ${barStyles};
    right: 0;
    content: '';
  }

  ::before {
    top: -10px;
    ${props =>
      props.isToggleOn
        ? `transform: rotate(45deg); top: 0; background-color: #ffffff;`
        : `transform: rotate(0);`};
  }

  ::after {
    top: 10px;
    ${props =>
      props.isToggleOn
        ? `transform: rotate(-45deg); top: 0; background-color: #ffffff;`
        : `transform: rotate(0)`}
  }
`;

const MenuOverlay = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  position: absolute;
  left: 0;
  top: 60px;
  background: ${themeGet('colors.secondary')};
  padding-top: ${themeGet('space.xl')};
  ${tablet} {
    height: calc(100vh - 80px);
    top: 80px;
  }

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

const toggleButtonActiveColor = 'colors.primary';

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;
  height: 44px;
  padding: 10px;
  background: ${props =>
    props.isToggleOn ? themeGet(toggleButtonActiveColor)(props) : 'transparent'};

  ${props =>
    props.isToggleOn &&
    `
    span {
      color: #ffffff;
    }
  `};
`;

const MainNav = () => {
  const [isToggleOn, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!isToggleOn);

  return (
    <>
      <ToggleButton isToggleOn={isToggleOn} onClick={toggleMenu} type="button">
        <span
          css={`
            text-transform: uppercase;
            line-height: 23px;
            margin-right: ${themeGet('space.default')};
            font-weight: ${themeGet('fontWeights.bold')};
            color: ${themeGet('colors.primary')};
            padding-right: ${barWidth};
          `}
        >
          Menu
        </span>
        <MenuIcon isToggleOn={isToggleOn} />
      </ToggleButton>

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
