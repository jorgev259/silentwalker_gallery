import { ReactNode } from 'react'

import Gallery from '@/components/Gallery'
import { getFileList } from '@/lib/gdriveClient'
import type { Device } from '@/types'

import folderIds from '@/constants/folderIds.json'

export function generateStaticParams(): { device: Device }[] {
  return [{ device: 'desktop' }, { device: 'mobile' }]
}

export default async function Layout({
  params,
  children
}: {
  params: { device: Device }
  children: ReactNode
}) {
  const { device } = params
  const images = await getFileList(folderIds.destiny1[device])

  return (
    <>
      <Gallery {...params} images={images} />
      {children}
    </>
  )
}
