const sharp = require('sharp')
const glob = require('glob')
const fs = require('fs-extra')
const checksum = require('checksum')

const quality = 30
const cache = fs.readJSONSync('./thumbCache.json', { throws: false }) || {}

let max
let current = 0

async function optimiseFile (filePath) {
  const { mtimeMs } = await fs.stat(filePath)
  const cs = checksum(filePath)
  const check = `${cs}-${mtimeMs}`

  let parentDir = filePath.split('/')
  const fileName = parentDir.pop().split('.').shift()
  parentDir = parentDir.join('/')

  if (cache[filePath] === check) {
    current++
    return console.log(`Skipped "${fileName}" (${current}/${max})`)
  }

  const outputDir = parentDir.replace('wallpapers/', 'public/images/thumbs/')
  const outputPath = `${outputDir}/${fileName}`

  if (!cache[filePath] && fs.existsSync(`${outputPath}.jpg`) && fs.existsSync(`${outputPath}.webp`)) {
    cache[filePath] = check
    current++
    return console.log(`Skipped "${fileName}" (${current}/${max})`)
  }

  cache[filePath] = check

  await fs.ensureDir(outputDir)
  const image = sharp(filePath)

  await Promise.all([
    image.jpeg({ quality }).toFile(`${outputPath}.jpg`),
    image.webp({ quality }).toFile(`${outputPath}.webp`)
  ])

  current++
  console.log(`Created thumbnail for "${fileName}" (${current}/${max})`)
}

async function main () {
  const files = glob.sync('wallpapers/**/*.{jpg,jpeg,png}')
  max = files.length

  await Promise.all(files.map(f => optimiseFile(f)))
  await fs.outputJSON('./thumbCache.json', cache, { spaces: 4 })
}

main()
