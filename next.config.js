/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.jennexplores.com',
      'upload.wikimedia.org',
      'lh3.googleusercontent.com',
      'i.pravatar.cc',
    ],
  },
};

module.exports = nextConfig;
