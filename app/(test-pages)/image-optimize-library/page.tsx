import Image from "next/image";
import React from "react";
import ImageOne from "@/public/image3.jpg";
import DynamicBlurImage from '@/components/image-optimize-with-nextjs/dynamic-blur-image'

const ImageOptimizePage = () => {
  const remoteUrl = "https://cdn.pixabay.com/photo/2024/09/19/07/46/versailles-9057981_960_720.jpg";
  return (
    <div>
      <DynamicBlurImage src={remoteUrl}/>
      {/* <Image
        src={ImageOne}
        alt="no-pic"
        width={100}
        height={100}
        placeholder="blur"
        sizes="30vw"
      /> */}
    </div>
  );
};

export default ImageOptimizePage;
