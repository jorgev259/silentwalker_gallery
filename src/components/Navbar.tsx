import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import DropdownItem from './DropdownItem'

import styles from '@/styles/navbar.module.scss'
import tricornLogo from '@/img/assets/tricorn.png'
import DownloadFolderItem from './DownloadFolderItem'

export default function Navbar() {
  return (
    <nav
      className={classNames(
        styles.navbar,
        'navbar navbar-expand-md navbar-dark bg-dark fixed-top'
      )}
    >
      <div className='container-fluid'>
        <div className='row w-100 justify-content-between justify-content-md-start'>
          <div className='col-auto'>
            <Link
              href='/'
              className='navbar-brand d-flex align-items-center me-0'
              passHref
            >
              <Image
                src={tricornLogo}
                alt=''
                style={{ height: '32px', width: '32px' }}
              />
            </Link>
          </div>
          <div className='navbar-nav flex-row col-auto px-0 d-none d-md-flex'>
            <div className='nav-item dropdown'>
              <Link
                prefetch={false}
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Destiny 1
              </Link>
              <div
                className='dropdown-menu py-0'
                aria-labelledby='navbarDropdown'
              >
                <DropdownItem href={'/destiny1/[device]'}>
                  Wallpapers
                </DropdownItem>
                <DownloadFolderItem folder='destiny1.[device]'>
                  Download All
                </DownloadFolderItem>
              </div>
            </div>

            <div className='nav-item dropdown'>
              <Link
                prefetch={false}
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Destiny 2
              </Link>
              <div
                className='dropdown-menu py-0'
                aria-labelledby='navbarDropdown'
              >
                <DropdownItem href={'/destiny2/[device]/emblems'}>
                  Emblems
                </DropdownItem>
                <DropdownItem href={'/destiny2/[device]/seals'}>
                  Seals
                </DropdownItem>
                <DropdownItem href={'/destiny2/[device]/bonus'}>
                  Bonus
                </DropdownItem>
                <DownloadFolderItem folder='destiny2.[device].all'>
                  Download All
                </DownloadFolderItem>
              </div>
            </div>

            <div className='nav-item'>
              <Link href='/clanbanners' className='nav-link'>
                Clan Banners
              </Link>
            </div>

            <div className='nav-item'>
              <Link href='/info' className='nav-link'>
                Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
