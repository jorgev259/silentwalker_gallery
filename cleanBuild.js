const glob = require('glob')
const fs = require('fs-extra')

main()

async function main () {
  const files = glob.sync('out/images/drive_gallery/**/*.{jpg,jpeg,png}')
  console.log(`Found ${files.length} image files to delete`)

  await Promise.all(files.map(p => fs.remove(p)))
  console.log('Source images deleted from out folder')
}
