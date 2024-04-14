'use client'
import { ReactNode } from 'react'
import Link from 'next/link'
import { get } from 'lodash'
import { usePathname } from 'next/navigation'

import folderIds from '@/constants/folderIds.json'

export default function DownloadFolderItem({
  children,
  folder
}: {
  children: ReactNode
  folder: string
}) {
  const pathname = usePathname() ?? ''
  const device = pathname.split('/')[2]

  const folderPath = folder.replace('[device]', device)
  const folderId = get(folderIds, folderPath)

  return (
    <Link
      className='dropdown-item'
      href={`https://drive.google.com/drive/folders/${folderId}`}
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
    </Link>
  )
}
