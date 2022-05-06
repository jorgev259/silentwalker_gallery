export default function Footer () {
  return (
    <footer>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col d-flex align-items-center'>
              <img alt='logo' src='/images/assets/logo.png' style={{ height: '25px', width: '112px' }} />
          </div>
          <div className='col d-none d-md-block '>
            <div style={{ fontSize: '13.5px', textAlign: 'right' }}>
              WEBSITE POWERED BY <a href='https://twitter.com/ChitoWarlock'>@CHITOWARLOCK</a>
            </div>
          </div>
          <div className='col d-block d-md-none'>
            <div style={{ fontSize: '11.5px', textAlign: 'right' }}>WEBSITE BY <a href='https://twitter.com/ChitoWarlock'>@CHITOWARLOCK</a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
