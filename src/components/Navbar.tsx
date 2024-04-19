import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import DropdownItem from './DropdownItem'

import styles from '@/styles/navbar.module.scss'
import tricornLogo from '@/img/assets/tricorn.png'
import DownloadFolderItem from './DownloadFolderItem'
import { DeviceToggle, SearchInput, SortToggle } from './Toggles'

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

          <DesktopNav />

          <div className='collapse navbar-collapse' id='navbarToggle'>
            <div className='navbar-nav'>
              <NavItems />
              <div className='nav-item mb-3'>
                <SearchInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItems() {
  return (
    <>
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
        <div className='dropdown-menu py-0' aria-labelledby='navbarDropdown'>
          <DropdownItem href={'/destiny1/[device]'}>Wallpapers</DropdownItem>
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
        <div className='dropdown-menu py-0' aria-labelledby='navbarDropdown'>
          <DropdownItem href={'/destiny2/[device]/emblems'}>
            Emblems
          </DropdownItem>
          <DropdownItem href={'/destiny2/[device]/seals'}>Seals</DropdownItem>
          <DropdownItem href={'/destiny2/[device]/bonus'}>Bonus</DropdownItem>
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
    </>
  )
}

function DesktopNav() {
  return (
    <>
      <div className='navbar-nav flex-row col-auto px-0 d-none d-md-flex'>
        <NavItems />
      </div>

      <div className='col-auto d-flex align-items-center'>
        <div
          className='d-flex nav-item my-auto align-items-center'
          style={{ height: '30px' }}
        >
          <DeviceToggle />
        </div>
      </div>

      <div className='col-auto d-flex align-items-center'>
        <div
          className='d-flex nav-item my-auto align-items-center'
          style={{ height: '30px' }}
        >
          <SortToggle />
        </div>
      </div>

      <div className='col-auto d-flex d-md-none'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarToggle'
          aria-controls='navbarToggle'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>

      <div className='col pe-0 d-none d-md-flex'>
        <SearchInput />
      </div>
    </>
  )
}
