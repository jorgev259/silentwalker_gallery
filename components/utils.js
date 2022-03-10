import path from 'path'
import glob from 'glob'
import fs from 'fs-extra'

export const dictionary = {
  destiny1: 'Destiny 1',
  destiny2: 'Destiny 2',
  desktop: 'Desktop',
  mobile: 'Mobile'
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

async function readImage (filePath) {
  const { mtimeMs } = await fs.stat(filePath)
  const { name } = path.parse(filePath)

  return {
    name,
    mtimeMs,
    filePath: path.relative('img/drive_gallery', filePath).replaceAll(path.sep, '/')
  }
}

export async function getImages (galleryPath) {
  const fileList = await globAsync(path.join('img/drive_gallery', galleryPath, '**'), { nodir: true })
  const imageList = await Promise.all(fileList.map(f => readImage(f)))

  return imageList
}

export async function getModal (modalInput, galleryPath) {
  if (!modalInput) return null

  const [modalName] = modalInput
  const filePath = path.join('img/drive_gallery', galleryPath, `${modalName}.jpg`)
  const exists = await fs.pathExists(filePath)

  if (exists) return await readImage(filePath)
  return null
}
