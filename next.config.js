// eslint-disable

module.exports = {
  distDir: 'build',
  images: {
    domains: ['riazv.me'],
  },
  webpack5: true,
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://riazvme.imgix.net'
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
}
