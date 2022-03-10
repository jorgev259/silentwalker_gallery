
import classNames from 'classnames'
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
          <img src={require(`../img/drive_gallery/${filePath}?resize&size=300`)} alt={name} />
        </a>
      </Link>
    </div>
  )
}

/* function ModalElement (props) {
  const { name, show, filePath, parent } = props
  const fullres = filePath ? require(`../img/drive_gallery/${filePath}?original`) : ''

  return (
    <div className={classNames('modal fade', styles.modal, { show })}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className={classNames('modal-body p-0')}>
            {/* eslint-disable-next-line @next/next/no-img-element *//* }
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
} */

export default function Gallery (props) {
  const { device = 'Desktop', images = [], parent, /* modal, */ popup, sort } = props
  const imageList = sort === 'new'
    ? images.sort((a, b) => a.mtimeMs - b.mtimeMs).reverse()
    : images.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })

  return (
    <div className={classNames('container-fluid flex-fill px-0', styles.root)} style={{ paddingTop: popup ? '130px' : '60px' }}>
      {/* <ModalElement {...modal} device={device} show={!!modal} parent={parent} /> */}
      <div className="col">
        <div className="row">
          {imageList.map(i => <Thumb key={i.filePath} device={device} parent={parent} {...i} />)}
        </div>
      </div>
    </div>
  )
}
