import Image from "next/image";
import React from "react";
import ImgOne from "@/public/image3.jpg";
import ImgTwo from "@/public/image4.jpg";
import { staticBlurDataURL } from "@/utils/static-blur-data-url";
import { dynamicBlurDataURL } from '@/utils/dynamicBlurDataurl';

type Props = {};

const imagesUrl = [
    "https://images.unsplash.com/photo-1713520074829-2e862fa8f8ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1652203906963-c47fe9e5c641?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1649694262988-4c457115731f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1651143695459-4d7fb3ba11c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

const ImageOptimizer = async (props: Props) => {
    const placeholder = await Promise.all(imagesUrl.map(url => dynamicBlurDataURL(url)));

    console.log(placeholder);
  return (
    <div>
      {imagesUrl.map((url, index) => {
        return (
          <Image
            key={index}
            src={url}
            alt={url}
            width={100}
            height={100}
            sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw,75vw"
            style={{ width: "100%", height: "auto" }}
            quality={60}
            placeholder="blur"
            blurDataURL={placeholder[index]}
          />
        );
      })}
      <Image
        src={ImgOne}
        alt="hi"
        width={100}
        height={100}
        sizes="(max-width: 425px) 50vw,75vw"
        style={{ width: "100%", height: "auto" }}
        quality={60}
        placeholder="blur"
      />
      <Image
        src={ImgTwo}
        alt="hi"
        width={100}
        height={100}
        sizes="(max-width: 425px) 50vw,75vw"
        style={{ width: "100%", height: "auto" }}
        quality={60}
        placeholder="blur"
      />
    </div>
  );
};

export default ImageOptimizer;
