/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's2.webstatic.net',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'photos.hotelbeds.com',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'image-url.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'image-url.gov',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'images.trvl-media.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'hesari-storage.s3.ir-tbz-sh1.arvanstorage.ir',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 's34.picofile.com',
            pathname: '/**',
          },
        ],
}

}

export default nextConfig