/* eslint-disable import/no-dynamic-require, global-require */
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import omit from 'lodash/omit';
import Markdown from 'react-markdown';
import { NextSeo } from 'next-seo';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { getAllPostSlugs, getPostBySlug } from '../../lib/posts';
import Heading from '../../components/primitives/heading';
import Container from '../../components/container';
import components from '../../components/mdx';
import Date from '../../components/date';
import config from '../../config/website';

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
  const { title, imageCredit, image, date, slug, seoTitle, seoKeywords, summary, tags } = postData;
  const content = hydrate(mdxSource, { components });
  const { ResponsiveImage } = components;

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={summary}
        additionalMetaTags={[{ name: 'keywords', content: seoKeywords.join(', ') }]}
        canonical={`${config.siteUrl}/blog/${slug}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
            tags,
          },
        }}
      />

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
            <ResponsiveImage imageSrc={`${slug}/${image}`} />
            <figcaption>
              <Markdown>{imageCredit}</Markdown>
            </figcaption>
          </BannerStyles>
        </Container>

        <Container as="section">{content}</Container>
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostBySlug(params.slug);
  const data = omit(postData, 'rawContent');
  const mdxSource = await renderToString(postData.rawContent, {
    components,
    scope: data,
  });

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
