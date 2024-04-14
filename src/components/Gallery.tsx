import classNames from 'classnames'

import type { Device, DriveImage } from '@/types'
import ImageList from './ImageList'

import styles from '@/styles/gallery.module.scss'

export default function Gallery(props: {
  device: Device
  images: DriveImage[]
}) {
  const { device, images } = props

  return (
    <div className={classNames('container-fluid px-0', styles.root)}>
      <div className='col'>
        <div className='row'>
          <ImageList images={images} device={device} />
        </div>
      </div>
    </div>
  )
}
