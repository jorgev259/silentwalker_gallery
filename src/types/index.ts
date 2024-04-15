import type { Dispatch, SetStateAction } from 'react'

export type Device = 'desktop' | 'mobile'
export type D2Category = 'emblems' | 'seals' | 'bonus'
export interface D2Param {
  device: Device
  category: D2Category
}

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
