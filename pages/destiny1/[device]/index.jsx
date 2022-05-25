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
  const images = getImages('Destiny 1', capitalize(device))

  return { props: { images, device } }
}

export default function Destiny1 (props) {
  return (
    <Gallery {...props} />
  )
}
