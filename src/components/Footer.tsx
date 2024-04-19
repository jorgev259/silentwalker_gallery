import classNames from 'classnames'

import styles from '@/styles/footer.module.scss'
import Image from 'next/image'
import Script from 'next/script'

export default function Footer() {
  return (
    <div className={classNames(styles.footer, 'p-4')}>
      <div className='d-flex w-100'>
        <div
          className='align-self-center me-2 d-none d-md-block'
          style={{ height: 'fit-content' }}
        >
          Show your support!
        </div>
        <a
          className={classNames(
            'btn donate me-2',
            styles['btn-primary'],
            styles.paypal
          )}
          href='https://paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WH26ZAAT9WRYU'
        >
          Paypal
        </a>
        <a
          href='https://www.buymeacoffee.com/silentwalker'
          target='_blank'
          rel='noreferrer'
          className={classNames(styles.kofi, 'me-2')}
        >
          <Image
            width={150}
            height={30}
            src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3'
            alt='Buy Me a Coffee at ko-fi.com'
          />
        </a>
        <div className={styles.patreon}>
          <a
            href='https://www.patreon.com/bePatron?u=7150442'
            data-patreon-widget-type='become-patron-button'
          >
            Become a Patron!
          </a>
          <Script
            src='https://c6.patreon.com/becomePatronButton.bundle.js'
            async
          />
        </div>
      </div>
      <div className='mt-3'>
        Recreating these wallpapers is almost a full-time job I make them to
        improve myself and to please you.
        <br />
        Your support helps me and the project to continue on and allows me to do
        my best work.
      </div>
    </div>
  )
}
