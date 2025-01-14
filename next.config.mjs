/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true, 
      images: {
        formats: ['image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's2.webstatic.net',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'example.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'example.com',
            pathname: '/**',
          },
        ],
      }
  };
  
  export default nextConfig;
  