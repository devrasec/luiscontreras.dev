import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rem } from 'polished';
import { tablet } from '../lib/breakpoints';
import Heading from './primitives/heading';

const CardStyles = styled.div`
  border-radius: 16px;
  box-shadow: ${themeGet('shadows.subtle')};
  padding: ${themeGet('gap')};
  width: 100%;
  ${tablet} {
    padding: ${themeGet('space.lg')} ${rem(120)};
  }

  h2 {
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      margin-right: ${themeGet('space.xxs')};
      color: ${themeGet('colors.secondary')};
      font-size: 0.7em;
    }
  }

  .card-content {
    padding-top: ${themeGet('space.default')};
  }
`;

const Card = ({ heading, children, icon: Icon }) => (
  <CardStyles>
    <Heading as="h2" textColor="primary">
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      {heading}
    </Heading>
    <div className="card-content">{children}</div>
  </CardStyles>
);

export default Card;
