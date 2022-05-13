const glob = require('glob')
const fs = require('fs-extra')

main()

async function main () {
  const files = glob.sync('out/images/drive_gallery/**/*.{jpg,jpeg,png}')
  await Promise.all(files.map(p => fs.remove(p)))
}
