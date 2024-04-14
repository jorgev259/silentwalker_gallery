'use client'
import { ContextValue } from '@/types'
import { PropsWithChildren, createContext, useState } from 'react'

export const SearchContext = createContext<ContextValue>({
  sortState: ['', () => {}],
  searchState: ['', () => {}]
})

export function SearchContextProvider(props: PropsWithChildren) {
  const { children } = props
  const sortState = useState('new')
  const searchState = useState('')

  const value = { sortState, searchState }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
