import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { setLightness } from 'polished';

const primaryStyles = css`
  background: ${themeGet('colors.primary')};

  &:hover,
  &:focus {
    background: ${props => setLightness(0.34, themeGet('colors.primary')(props))};
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
  }

  &:active {
    background: ${props => setLightness(0.53, themeGet('colors.secondary')(props))};
  }
`;

const ButtonStyles = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  color: ${themeGet('colors.white')};
  cursor: pointer;
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

const Button = ({ children, className, variant = 'primary' }) => (
  <ButtonStyles className={className} variant={variant}>
    {children}
  </ButtonStyles>
);

export default Button;
