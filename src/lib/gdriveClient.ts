import { google } from 'googleapis'

import type { DriveImage } from '@/types'

const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly']
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS ?? '{}'),
  scopes: scopes
})

export const gdriveClient = google.drive({ version: 'v3', auth })

const getThumbnail = (fileId: string, width: number) =>
  `https://drive.google.com/thumbnail?authuser=0&sz=w${width}&id=${fileId}`

const urlify = (text) =>
  text.replaceAll(' ', '').toLowerCase().split('.').slice(0, -1).join('.')

export async function getFileList(folderId: string): Promise<DriveImage[]> {
  const { data = {} } = await gdriveClient.files.list({
    q: `'${folderId}' in parents`,
    fields:
      'files(id, name, modifiedTime, webContentLink, webViewLink, thumbnailLink)'
  })
  const { files = [] } = data
  const result = files.reduce<DriveImage[]>((acc, file) => {
    if (!file.id) return acc

    const { id, name, modifiedTime, webContentLink } = file

    acc.push({
      id,
      name: name ?? 'Unknown Name',
      urlName: urlify(name),
      thumbnailLink: getThumbnail(id, 500),
      modalLink: getThumbnail(id, 1500),
      webContentLink: webContentLink ?? '',
      modifiedTime: modifiedTime ? Date.parse(modifiedTime) : 0
    })
    return acc
  }, [])

  return result
}
