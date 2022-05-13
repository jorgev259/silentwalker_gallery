const path = require('path')

module.exports = {
  images: {
    loader: 'custom',
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
