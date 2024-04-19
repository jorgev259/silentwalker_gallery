import { Device } from '@/types'
import { permanentRedirect } from 'next/navigation'

export function generateStaticParams(): { device: Device }[] {
  return [{ device: 'desktop' }, { device: 'mobile' }]
}

export default function Page({
  params: { device }
}: {
  params: { device: Device }
}) {
  permanentRedirect(`/destiny2/${device}/emblems`)
}
