import classNames from 'classnames'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import Popup from './Popup'

function DeviceToggle () {
  const router = useRouter()
  const { query } = router
  const { device = 'desktop' } = query

  const nextDevice = device === 'desktop' ? 'mobile' : 'desktop'
  const active = device === 'mobile'

  return (
    <>
      <div className='d-inline-block'>
        <Image src='/img/assets/laptop.png' alt='' height='30px' width='40px' />
      </div>

      <Link href={router.asPath.replace(device, nextDevice)}>
        <a>
          <div className='toggle d-flex align-items-center'>
            <div className={classNames('handle', { active })} />
          </div>
        </a>
      </Link>

      <div className='d-inline-block'>
        <Image src='/img/assets/phone.png' alt='' height='30px' width='22px' />
      </div>
    </>
  )
}

function SortToggle (props) {
  const { sort, setSort } = props
  const active = sort === 'name'
  const nextSort = sort === 'name' ? 'new' : 'name'

  const handleToggle = () => setSort(nextSort)

  return (
    <>
      <div className='d-inline-block'>
        <Image src='/img/assets/clock.png' alt='' height='27px' width='27px' />
      </div>

      <div className='toggle d-flex align-items-center' onClick={handleToggle}>
        <div className={classNames('handle', { active })} />
      </div>

      <div className='d-inline-block'>
        <Image src='/img/assets/name.png' alt='' height='25px' width='25px' />
      </div>
    </>
  )
}

export default function Navbar (props) {
  const { popup, donateClose, sort, setSort } = props
  const sortProps = { sort, setSort }
  const donateProps = { popup, donateClose }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center">
            <Image src='/img/assets/tricorn.png' alt='' height='32px' width='32px' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Destiny 1
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Wallpapers</a></li>
                  <li><a className="dropdown-item" href="#">Download All</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Destiny 2
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Emblems</a></li>
                  <li><a className="dropdown-item" href="#">Seals</a></li>
                  <li><a className="dropdown-item" href="#">Bonus</a></li>
                  <li><a className="dropdown-item" href="#">Download All</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Clan Banners</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Info</a>
              </li>

              <li className="nav-item my-auto d-flex align-items-center mx-2" style={{ height: '30px' }}>
                <DeviceToggle />
              </li>

              <li className="nav-item my-auto d-flex align-items-center mx-2" style={{ height: '30px' }}>
                <SortToggle {...sortProps} />
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
      <Popup {...donateProps} />
    </>
  )
}
