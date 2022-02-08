import style from '../styles/Popup.module.scss'
import classNames from 'classnames'

export default function Popup (props) {
  const { popup, donateClose } = props

  return popup
    ? (
    <div className={classNames(style.root, 'mx-auto')}>
      <div className={classNames(style.pop, 'mx-auto p-3')}>
        Help me to mantain the site ad-free by donating through
        <button type='button' className={classNames('btn donate', style['btn-primary'], style.btn)} href='https://paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WH26ZAAT9WRYU'>Paypal</button> or <a className={style.btn} href='https://www.buymeacoffee.com/silentwalker' target='_blank' rel="noreferrer"><img height='36' style={{ border: '0px', height: '36px' }} src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
        <button type='button' className={classNames('btn donate mx-2', style.donate, style.btn)} onClick={donateClose}>Understood</button>
      </div>
    </div>
      )
    : null
}
