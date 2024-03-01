/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "m.media-amazon.com",
      "assets.aceternity.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com"
    ],
  },
};

export default nextConfig;
