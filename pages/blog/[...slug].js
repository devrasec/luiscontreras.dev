/* eslint-disable import/no-dynamic-require, global-require */
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { parseISO, format } from 'date-fns';
import omit from 'lodash/omit';
import Markdown from 'react-markdown';
import { NextSeo, ArticleJsonLd } from 'next-seo';
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
  const { title, imageCredit, image, date, slug, seoTitle, summary, tags } = postData;
  const content = hydrate(mdxSource, { components });
  const postUrl = `${config.siteUrl}/blog/${slug}`;
  const dateFormatted = format(parseISO(date), 'Y-M-d');

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={summary}
        canonical={postUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
            tags,
          },
          // images: [
          //   {
          //     url: postImageSrc,
          //     width: img.width,
          //     height: img.height,
          //   },
          // ],
        }}
      />

      <ArticleJsonLd
        url={postUrl}
        title={seoTitle}
        datePublished={dateFormatted}
        dateModified={dateFormatted}
        authorName="Luis Contreras"
        publisherName="Luis Contreras"
        publisherLogo={`${config.siteUrl}/images/logo.jpg`}
        // images={[postImageSrc]}
        description={summary}
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

        {image && (
          <Container
            css={`
              margin-bottom: ${themeGet('space.xl')};
            `}
          >
            <BannerStyles>
              {imageCredit && (
                <figcaption>
                  <Markdown>{imageCredit}</Markdown>
                </figcaption>
              )}
            </BannerStyles>
          </Container>
        )}

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
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}
