import styled from 'styled-components';

const Image = styled.img`
  ${props =>
    props.isFluid
      ? `
      max-width: 100%;
      height: auto;
      width: 100%;
    `
      : null}
`;

export default Image;
