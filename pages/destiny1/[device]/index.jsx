import path from 'path'

import Gallery from '../../../components/Gallery'
import { getImages, capitalize } from '../../../components/utils'

export async function getStaticPaths () {
  return {
    paths: [
      { params: { device: 'desktop' } },
      { params: { device: 'mobile' } }
    ],
    fallback: false
  }
}

export async function getStaticProps (context) {
  const { params } = context
  const { device } = params

  const galleryPath = path.join('Destiny 1', capitalize(device))

  return {
    props: {
      images: await getImages(galleryPath),
      device
    }
  }
}

export default function Destiny1 (props) {
  return (
    <Gallery {...props} />
  )
}
