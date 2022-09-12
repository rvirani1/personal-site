// eslint-disable

module.exports = {
  distDir: 'build',
  images: {
    domains: ['riazv.me'],
  },
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://riazvme.imgix.net'
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|css|woff2)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, stale-while-revalidate',
          }
        ],
      },
    ]
  },
}
