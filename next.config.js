const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins(
  [
    [optimizedImages, {
      responsive: {
        adapter: require('responsive-loader/sharp')
      }
    }]
  ],
  {
    basePath: isProd ? '/silentwalker_gallery_rework' : '',
    assetPrefix: isProd ? '/silentwalker_gallery_rework/' : '',
    reactStrictMode: true,
    compress: false,
    images: {
      loader: 'custom',
      disableStaticImages: true
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    }
  }
)
