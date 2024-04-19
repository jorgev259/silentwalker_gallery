import { getFileList } from '@/lib/gdriveClient'
import { notFound } from 'next/navigation'

import ImageModal from '@/components/ImageModal'
import type { D2Category, D2Param, Device } from '@/types'

import folderIds from '@/constants/folderIds.json'

async function getImage(device: Device, category: D2Category, urlName: string) {
  const images = await getFileList(folderIds.destiny2[device][category])
  const image = images.find((i) => i.urlName === urlName)

  if (!image) notFound()
  return image
}

export async function generateStaticParams({
  params: { device, category }
}: {
  params: D2Param
}) {
  const images = await getFileList(folderIds.destiny2[device][category])
  return images.map((image) => ({ urlName: image.urlName }))
}

export default async function Page({
  params: { device, category, urlName }
}: {
  params: D2Param & { urlName: string }
}) {
  const image = await getImage(device, category, urlName)
  const parentUrl = `/destiny2/${device}/${category}`

  return <ImageModal image={image} parentUrl={parentUrl} />
}
