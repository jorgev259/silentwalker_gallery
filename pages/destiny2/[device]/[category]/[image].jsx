import Head from 'next/head'

import Gallery from '../../../../components/Gallery'
import { getImages, capitalize, getImage, getPaths } from '../../../../components/utils'

export async function getStaticPaths () {
  const paths = getPaths('Destiny 2')
  return { paths, fallback: false }
}

export async function getStaticProps (context) {
  const { params } = context
  const { device, category, image } = params

  const images = getImages('Destiny 2', capitalize(device), capitalize(category))
  const modal = getImage('Destiny 2', capitalize(device), image, capitalize(category))

  return { props: { modal, images, device } }
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
