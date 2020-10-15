import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { useRouter } from 'next/router';
import FocusLock from 'react-focus-lock';
import SocialLinks from './social-links';
import { tablet } from '../lib/breakpoints';
import Link from './primitives/link';

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
  background-color: #1b325f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%231b325f' cx='50' cy='0' r='50'/%3E%3Cg fill='%23293565' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%2336376b' cx='50' cy='100' r='50'/%3E%3Cg fill='%2343396f' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23503a73' cx='50' cy='200' r='50'/%3E%3Cg fill='%235d3c77' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%236a3d79' cx='50' cy='300' r='50'/%3E%3Cg fill='%23773d7b' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23843e7c' cx='50' cy='400' r='50'/%3E%3Cg fill='%23903f7c' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%239c407b' cx='50' cy='500' r='50'/%3E%3Cg fill='%23a84179' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b44277' cx='50' cy='600' r='50'/%3E%3Cg fill='%23be4473' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c84770' cx='50' cy='700' r='50'/%3E%3Cg fill='%23d24b6b' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23da5066' cx='50' cy='800' r='50'/%3E%3Cg fill='%23e15561' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e85c5b' cx='50' cy='900' r='50'/%3E%3Cg fill='%23ee6355' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f26b4e' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
  padding-top: ${themeGet('space.xl')};
  overflow: auto;
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
          color: ${themeGet('colors.primary')};
        }
      }
    }
  }

  a:focus {
    box-shadow: ${themeGet('shadows.outlineDarkBg')};
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
  });

  useEffect(() => {
    const hideMenu = () => setToggle(false);

    router.events.on('routeChangeStart', hideMenu);

    return () => router.events.off('routeChangeStart', hideMenu);
  });

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
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link to="/uses">
                    <a>Uses</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <SocialLinks iconHoverColor="white" />
          </MenuOverlay>
        </FocusLock>
      )}
    </>
  );
};

export default MainNav;
