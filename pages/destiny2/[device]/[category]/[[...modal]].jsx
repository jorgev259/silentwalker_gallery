import path from 'path'
import fs from 'fs-extra'

import Gallery from '../../../../components/Gallery'
import { getImages, readImage, capitalize } from '../../../../components/utils'

export async function getServerSideProps (context) {
  const { params } = context
  const { device: deviceInput, category: categoryInput, modal: modalInput } = params

  const device = deviceInput
  const category = categoryInput
  const galleryPath = path.join('Destiny 2', capitalize(device), capitalize(category))
  let modal = null

  if (modalInput) {
    const [modalName] = modalInput
    const filePath = path.join(process.env.baseFolder, galleryPath, `${modalName}.jpg`)
    const exists = await fs.pathExists(filePath)

    if (exists) modal = await readImage(filePath)
  }

  return {
    props: {
      images: await getImages(galleryPath),
      parent: `/destiny2/${device}/${category}`,
      device,
      modal
    }
  }
}

export default function Page (props) {
  return (
    <Gallery {...props} />
  )
}
