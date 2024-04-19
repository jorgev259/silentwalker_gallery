'use client'
import { ReactNode, useContext } from 'react'
import Link from 'next/link'
import { get } from 'lodash'

import folderIds from '@/constants/folderIds.json'
import { SearchContext } from './SearchProvider'

export default function DownloadFolderItem({
  children,
  folder
}: {
  children: ReactNode
  folder: string
}) {
  const { device } = useContext(SearchContext)

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
