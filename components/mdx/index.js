/* eslint-disable react/display-name,react/jsx-props-no-spreading */
import ResponsiveImage from './responsive-image';
import Heading from '../primitives/heading';

export default {
  h1: props => <Heading as="h1" {...props} />,
  h2: props => <Heading as="h2" {...props} />,
  h3: props => <Heading as="h3" {...props} />,
  h4: props => <Heading as="h4" {...props} />,
  h5: props => <Heading as="h5" {...props} />,
  ResponsiveImage,
};
