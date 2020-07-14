import styled from 'styled-components';
import Heading from '../primitives/heading';

const TeaserHeading = styled(Heading).attrs({ as: 'h3', looksLike: 'h5', textColor: 'secondary' })`
  margin-top: 0;
`;

export default TeaserHeading;
