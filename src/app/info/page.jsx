import Image from 'next/image'

import infoBanner from '@/img/assets/info_banner.png'
import instaLogo from '@/img/assets/insta.png'
import twitterLogo from '@/img/assets/twitter.png'

const Banner = () => (
  <>
    <Image alt='' src={infoBanner} style={{ height: '350px', width: 'auto' }} />
    <div
      style={{
        height: '35px',
        width: '100%',
        justifyContent: 'space-evenly',
        display: 'flex',
        marginTop: '10px'
      }}
    >
      <a href='https://www.instagram.com/silentwalker___/'>
        <Image
          alt='instagram'
          src={instaLogo}
          style={{ height: '100%', width: 'auto' }}
        />
      </a>
      <a href='https://twitter.com/silentwalker__'>
        <Image
          alt='twitter'
          src={twitterLogo}
          style={{ height: '100%', width: 'auto' }}
        />
      </a>
    </div>
  </>
)

export default function Page() {
  return (
    <div className='container-fluid flex-fill content py-3'>
      <div className='box'>
        <div className='row'>
          <div className='col-md-1' />
          <div
            className='d-block mx-auto d-md-none'
            style={{ marginTop: '25px' }}
          >
            <Banner />
          </div>

          <div className='col-md-6'>
            <div style={{ color: '#bcb9ba', paddingTop: '45px' }}>
              <div>
                Hey! SiLeNtWaLkEr here <br />
                <br />
                I’m Vasco, a Graphic Designer from Porto, Portugal.
                <br />I started doing these wallpapers back in the end of 2016.
                In 2017 I’ve completed the D1 collection (268 walls) and started
                working on the (huge) D2 collection (432 walls for now).
                <br />
                I’m now “only” 100 wallpapers away to end the collection.
                <br />
              </div>
              <br />
              <div>
                These are all made in Illustrator / Photoshop, I make vectors
                for all the illustrations as you can see in the video that won
                the MOTW thanks to all of you.
              </div>
              <br />
              <a href='https://www.youtube.com/watch?v=L_lWkV74vlQ'>
                <button className='btn btn-outline-primary motw'>MOTW</button>
              </a>
              <br />
              <br />
              <div>
                <span>A few notes:</span>
                <ul style={{ marginTop: '5px' }}>
                  <li>
                    D2 Mobile wallpapers have a dimension of 1440x2560 and
                    Desktop 1920x1080. They are all saved with a resolution of
                    150 dpi so you can zoom and try to fit it into the dimension
                    you prefer.
                  </li>

                  <li>
                    D1 mobile walls have the same dimension as D2 but Desktop
                    are in 1280x800 (I will put them at least in 1920x1080 as
                    soon as I end the D2 collection.
                  </li>
                </ul>
              </div>
              <div style={{ color: '#f3eb2b' }}>
                <div>
                  Guardians were having trouble downloading the wallpapers from
                  the google drive so{' '}
                  <a href='https://twitter.com/ChitoWarlock'>@ChitoWarlock</a>{' '}
                  helped me build this website to help you view, select or
                  download all of them much more easily.
                </div>
                <br />
                <div>
                  This website is hosted at a server that have costs so if you
                  like to help maintaning this website online I kindly ask you
                  to donate and help me with the costs.
                </div>
                <br />
                <a href='https://paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WH26ZAAT9WRYU'>
                  <button className='btn btn-primary donate'>DONATE</button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='col-md-4 image-container d-none d-md-flex mx-auto position-fixed fixed-right'
            style={{ right: 0 }}
          >
            <div style={{ paddingTop: '45px' }}>
              <Banner />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
