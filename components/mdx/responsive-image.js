/* eslint-disable import/no-dynamic-require,global-require */
import Img from 'react-optimized-image';
import Image from '../primitives/image';

export default function ResponsiveImage({ imageSrc }) {
  const img = require(`../../content/posts/${imageSrc}`);

  // return (
  //   <picture>
  //     <source srcSet={img.srcSet} sizes="(min-width: 860px) 720px, 85.19vw" />
  //     <Image

  //       sizes="(min-width: 860px) 720px, 85.19vw"
  //       srcSet={img.srcSet}
  //       src={img.src}
  //       alt="Image for post"
  //       isFluid
  //     />
  //   </picture>
  // );

  return <Img src={img} type="postImage" alt="Image for post" />;
}
