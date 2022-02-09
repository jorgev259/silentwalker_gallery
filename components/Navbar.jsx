import classNames from 'classnames'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import Popup from './Popup'
import laptop from '../img/assets/laptop.png'
import phone from '../img/assets/phone.png'
import clock from '../img/assets/clock.png'
import nameImg from '../img/assets/name.png'
import tricorn from '../img/assets/tricorn.png'

function DeviceToggle (props) {
  const { router } = props
  const { query } = router
  const { device = 'desktop' } = query

  const nextDevice = device === 'desktop' ? 'mobile' : 'desktop'
  const active = device === 'mobile'

  return (
    <>
      <div className='d-inline-block'>
        <Image src={laptop} alt='' height='30px' width='40px' />
      </div>

      <Link href={router.asPath.replace(device, nextDevice)}>
        <a>
          <div className='toggle d-flex align-items-center'>
            <div className={classNames('handle', { active })} />
          </div>
        </a>
      </Link>

      <div className='d-inline-block'>
        <Image src={phone} alt='' height='30px' width='22px' />
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
        <Image src={clock} alt='' height='27px' width='27px' />
      </div>

      <div className='toggle d-flex align-items-center' onClick={handleToggle}>
        <div className={classNames('handle', { active })} />
      </div>

      <div className='d-inline-block'>
        <Image src={nameImg} alt='' height='25px' width='25px' />
      </div>
    </>
  )
}

function DropdownItem (props) {
  const { href, name, currentUrl } = props
  const active = href === currentUrl

  return (
    <li><Link href={href}><a className={classNames('dropdown-item', { active })}>{name}</a></Link></li>
  )
}

export default function Navbar (props) {
  const { popup, donateClose, sort, setSort } = props
  const sortProps = { sort, setSort }
  const donateProps = { popup, donateClose }

  const router = useRouter()
  const { query } = router
  const { device = 'desktop' } = query

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center">
            <Image src={tricorn} alt='' height='32px' width='32px' />
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
                <ul className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Wallpapers</a></li>
                  <li><a className="dropdown-item" href="#">Download All</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Destiny 2
                </a>
                <ul className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
                  <DropdownItem href={`/destiny2/${device}/emblems`} name='Emblems' currentUrl={router.asPath} />
                  <DropdownItem href={`/destiny2/${device}/seals`} name='Seals' currentUrl={router.asPath} />
                  <DropdownItem href={`/destiny2/${device}/bonus`} name='Bonus' currentUrl={router.asPath} />
                  <li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1__8jBXGy14tL12ciEoqBepwxWeqJaD_7" rel="noopener noreferrer" target="_blank">Download All</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Clan Banners</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Info</a>
              </li>

              <li className="nav-item my-auto d-flex align-items-center mx-2" style={{ height: '30px' }}>
                <DeviceToggle router={router} />
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
