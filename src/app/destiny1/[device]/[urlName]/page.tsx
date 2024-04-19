import { getFileList } from '@/lib/gdriveClient'
import { notFound } from 'next/navigation'

import ImageModal from '@/components/ImageModal'
import type { Device } from '@/types'

import folderIds from '@/constants/folderIds.json'

async function getImage(device: Device, urlName: string) {
  const images = await getFileList(folderIds.destiny1[device])
  const image = images.find((i) => i.urlName === urlName)

  if (!image) notFound()
  return image
}

export async function generateStaticParams({
  params: { device }
}: {
  params: { device: string }
}) {
  const images = await getFileList(folderIds.destiny1[device])
  return images.map((image) => ({ urlName: image.urlName }))
}

export default async function Page({
  params: { device, urlName }
}: {
  params: { device: Device; urlName: string }
}) {
  const image = await getImage(device, urlName)
  const parentUrl = `/destiny1/${device}`

  return <ImageModal image={image} parentUrl={parentUrl} />
}
