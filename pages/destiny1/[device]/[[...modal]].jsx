import path from 'path'

import Gallery from '../../../components/Gallery'
import { getImages, capitalize, getModal } from '../../../components/utils'

export async function getStaticPaths () {
  const images = await getImages('Destiny 1')
  const imagePaths = images.map(i => {
    const [, device, modal] = i.urlPath.split('/')
    return { params: { device, modal: [modal] } }
  })

  return {
    paths: [
      { params: { device: 'desktop', modal: [] } },
      { params: { device: 'mobile', modal: [] } },
      ...imagePaths
    ],
    fallback: true // false or 'blocking'
  }
}

export async function getStaticProps (context) {
  const { params } = context
  const { device: deviceInput, modal: modalInput } = params

  const device = deviceInput
  const galleryPath = path.join('Destiny 1', capitalize(device))

  const modal = await getModal(modalInput, galleryPath)

  return {
    props: {
      images: await getImages(galleryPath),
      device,
      modal
    }
  }
}

export default function Destiny1 (props) {
  return (
    <Gallery {...props} />
  )
}
