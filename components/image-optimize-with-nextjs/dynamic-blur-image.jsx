import Image from "next/image";
import React from "react";
import { getPlaiceholder } from 'plaiceholder';

const DynamicBlurImage = async ({ src }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  })

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <div>
      <Image
        src={src}
        alt="no-pic"
        width={100}
        height={100}
        placeholder="blur"
        sizes="30vw"
        blurDataURL={base64}
      />
    </div>
  );
};

export default DynamicBlurImage;
