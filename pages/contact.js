import Container from '../components/container';
import Heading from '../components/primitives/heading';

export default function ContactPage() {
  return (
    <Container as="main" role="main">
      <Heading textColor="primary">Contact</Heading>

      <p>
        Hey! Looking to get in touch? don't be affraid to contact me!. If you'd like to contact me,
        here is how you can do it:
      </p>

      <ul>
        <li>
          DM me on Twitter{' '}
          <a href="https://twitter.com/devrasec/" target="_blank" rel="noopener noreferrer">
            @devrasec
          </a>{' '}
          (preferably)
        </li>

        <li>
          Send me an email to <a href="mailto:luis@luiscontreras.dev">luis@luiscontreras.dev</a>
        </li>

        <li>Or send me a message by filling out the form below.</li>

        {/* TODO: add a contact form here */}
      </ul>
    </Container>
  );
}
