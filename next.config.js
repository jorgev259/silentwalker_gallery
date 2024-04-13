const path = require('path')

module.exports = {
  swcMinify: true,
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
