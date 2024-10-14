/** @type {import('next').NextConfig} */

import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", 'res.cloudinary.com', 'images.pexels.com', "cdn.pixabay.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
