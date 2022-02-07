import path from 'path'
import glob from 'glob'
import fs from 'fs-extra'

const baseFolder = process.env.baseFolder

export const dictionary = {
  destiny1: 'Destiny 1',
  destiny2: 'Destiny 2'
}

export function capitalize ([first, ...rest]) {
  return first.toUpperCase() + rest.join('').toLowerCase()
}

function globAsync (pattern, options = {}) {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err, files) => {
      if (err) return reject(err)
      resolve(files)
    })
  })
}

export async function readImage (filePath) {
  const { mtimeMs } = await fs.stat(filePath)
  const { name } = path.parse(filePath)

  return { mtimeMs, filePath: path.relative(baseFolder, filePath).replaceAll(path.sep, '/'), name }
}

export async function getImages (galleryPath) {
  const fileList = await globAsync(path.join(baseFolder, galleryPath, '**'), { nodir: true })
  const imageList = await Promise.all(fileList.map(f => readImage(f)))

  return imageList.sort((a, b) => a.mtimeMs - b.mtimeMs).reverse()
}
