'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import type { DriveImage } from '@/types'

import styles from '@/styles/imageModal.module.scss'

export default function ImageModal({
  image,
  parentUrl
}: {
  image: DriveImage
  parentUrl: string
}) {
  const { name, webContentLink, modalLink } = image
  const router = useRouter()

  const onClose = () => router.push(parentUrl)

  useEffect(() => {
    const checkKey = (e) => {
      if (e.key === 'Escape') router.push(parentUrl)
    }

    window.addEventListener('keydown', checkKey)
    return () => window.removeEventListener('keydown', checkKey)
  }, [parentUrl, router])

  return (
    <div
      className={classNames('modal fade show', styles.modal)}
      onClick={onClose}
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content' onClick={(ev) => ev.stopPropagation()}>
          <div className={classNames('modal-body p-0')}>
            <Image
              className='w-100'
              src={modalLink}
              width={500}
              height={500}
              alt={name}
            />
          </div>
          <div className='modal-footer'>
            <div className='mx-auto'>{name}</div>
            <div className='mx-auto'>
              <Link
                href={webContentLink}
                className='modal-btn btn btn-outline-secondary'
              >
                Download
              </Link>
              <Link href={parentUrl} scroll={false} passHref>
                <button
                  type='button'
                  className='btn btn-outline-secondary ms-2 modal-btn'
                >
                  Close
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
