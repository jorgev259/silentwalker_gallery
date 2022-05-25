import path from 'path'
import Head from 'next/head'

import Gallery from '../../../../components/Gallery'
import { getImages, capitalize, getModal, d2categories } from '../../../../components/utils'

export async function getStaticPaths () {
  const images = await getImages('Destiny 2')
  const paths = images.flatMap(i => {
    const [, device, category] = i.urlPath.split('/').filter(i => i.length > 0)
    return d2categories.includes(category) ? [{ params: { device, category, image: i.urlName } }] : []
  })

  return { paths, fallback: false }
}

export async function getStaticProps (context) {
  const { params } = context
  const { device, category, image } = params

  const galleryPath = path.join('Destiny 2', capitalize(device), capitalize(category))
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

export default function Destiny2Image (props) {
  const { modal } = props
  const { name, urlPath, imgPath } = modal

  return (
    <>
      <Head>
        <meta property="og:site_name" content="SiLeNtWaLkEr Wallpapers" />
        <meta key='url' property='og:url' content={urlPath} />
        <meta key='title' property='og:title' content={name} />
        <meta key='image' property='og:image' content={ imgPath.replace('/images/', '/discord/')} />
      </Head>
      <Gallery {...props} />
    </>
  )
}
