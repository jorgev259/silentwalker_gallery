import Head from 'next/head'

import Gallery from '../../../components/Gallery'
import { getImages, capitalize, getPaths, getImage } from '../../../components/utils'

export async function getStaticPaths () {
  const paths = getPaths('Destiny 1')
  return { paths, fallback: false }
}

export async function getStaticProps (context) {
  const { params } = context
  const { device, image } = params

  const images = getImages('Destiny 1', capitalize(device))
  const modal = getImage('Destiny 1', capitalize(device), image)

  return { props: { modal, images, device } }
}

export default function Destiny1Image (props) {
  const { modal } = props
  const { name, urlPath, imgPath } = modal

  return (
    <>
      <Head>
        <meta property="og:site_name" content="SiLeNtWaLkEr Wallpapers" />
        <meta key='url' property='og:url' content={urlPath} />
        <meta key='title' property='og:title' content={name} />
        <meta key='image' property='og:image' content={`https://raw.githubusercontent.com/jorgev259/silentwalker_wallpapers/main/discord${imgPath}.jpg`} />
      </Head>
      <Gallery {...props} />
    </>
  )
}
