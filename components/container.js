import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Container = styled.div`
  width: 100%;
  max-width: ${props => (props.isBig ? '960px' : '720px')};
  margin: 0 auto;
  padding-left: ${themeGet('gap')};
  padding-right: ${themeGet('gap')};
`;

export default Container;
