import path from 'path'
import glob from 'glob'
import fs from 'fs-extra'

export const d2categories = ['emblems', 'seals', 'bonus']
export const devices = ['desktop', 'mobile']

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
  const { name, dir } = path.parse(filePath)

  const parentUrl = path.relative('public/images/drive_gallery', dir)
    .replaceAll(' ', '').toLowerCase().replaceAll(path.sep, '/')

  const urlName = encodeURI(name.replaceAll(' ', '').toLowerCase())

  return {
    name,
    urlName,
    urlPath: `/${parentUrl}/${urlName}`,
    imgPath: `https://raw.githubusercontent.com/jorgev259/silentwalker_gallery_rework/main/${filePath}`,
    mtimeMs,
    filePath
  }
}

export async function getImages (galleryPath) {
  const fileList = await globAsync(path.join('public/images/drive_gallery', galleryPath, '**'), { nodir: true })
  const imageList = await Promise.all(fileList.map(f => readImage(f)))

  return imageList
}

export const getModal = (image, images) => images.find(i => i.urlName === image) || null
