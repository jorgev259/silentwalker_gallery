import pathsCache from '../pathsCache.json'
import imagesCache from '../imagesCache.json'

export const d2categories = ['emblems', 'seals', 'bonus']
export const devices = ['desktop', 'mobile']

export function capitalize ([first, ...rest]) {
  return first.toUpperCase() + rest.join('').toLowerCase()
}

export function getImages (game, device, category) {
  const base = imagesCache[game][device]
  return Object.values(game === 'Destiny 2' ? base[category] : base)
}
export function getImage (game, device, name, category) {
  const base = imagesCache[game][device]
  const parent = game === 'Destiny 2' ? base[category] : base

  return parent[name]
}
export const getPaths = galleryPath => pathsCache[galleryPath]
