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
  search: '',
  handleSearch: (ev) => {},
  device: 'desktop'
})

export function SearchContextProvider(props: PropsWithChildren) {
  const { children } = props

  const sortState = useState('new')
  const [search, setSearch] = useState('')
  const pathname = usePathname() ?? ''

  const device = pathname.split('/')[2] ?? 'desktop'
  const handleSearch = useCallback(
    (ev: SyntheticEvent) => {
      const target = ev.target as HTMLInputElement
      console.log(target.value)
      setSearch(target.value)
    },
    [setSearch]
  )

  const value = { sortState, search, handleSearch, device }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
