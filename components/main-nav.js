import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FocusLock from 'react-focus-lock';
import SocialLinks from './social-links';
import { tablet } from '../lib/breakpoints';
import { fancyBg } from '../theme/mixins';

const barHeight = '4px';
const barWidth = '40px';

const barStyles = css`
  background-color: ${themeGet('colors.primary')};
  height: ${barHeight};
  right: 10px;
  position: absolute;
  width: ${barWidth};
  transition: all 200ms ease-in-out;
`;

const MenuIcon = styled.div`
  ${barStyles};
  top: 20px;
  ${props => props.isToggleOn && 'background-color: transparent'};

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
        ? 'transform: rotate(45deg); top: 0; background-color: #ffffff;'
        : 'transform: rotate(0);'};
  }

  ::after {
    top: 10px;
    ${props =>
      props.isToggleOn
        ? 'transform: rotate(-45deg); top: 0; background-color: #ffffff;'
        : 'transform: rotate(0)'}
  }
`;

const MenuOverlay = styled.div`
  ${fancyBg};
  width: 100%;
  height: calc(100vh - 60px);
  position: absolute;
  left: 0;
  top: 60px;
  padding-top: ${themeGet('space.xl')};
  overflow: auto;
  z-index: 1;
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
      font-size: ${themeGet('fontSizes.4')};
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
          color: ${themeGet('colors.secondary')};
        }
      }
    }
  }

  a:focus {
    box-shadow: ${themeGet('shadows.outline')};
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
  order: 1;
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
  const router = useRouter();
  const toggleMenu = () => setToggle(!isToggleOn);

  useEffect(() => {
    if (isToggleOn) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isToggleOn]);

  useEffect(() => {
    const hideMenu = () => setToggle(false);

    router.events.on('routeChangeComplete', hideMenu);

    return () => router.events.off('routeChangeComplete', hideMenu);
  }, [router]);

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
        <FocusLock autoFocus={false}>
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

            <SocialLinks iconHoverColor="secondary" iconColor="white" />
          </MenuOverlay>
        </FocusLock>
      )}
    </>
  );
};

export default MainNav;
