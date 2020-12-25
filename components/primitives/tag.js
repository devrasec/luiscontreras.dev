import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';

const TagStyles = styled.a`
  border-radius: 30px;
  background-color: ${themeGet('colors.gray.light')};
  color: ${themeGet('colors.primary')};
  padding: 5px 18px;
  font-size: ${themeGet('fontSizes.sm')};
  text-decoration: none;

  &:hover {
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.primary')};
  }
`;

export default function Tag({ tagName, className }) {
  return (
    <Link href="/tag/[tag]" as={`/tag/${tagName}`} passHref>
      <TagStyles className={className} rel="tag">
        #{tagName}
      </TagStyles>
    </Link>
  );
}
