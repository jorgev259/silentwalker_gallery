import Popup from './Popup'

function DeviceToggle (props) {
  const { active } = props
  function handleToggle () {

  }

  return (
    <span className={'navbar-text'}>
        <img src='/img/assets/laptop.png' alt='' />
        <button type='button' onClick={handleToggle} className={`btn btn-toggle ${active ? 'active' : null}`}>
          <div className='handle' />
        </button>
        <img src='/img/assets/phone.png' alt='' />
      </span>
  )
}

function SortToggle (props) {
  const { active } = props
  function handleToggle () {

  }

  return (
    <span className={'navbar-text'}>
        <img src='/img/assets/clock.png' style={{ height: '25px' }} alt='' />
        <button type='button' onClick={handleToggle} className={`btn btn-toggle ${!active ? 'active' : null}`}>
          <div className='handle' />
        </button>
        <img src='/img/assets/name.png' style={{ height: '25px' }} alt='' />
    </span>
  )
}

export default function Navbar (props) {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand">
      <img src='/img/assets/tricorn.png' className='d-inline-block align-top' alt='Tricorn Logo' style={{ height: '30px' }} />
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

        <li className="nav-item">
          <DeviceToggle />
        </li>

        <li className="nav-item">
          <SortToggle />
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </div>
</nav>
<Popup {...props} />
</>
  )
}
