import path from 'path'

import Gallery from '../../../../components/Gallery'
import { getImages, capitalize, d2categories, devices } from '../../../../components/utils'

export async function getStaticPaths () {
  return {
    paths: devices.map(device =>
      d2categories.map(category => ({ params: { device, category } }))
    ).flat(),
    fallback: false
  }
}

export async function getStaticProps (context) {
  const { params } = context
  const { device, category } = params

  const galleryPath = path.join('Destiny 2', capitalize(device), capitalize(category))

  return {
    props: {
      images: await getImages(galleryPath),
      device
    }
  }
}

export default function Destiny2 (props) {
  return (
    <Gallery {...props} />
  )
}
