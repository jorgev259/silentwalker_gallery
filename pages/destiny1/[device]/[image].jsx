import path from 'path'

import Gallery from '../../../components/Gallery'
import { getImages, capitalize, getModal } from '../../../components/utils'

export async function getStaticPaths () {
  const images = await getImages('Destiny 1')
  const paths = images.map(i => {
    const [, device] = i.urlPath.split('/').filter(i => i.length > 0)
    return { params: { device, image: i.urlName } }
  })

  return { paths, fallback: false }
}

export async function getStaticProps (context) {
  const { params } = context
  const { device, image } = params

  const galleryPath = path.join('Destiny 1', capitalize(device))
  const images = await getImages(galleryPath)
  const modal = await getModal(image, images)

  return {
    props: {
      modal,
      images,
      device
    }
  }
}

export default function Destiny1Image (props) {
  return (
    <Gallery {...props} />
  )
}
