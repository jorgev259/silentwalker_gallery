import path from 'path'

import Gallery from '../../../../components/Gallery'
import { getImages, capitalize, getModal } from '../../../../components/utils'

export async function getServerSideProps (context) {
  const { params } = context
  const { device: deviceInput, category: categoryInput, modal: modalInput } = params

  const device = deviceInput
  const category = categoryInput
  const galleryPath = path.join('Destiny 2', capitalize(device), capitalize(category))

  const modal = await getModal(modalInput, galleryPath)

  return {
    props: {
      images: await getImages(galleryPath),
      parent: `/destiny2/${device}/${category}`,
      device,
      modal
    }
  }
}

export default function Destiny2 (props) {
  return (
    <Gallery {...props} />
  )
}
