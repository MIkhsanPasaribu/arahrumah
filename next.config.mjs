/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arahrumah.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
