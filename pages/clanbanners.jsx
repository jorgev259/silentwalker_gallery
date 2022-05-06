export default function ClanBanners (props) {
  const { popup } = props
  return (
    <div className='container-fluid flex-fill content' style={{ paddingTop: popup ? '130px' : '60px' }}>
      <div className='box'>
        <div className='row'>
          <div className='col-md-10  mx-auto'>
            <div style={{ color: '#bcb9ba', paddingTop: '45px' }}>
              <div>
                In 2018 I started doing Clan Banner Wallpapers and Guardians have been loving them. <br />
                Send me an email or DM on <a href='https://twitter.com/silentwalker__'>Twitter</a> or <a href='https://www.instagram.com/silentwalker___/'>Instagram</a> if you want to know how you can get one for yours.
              </div>
              <br />
              <div style={{ color: '#f3eb2b' }}>
                <span>Here are some examples:</span><br /><br />
                <div className='d-none d-md-block'>
                  {
                    [1, 2, 3, 4].map(n => <img alt='' src={`/images/assets/clan${n}.png`} key={n} style={{ width: '25%', height: 'auto', paddingRight: '10px' }} />)
                  }
                </div>
                <div className='d-md-none'>
                {
                  [1, 2, 3, 4].map(n => <img alt='' src={`/images/assets/clan${n}.png`} key={n} style={{ width: '50%', height: 'auto', paddingRight: '10px', paddingTop: '10px' }} />)
                }
                </div>
              </div>
            </div>
            <br />
            <button className='btn btn-outline-primary motw' href='mailto:vasco.mendes.da.silva@gmail.com'>EMAIL</button>
          </div>
        </div>
      </div>
    </div>
  )
}
