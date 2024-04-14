'use client'

import { useContext } from 'react'
import { SearchContext } from './SearchProvider'
import { DriveImage } from '@/types'
import classNames from 'classnames'
import Image from 'next/image'

import styles from '@/styles/gallery.module.scss'
import Link from 'next/link'

const deviceStyles = {
  desktop: 'col-12 col-sm-6 col-md-3',
  mobile: 'col-6 col-sm-4 col-md-2'
}

export default function ImageList(props: {
  images: DriveImage[]
  device: string
}) {
  const { images, device } = props

  const { sortState, searchState } = useContext(SearchContext)
  const [sort] = sortState
  const [search] = searchState

  const filteredImages = images.filter((i) =>
    i.name?.toLowerCase().includes(search)
  )
  const imageList =
    sort === 'new'
      ? filteredImages.sort((a, b) => a.modifiedTime - b.modifiedTime).reverse()
      : filteredImages.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })

  return imageList.map((image) => (
    <Thumb key={image.id} device={device} image={image} />
  ))
}

function Thumb(props: { device: string; image: DriveImage }) {
  const { device, image } = props
  const { thumbnailLink, name } = image

  return (
    <div
      className={classNames(
        'px-0',
        styles.thumb,
        styles[device],
        deviceStyles[device]
      )}
    >
      <Link
        href={'/'}
        scroll={false}
        className='position-relative w-100 h-100 d-block'
      >
        <Image src={thumbnailLink} width={350} height={350} alt={name} />
      </Link>
    </div>
  )
}
