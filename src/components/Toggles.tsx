'use client'
import { useContext } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { SearchContext } from './SearchProvider'

import styles from '@/styles/toggles.module.scss'
import laptopIcon from '@/img/assets/laptop.png'
import phoneIcon from '@/img/assets/phone.png'
import clockIcon from '@/img/assets/clock.png'
import nameIcon from '@/img/assets/name.png'

export function DeviceToggle() {
  const pathname = usePathname()
  const { device } = useContext(SearchContext)

  const nextDevice = device === 'desktop' ? 'mobile' : 'desktop'
  const active = device === 'mobile'

  return (
    <>
      <div className='d-inline-block'>
        <Image
          src={laptopIcon}
          alt=''
          style={{ height: '30px', width: '40px' }}
        />
      </div>

      <Link href={pathname.replace(device, nextDevice)} passHref>
        <div className={classNames(styles.toggle, 'd-flex align-items-center')}>
          <div
            className={classNames(styles.handle, { [styles.active]: active })}
          />
        </div>
      </Link>

      <div className='d-inline-block'>
        <Image
          src={phoneIcon}
          alt=''
          style={{ height: '30px', width: '22px' }}
        />
      </div>
    </>
  )
}

export function SortToggle() {
  const { sortState } = useContext(SearchContext)

  const [sort, setSort] = sortState
  const active = sort === 'name'
  const nextSort = sort === 'name' ? 'new' : 'name'

  const handleToggle = () => setSort(nextSort)

  return (
    <>
      <div className='d-inline-block'>
        <Image
          src={clockIcon}
          alt=''
          style={{ height: '27px', width: '27px' }}
        />
      </div>

      <div
        className={classNames(styles.toggle, 'd-flex align-items-center')}
        onClick={handleToggle}
      >
        <div
          className={classNames(styles.handle, { [styles.active]: active })}
        />
      </div>

      <div className='d-inline-block'>
        <Image
          src={nameIcon}
          alt=''
          style={{ height: '25px', width: '25px' }}
        />
      </div>
    </>
  )
}

export function SearchInput() {
  const { handleSearch } = useContext(SearchContext)

  return (
    <input
      className='w-100 h-100 form-control'
      type='search'
      placeholder='Search'
      onChange={handleSearch}
    />
  )
}
