
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/gallery.module.scss'

const deviceStyles = {
  desktop: 'col-xs-12 col-sm-6 col-md-3',
  mobile: 'col-xs-6 col-sm-4 col-md-2'
}

function Thumb (props) {
  const { filePath, name, device, parent } = props

  return (
    <div className={classNames('px-0', styles.thumb, styles[device], deviceStyles[device])}>
      <Link href={`${parent}/${name}`} >
        <a className='position-relative w-100 h-100 d-block'>
          <Image layout='fill' src={`https://destinyemblemwallpapers.com/fullres/${filePath}`} alt={name} quality={20} />
        </a>
      </Link>
    </div>
  )
}

function ModalElement (props) {
  const { name, show, filePath/*, device */, parent } = props
  const fullres = `https://destinyemblemwallpapers.com/fullres/${filePath}`

  return (
    <div className={classNames('modal fade', styles.modal, { show })}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className={classNames('modal-body p-0')}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {show && <img className='w-100' src={fullres} alt={name}/>}
          </div>
          <div className="modal-footer">
          <div className='mx-auto'>{name}</div>
          <div className='mx-auto'>
            <a href={fullres} className='modal-btn btn btn-outline-secondary' download>Download</a>
            <Link href={parent}>
              <a>
                <button type="button" className='btn btn-outline-secondary ms-2 modal-btn'>Close</button>
              </a>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery (props) {
  const { device = 'Desktop', images = [], parent, modal, popup } = props

  return (
    <div className={classNames('container-fluid flex-fill px-0', styles.root)} style={{ paddingTop: popup ? '130px' : '60px' }}>
      <ModalElement {...modal} device={device} show={!!modal} parent={parent} />
      <div className="col">
        <div className="row">
          {images.map(i => <Thumb key={i.filePath} device={device} parent={parent} {...i} />)}
        </div>
      </div>
    </div>
  )
}
