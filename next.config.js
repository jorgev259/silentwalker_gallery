const path = require('path')

module.exports = {
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: 'public/images',
      exportFolderPath: 'out',
      quality: 75
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
