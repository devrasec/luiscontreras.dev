/* eslint-disable import/no-dynamic-require, global-require */
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import omit from 'lodash/omit';
import Markdown from 'react-markdown';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { getAllPostSlugs, getPostBySlug } from '../../lib/posts';
import Heading from '../../components/primitives/heading';
import Container from '../../components/container';
import mdxComponents from '../../components/mdx-components';
import Image from '../../components/primitives/image';
import Date from '../../components/date';

const PubDate = styled(Date)``;

const ArticleMeta = styled(Container)`
  text-align: center;
  margin-bottom: ${themeGet('space.md')};
  font-family: ${themeGet('fonts.heading')};
  ${PubDate} {
    color: ${themeGet('colors.blue.light')};
    font-weight: ${themeGet('fontWeights.bold')};
  }
`;

const BannerStyles = styled.figure`
  figcaption {
    text-align: center;
    margin-top: ${themeGet('space.sm')};
  }
`;

export default function Post({ postData, mdxSource }) {
  const { title, imageCredit, image, date } = postData;
  const content = hydrate(mdxSource, mdxComponents);
  const img = require(`../../content/posts/sample-post/${image}?resize&sizes[]=360&sizes[]=720&sizes[]=1440`);

  return (
    <article>
      <Container as="header" isBig>
        <Heading
          textColor="primary"
          looksLike="h2"
          css={`
            text-align: center;
          `}
        >
          {title}
        </Heading>
      </Container>

      <ArticleMeta isBig>
        Published <PubDate dateString={date} isPubdate />
      </ArticleMeta>

      <Container
        css={`
          margin-bottom: ${themeGet('space.xl')};
        `}
      >
        <BannerStyles>
          <picture>
            <source srcSet={img.srcSet} sizes="(min-width: 860px) 720px, 85.19vw" />
            <Image
              sizes="(min-width: 860px) 720px, 85.19vw"
              srcSet={img.srcSet}
              src={img.src}
              alt="Image for post"
              isFluid
            />
          </picture>
          <figcaption>
            <Markdown>{imageCredit}</Markdown>
          </figcaption>
        </BannerStyles>
      </Container>

      <Container as="section">{content}</Container>
    </article>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostBySlug(params.slug);
  const data = omit(postData, 'rawContent');
  const mdxSource = await renderToString(postData.rawContent, mdxComponents, null, data);

  return {
    props: {
      postData: data,
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}
