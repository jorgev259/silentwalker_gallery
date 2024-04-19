const path = require('path')

module.exports = {
  basePath: '/silentwalker_gallery_next',
  swcMinify: true,
  output: 'export',
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
