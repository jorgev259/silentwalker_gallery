export default function Footer () {
  return (
    <footer>
      <div className='container-fluid'>
        <div className='row '>
          <div className='d-flex justify-content-center align-items-center'>
            <img className='logo-img' alt='logo' src='/img/assets/logo.png' />
          </div>
          <div className='d-none d-sm-block ml-auto' style={{ fontSize: '13.5px' }}>
            WEBSITE POWERED BY <a href='https://twitter.com/ChitoWarlock'>@CHITOWARLOCK</a>
          </div>
          <div className='d-block d-sm-none ml-auto' style={{ fontSize: '10px' }}>WEBSITE BY <a href='https://twitter.com/ChitoWarlock'>@CHITOWARLOCK</a></div>
        </div>
      </div>
    </footer>
  )
}
