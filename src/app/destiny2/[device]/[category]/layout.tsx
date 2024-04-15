import { ReactNode } from 'react'

import Gallery from '@/components/Gallery'
import { getFileList } from '@/lib/gdriveClient'
import type { D2Category, D2Param, Device } from '@/types'

import folderIds from '@/constants/folderIds.json'

const devices: Device[] = ['desktop', 'mobile']
const categories: D2Category[] = ['emblems', 'seals', 'bonus']

export function generateStaticParams() {
  const params = devices.reduce<D2Param[]>((acc, device) => {
    categories.forEach((category) => {
      acc.push({ device, category })
    })
    return acc
  }, [])

  return params
}

export default async function Layout({
  params,
  children
}: {
  params: D2Param
  children: ReactNode
}) {
  const { device, category } = params
  const images = await getFileList(folderIds.destiny2[device][category])

  return (
    <>
      <Gallery {...params} images={images} />
      {children}
    </>
  )
}
