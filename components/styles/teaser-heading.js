import styled from 'styled-components';
import Heading from '../primitives/heading';

const HeadingStyles = styled(Heading)`
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const TeaserHeading = ({ className, children }) => (
  <HeadingStyles
    css={`
      margin-top: 0;
    `}
    as="h3"
    looksLike="h4"
    textColor="primary"
    className={className}
  >
    {children}
  </HeadingStyles>
);

export default TeaserHeading;
