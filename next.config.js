const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const path = require('path')

module.exports = withPlugins(
  [
    [optimizedImages, {
      responsive: {
        adapter: require('responsive-loader/sharp')
      }
    }]
  ],
  {
    basePath: process.env.NODE_ENV === 'production' ? '/silentwalker_gallery_rework' : '',
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
