/* eslint-disable react/display-name,react/jsx-props-no-spreading */
import Heading from '../primitives/heading';

export default {
  h1: props => <Heading as="h1" looksLike="h2" textColor="primary" {...props} />,
  h2: props => <Heading as="h2" looksLike="h3" textColor="primary" {...props} />,
  h3: props => <Heading as="h3" looksLike="h4" textColor="primary" {...props} />,
  h4: props => <Heading as="h4" looksLike="h5" textColor="primary" {...props} />,
  h5: props => <Heading as="h5" textColor="primary" {...props} />,
};
