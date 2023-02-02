import classNames from 'classnames'

import styles from '../styles/Footer.module.scss'

function Element (props) {
  const { className } = props

  return (
    <div className={classNames(className, 'p-4')}>
      <div className='d-flex'>
        <div className='align-self-center me-2 d-none d-md-block' style={{ height: 'fit-content' }}>Show your support!</div>
        <button type='button' className={classNames('btn donate me-2', styles['btn-primary'])} href='https://paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WH26ZAAT9WRYU'>Paypal</button>
        <a className='me-2' href='https://www.buymeacoffee.com/silentwalker' target='_blank' rel="noreferrer">
          <img className={styles.kofi} src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
        </a>
        <a className={styles.patreon} href="https://www.patreon.com/bePatron?u=7150442" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
        <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
      </div>
      <div className='mt-3'>
        Recreating these wallpapers is almost a full-time job I make them to improve myself and to please you.<br />
        Your support helps me and the project to continue on and allows me to do my best work.
      </div>
    </div>
  )
}

export default function Footer () {
  return (
    <>
      <Element className={styles.stub} />
      <Element className={styles.footer} />
    </>
  )
}
