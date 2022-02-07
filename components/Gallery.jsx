
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { /* useEffect, */useState } from 'react'

import styles from '../styles/gallery.module.scss'

const deviceStyles = {
  Desktop: 'col-xs-12 col-sm-6 col-md-3',
  Mobile: 'col-xs-6 col-sm-4 col-md-2'
}

function Thumb (props) {
  const { filePath, name, device, parent } = props

  return (
    <div className={classNames('px-0', styles.thumb, styles[device], deviceStyles[device])}>
      <Link href={`${parent}/${name}`}>
        <a>
          <Image layout='fill' src={`https://destinyemblemwallpapers.com/fullres/${filePath}`} alt={name} quality={20} />
        </a>
      </Link>
    </div>
  )
}

function ModalElement (props) {
  const { name, show, filePath } = props

  return (
    <div className={classNames('modal fade', { show })}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <Image src={`https://destinyemblemwallpapers.com/fullres/${filePath}`} alt={name} unoptimized layout='fill' />
          </div>
          <div className="modal-footer">
          <div className='mx-auto'>{name}</div>
          <div className='mx-auto'>
            <a href={'#'} className='modal-btn btn btn-outline-secondary' download>Download</a>
            <button type="button" className='btn btn-outline-secondary ms-2 modal-btn' data-dismiss='modal' /* onClick={() => navigate(pathBase)} */>Close</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery (props) {
  const { device = 'desktop', images = [], parent, modal: modalInput } = props
  const [modal/*, setModal */] = useState(modalInput)

  /* useEffect(async () => {
    bootstrap = await import('bootstrap/dist/js/bootstrap.bundle')
  }, [])

  useEffect(() => {
    console.log(bootstrap)
    const modalElement = new bootstrap.Modal(document.getElementById('modal'))
    if (modal) modalElement.show()
    else modalElement.hide()
  }, [modal]) */

  return (
    <div className={classNames('container-fluid flex-fill px-0', styles.root)}>
      <ModalElement {...modal} show={!!modal} />
      <div className="col">
        <div className="row">
          {images.map(i => <Thumb key={i.filePath} device={device} parent={parent} {...i}/>)}
        </div>
      </div>
    </div>
  )
}
