
import classNames from 'classnames'
import Link from 'next/link'

import styles from '../styles/gallery.module.scss'

const deviceStyles = {
  desktop: 'col-12 col-sm-6 col-md-3',
  mobile: 'col-6 col-sm-4 col-md-2'
}

function Thumb (props) {
  const { name, device, urlPath = '', imgPath } = props
  const imgUrl = imgPath.replace('/wallpapers/images/', '/thumbs/')

  return (
    <div className={classNames('px-0', styles.thumb, styles[device], deviceStyles[device])}>
      <Link href={urlPath} scroll={false}>
        <a className='position-relative w-100 h-100 d-block'>
          <picture>
            <source srcSet={imgUrl.replace('.jpg', '.webp')} alt={name} type="image/webp" />
            <img src={imgUrl} alt={name} />
          </picture>
        </a>
      </Link>
    </div>
  )
}

function ModalElement (props) {
  const { name, show, imgPath, urlPath = '' } = props
  const parent = urlPath.split('/').slice(0, -1).join('/')

  return (
    <div className={classNames('modal fade', styles.modal, { show })}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className={classNames('modal-body p-0')}>
            {show && <img className='w-100' src={imgPath} alt={name}/>}
          </div>
          <div className="modal-footer">
          <div className='mx-auto'>{name}</div>
          <div className='mx-auto'>
            <a href={imgPath} className='modal-btn btn btn-outline-secondary' download>Download</a>
            <Link href={parent || '/'} scroll={false}>
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
  const { device = 'Desktop', images = [], parent, modal, popup, sort, search } = props

  const filteredImages = images.filter(i => i.name.toLowerCase().includes(search))
  const imageList = sort === 'new'
    ? filteredImages.sort((a, b) => a.mtimeMs - b.mtimeMs).reverse()
    : filteredImages.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })

  return (
    <div className={classNames('container-fluid flex-fill px-0', styles.root)} style={{ paddingTop: popup ? '130px' : '60px' }}>
      <ModalElement {...(modal || {})} device={device} show={!!modal} parent={parent} />
      <div className="col">
        <div className="row">
          {imageList.map(i => <Thumb key={i.urlPath} device={device} parent={parent} {...i} />)}
        </div>
      </div>
    </div>
  )
}
