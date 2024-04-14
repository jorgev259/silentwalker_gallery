import type { Dispatch, SetStateAction } from 'react'

export type Device = 'desktop' | 'mobile'

export interface DriveImage {
  id: string
  name: string
  urlName: string
  thumbnailLink: string
  modalLink: string
  webContentLink: string
  modifiedTime: number
}

type StateArgs<T> = [T, Dispatch<SetStateAction<T>>]

export interface ContextValue {
  sortState: StateArgs<string>
  searchState: StateArgs<string>
}
