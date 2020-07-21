import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { setLightness } from 'polished';

const buttonStyles = css`
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  border: none;
`;

const primaryStyles = css`
  background: ${themeGet('colors.primary')};

  &:hover,
  &:focus {
    background: ${props => setLightness(0.34, themeGet('colors.primary')(props))};
    color: ${themeGet('colors.white')};
  }

  &:active {
    background: ${props => setLightness(0.14, themeGet('colors.primary')(props))};
  }
`;

const secondaryStyles = css`
  background: ${themeGet('colors.secondary')};

  &:hover,
  &:focus {
    background: ${props => setLightness(0.73, themeGet('colors.secondary')(props))};
    color: ${themeGet('colors.white')};
  }

  &:active {
    background: ${props => setLightness(0.53, themeGet('colors.secondary')(props))};
  }
`;

const Button = styled.button.attrs(({ as, variant }) => ({
  variant: variant || 'primary',
  as: as === 'a' || as === 'button' ? as : 'button',
}))`
  ${({ as }) => as === 'button' && buttonStyles};
  color: ${themeGet('colors.white')};
  display: inline-block;
  font-family: ${themeGet('fonts.heading')};
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: 1.5;
  margin: 0;
  padding: 0.75rem 1.875rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 6px;
  transition: all 200ms ease-in-out;

  &:active {
    transform: scale(0.99);
  }

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return secondaryStyles;
      case 'primary':
      default:
        return primaryStyles;
    }
  }}
`;

export default Button;
