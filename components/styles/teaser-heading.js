import Heading from '../primitives/heading';

const TeaserHeading = ({ className, children }) => (
  <Heading
    css={`
      margin-top: 0;
    `}
    as="h3"
    looksLike="h4"
    textColor="secondary"
    className={className}
  >
    {children}
  </Heading>
);

export default TeaserHeading;
