'use client'
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { backgroundRemoval, dropShadow } from "@cloudinary/url-gen/actions/effect";
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


const CloudinaryImage = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dgp9ps5li' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        // .effect(backgroundRemoval())
        // .effect(dropShadow())
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (<AdvancedImage cldImg={img}/>);
};

export default CloudinaryImage