/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "img.clerk.com"],
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
  onError: (error) => {
    console.error(error);
  },
};

export default nextConfig;