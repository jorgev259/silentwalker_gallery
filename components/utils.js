import path from 'path'
import glob from 'glob'
import fs from 'fs-extra'

export const d2categories = ['emblems', 'seals', 'bonus']
export const devices = ['desktop', 'mobile']
const clanFolder = 'wallpapers/images/Destiny 2/Clan Banners DM or tweet me @silentwalker__ for more info'

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

  const parentUrl = path.relative('wallpapers/images', dir)
    .replaceAll(' ', '').toLowerCase().replaceAll(path.sep, '/')

  const urlName = encodeURI(name.replaceAll(' ', '').toLowerCase())

  return {
    name,
    urlName,
    urlPath: `/${parentUrl}/${urlName}`,
    imgPath: `https://raw.githubusercontent.com/jorgev259/silentwalker_wallpapers/main/${filePath.replace('wallpapers/', '/')}`,
    mtimeMs,
    filePath
  }
}

export async function getImages (galleryPath) {
  const fileList = await globAsync(path.join('wallpapers/images/', galleryPath, '**/*.{jpg,jpeg,png}'), { nodir: true })
  const imageList = await Promise.all(fileList.filter(p => !p.startsWith(clanFolder)).map(f => readImage(f)))

  return imageList
}

export const getModal = (image, images) => images.find(i => i.urlName === image) || null
