
module.exports = {
  basePath: process.env.NODE_ENV === 'production' ? 'rework' : '/',
  reactStrictMode: true,
  compress: false,
  images: {
    domains: ['destinyemblemwallpapers.com']
  }
}
