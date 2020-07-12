import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: ${props => (props.isBig ? '960px' : '720px')};
  margin: 0 auto;
`;

export default Container;
