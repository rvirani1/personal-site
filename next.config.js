// eslint-disable

module.exports = {
  distDir: 'build',
  images: {
    domains: ['riazv.me'],
  },
  webpack5: true,

  async headers() {
    return [
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, s-maxage=1800, stale-while-revalidate=1800',
          }
        ],
      },
    ]
  },
}
