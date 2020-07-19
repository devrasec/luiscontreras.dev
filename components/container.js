import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Container = styled.div`
  width: 100%;
  max-width: ${({ isBig, theme }) => (isBig ? theme.maxWidthBig : theme.maxWidth)};
  margin: 0 auto;
  padding-left: ${themeGet('gap')};
  padding-right: ${themeGet('gap')};
`;

export default Container;
