'use client'
import { ContextValue } from '@/types'
import { usePathname } from 'next/navigation'
import {
  type PropsWithChildren,
  type SyntheticEvent,
  createContext,
  useCallback,
  useState
} from 'react'

export const SearchContext = createContext<ContextValue>({
  sortState: ['', () => {}],
  searchState: ['', () => {}],
  handleSearch: (ev) => {},
  device: 'desktop'
})

export function SearchContextProvider(props: PropsWithChildren) {
  const { children } = props

  const sortState = useState('new')
  const searchState = useState('')
  const pathname = usePathname() ?? ''

  const [, setSearch] = sortState
  const device = pathname.split('/')[2]
  const handleSearch = useCallback(
    (ev: SyntheticEvent) => {
      const target = ev.target as HTMLInputElement
      console.log(target.value)
      setSearch(target.value)
    },
    [setSearch]
  )

  const value = { sortState, searchState, device, handleSearch }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
