import classNames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'

function DeviceToggle (props) {
  const { router } = props
  const { query } = router
  const { device = 'desktop' } = query

  const nextDevice = device === 'desktop' ? 'mobile' : 'desktop'
  const active = device === 'mobile'

  return (
    <>
      <div className='d-inline-block'>
        <img src='/images/assets/laptop.png' alt='' style={{ height: '30px', width: '40px' }}/>
      </div>

      <Link href={router.asPath.replace(device, nextDevice)}>
        <a>
          <div className='toggle d-flex align-items-center'>
            <div className={classNames('handle', { active })} />
          </div>
        </a>
      </Link>

      <div className='d-inline-block'>
        <img src='/images/assets/phone.png' alt='' style={{ height: '30px', width: '22px' }} />
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
        <img src='/images/assets/clock.png' alt='' style={{ height: '27px', width: '27px' }} />
      </div>

      <div className='toggle d-flex align-items-center' onClick={handleToggle}>
        <div className={classNames('handle', { active })} />
      </div>

      <div className='d-inline-block'>
        <img src='/images/assets/name.png' alt='' style={{ height: '25px', width: '25px' }} />
      </div>
    </>
  )
}

function DropdownItem (props) {
  const { href, name, currentUrl } = props
  const active = href === currentUrl

  return (
    <li><Link href={href} prefetch={false}><a className={classNames('dropdown-item', { active })}>{name}</a></Link></li>
  )
}

export default function Navbar (props) {
  const { sort, setSort, setSearch } = props
  const sortProps = { sort, setSort }

  const router = useRouter()
  const { query } = router
  const { device = 'desktop' } = query

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center">
              <img src='/images/assets/tricorn.png' alt='' style={{ height: '32px', width: '32px' }} />
            </a>
          </Link>

          <div className="d-flex d-md-none nav-item my-auto align-items-center mx-2" style={{ height: '30px' }}>
            <DeviceToggle router={router} />
          </div>

          <div className="d-flex d-md-none nav-item my-auto align-items-center mx-2" style={{ height: '30px' }}>
            <SortToggle {...sortProps} />
          </div>

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
                  <DropdownItem href={`/destiny1/${device}`} name='Wallpapers' currentUrl={router.asPath} />
                  <li><a className="dropdown-item" href={device === 'desktop'
                    ? 'https://drive.google.com/drive/folders/1drejXFUS5JIKP2WgqqdM0wSa0kY60cuI'
                    : 'https://drive.google.com/drive/folders/1d4FLAlJ1Thn3lx3M-PFOrDCbebNAbAGB'
                }
                  rel="noopener noreferrer" target="_blank">Download All</a></li>
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
                  <li>
                    <a className="dropdown-item" href={device === 'desktop'
                      ? 'https://drive.google.com/drive/folders/1__8jBXGy14tL12ciEoqBepwxWeqJaD_7'
                      : 'https://drive.google.com/drive/folders/1ZG-3BjxfRiEMq8so0h8G5B2bqXeFx1oK'
                    }
                    rel="noopener noreferrer" target="_blank">Download All</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/clanbanners"><a className="nav-link">Clan Banners</a></Link>
              </li>

              <li className="nav-item">
                <Link href="/info"><a className="nav-link">Info</a></Link>
              </li>

              <li className="d-none d-md-flex nav-item my-auto align-items-center mx-2" style={{ height: '30px' }}>
                <DeviceToggle router={router} />
              </li>

              <li className="d-none d-md-flex nav-item my-auto align-items-center mx-2" style={{ height: '30px' }}>
                <SortToggle {...sortProps} />
              </li>
            </ul>

            <input className="form-control me-2 my-2 mx-md-5" type="search" placeholder="Search" onChange={ev => setSearch(ev.target.value.toLowerCase())} />
          </div>
        </div>
      </nav>
    </>
  )
}
