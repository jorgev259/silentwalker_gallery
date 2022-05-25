const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const checksum = require('checksum')

const imagesCache = {
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

async function readFile (filePath) {
  const args = filePath.replace('./wallpapers/images/', '').split('/')
  const [game, device] = args

  const { mtimeMs } = await fs.stat(filePath)
  const { name, ext } = path.parse(filePath)
  const urlName = encodeURI(urlify(name))

  switch (game) {
    case 'Destiny 1': {
      const check = checksum(filePath)
      const parentDir = `/Destiny 2/${device}`

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
      if (device === 'Clan Banners DM or tweet me @silentwalker__ for more info') return

      const check = checksum(filePath)
      const category = args[2]
      const parentDir = `/Destiny 2/${device}/${category}`

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
