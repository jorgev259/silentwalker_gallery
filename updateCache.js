const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const checksum = require('checksum')
const sharp = require('sharp')

const quality = 30

const imagesCache = fs.readJSONSync('./imagesCache.json', { throws: false }) || {
  'Destiny 1': {
    Desktop: {},
    Mobile: {}
  },
  'Destiny 2': {
    Desktop: {
      Bonus: {},
      Emblems: {},
      Seals: {}
    },
    Mobile: {
      Bonus: {},
      Emblems: {},
      Seals: {}
    }
  }
}

const pathsCache = {
  'Destiny 1': [],
  'Destiny 2': []
}

function globAsync (pattern, options = {}) {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err, files) => {
      if (err) return reject(err)
      resolve(files)
    })
  })
}

const urlify = text => text.replaceAll(' ', '').toLowerCase()

async function optimiseFile (filePath, device) {
  const isDesktop = device === 'Desktop'
  const { dir, name } = path.parse(filePath)

  const thumbDir = dir.replace('/images/', '/thumbs/')
  const discordDir = dir.replace('/images/', '/discord/')

  await fs.ensureDir(thumbDir)
  await fs.ensureDir(discordDir)

  const image = sharp(filePath)
    .resize({
      fit: sharp.fit.contain,
      width: isDesktop ? 640 : undefined,
      height: isDesktop ? undefined : 700
    })

  await Promise.all([
    image.jpeg({ quality }).toFile(`${thumbDir}/${name}.jpg`),
    image.webp({ quality }).toFile(`${thumbDir}/${name}.webp`)
  ])

  const thumb = sharp(`${thumbDir}/${name}.jpg`)
  const metadata = await thumb.metadata()

  const isLandscape = metadata.width > metadata.height
  const baseSize = isLandscape ? metadata.height : metadata.width

  await thumb
    .jpeg({ quality })
    .extract({
      top: Math.floor(isLandscape ? 0 : (metadata.height - metadata.width) / 2),
      left: Math.floor(isLandscape ? (metadata.width - metadata.height) / 2 : 0),
      width: baseSize,
      height: baseSize
    })
    .toFile(`${discordDir}/${name}.jpg`)
}

async function readFile (filePath) {
  const args = filePath.replace('./wallpapers/images/', '').split('/')
  const [game, device] = args

  if (device === 'Clan Banners DM or tweet me @silentwalker__ for more info') return

  const check = checksum(filePath)
  const { mtimeMs } = await fs.stat(filePath)
  const { name, ext } = path.parse(filePath)
  const urlName = encodeURI(urlify(name))

  switch (game) {
    case 'Destiny 1': {
      if (!imagesCache[game][device][urlName] || imagesCache[game][device][urlName].checksum !== check) await optimiseFile(filePath, device)

      const parentDir = `/Destiny 1/${device}`

      imagesCache[game][device][urlName] = {
        name,
        ext,
        urlName,
        mtimeMs,
        imgPath: `${parentDir}/${name}`,
        urlPath: urlify(`${parentDir}/${urlName}`),
        checksum: check
      }
      pathsCache['Destiny 1'].push({ params: { device: urlify(device), image: urlName } })
      break
    }

    case 'Destiny 2': {
      const category = args[2]
      const parentDir = `/Destiny 2/${device}/${category}`

      if (!imagesCache[game][device][category][urlName] || imagesCache[game][device][category][urlName].checksum !== check) await optimiseFile(filePath, device)

      imagesCache[game][device][category][urlName] = {
        name,
        ext,
        urlName,
        mtimeMs,
        imgPath: `${parentDir}/${name}`,
        urlPath: urlify(`${parentDir}/${urlName}`),
        checksum: check
      }
      pathsCache[game].push({ params: { device: urlify(device), category: urlify(category), image: urlName } })
      break
    }
  }
}

async function main () {
  const files = await globAsync('./wallpapers/images/**/*.{jpg,jpeg,png}')
  await Promise.all(files.map(readFile))

  await fs.outputJSON('./imagesCache.json', imagesCache, { spaces: 4 })
  await fs.outputJSON('./pathsCache.json', pathsCache, { spaces: 4 })
  return 1
}

main()
