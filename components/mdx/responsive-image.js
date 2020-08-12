/* eslint-disable import/no-dynamic-require,global-require */
import Image from '../primitives/image';

export default function ResponsiveImage({ imageSrc }) {
  const img = require(`../../content/posts/${imageSrc}?resize&sizes[]=360&sizes[]=720&sizes[]=1440`);

  return (
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
  );
}
