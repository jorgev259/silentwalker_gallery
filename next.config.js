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
    reactStrictMode: true,
    compress: false,
    images: {
      loader: 'custom',
      disableStaticImages: true,
      domains: ['destinyemblemwallpapers.com']
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    }
  }
)
