/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "45.77.170.65",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
