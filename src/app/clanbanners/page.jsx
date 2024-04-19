import clan1 from '@/img/assets/clan1.png'
import clan2 from '@/img/assets/clan2.png'
import clan3 from '@/img/assets/clan3.png'
import clan4 from '@/img/assets/clan4.png'
import Image from 'next/image'

const clanImages = [clan1, clan2, clan3, clan4]

export default function Page() {
  return (
    <div className='container-fluid flex-fill content py-3'>
      <div className='box'>
        <div className='row'>
          <div className='col-md-10  mx-auto'>
            <div style={{ color: '#bcb9ba', paddingTop: '45px' }}>
              <div>
                In 2018 I started doing Clan Banner Wallpapers and Guardians
                have been loving them. <br />
                Send me an email or DM on{' '}
                <a href='https://twitter.com/silentwalker__'>Twitter</a> or{' '}
                <a href='https://www.instagram.com/silentwalker___/'>
                  Instagram
                </a>{' '}
                if you want to know how you can get one for yours.
              </div>
              <br />
              <div style={{ color: '#f3eb2b' }}>
                <span>Here are some examples:</span>
                <br />
                <br />
                <div className='d-none d-md-block'>
                  {clanImages.map((img, i) => (
                    <Image
                      alt=''
                      src={img}
                      key={i}
                      style={{
                        width: '25%',
                        height: 'auto',
                        paddingRight: '10px'
                      }}
                    />
                  ))}
                </div>
                <div className='d-md-none'>
                  {clanImages.map((img, i) => (
                    <Image
                      alt=''
                      src={img}
                      key={i}
                      style={{
                        width: '50%',
                        height: 'auto',
                        paddingRight: '10px',
                        paddingTop: '10px'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <br />
            <button
              className='btn btn-outline-primary motw'
              href='mailto:vasco.mendes.da.silva@gmail.com'
            >
              EMAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
