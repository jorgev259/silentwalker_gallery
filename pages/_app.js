import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getWithExpiry, setWithExpiry } from '../components/utilsClient'

function MyApp ({ Component, pageProps }) {
  const [popup, setPopup] = useState()
  const [sort, setSort] = useState('new')

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return setPopup(true)

    const item = getWithExpiry('donate')
    if (item === null) setPopup(true)
    else setPopup(item)
  }, [])

  function donateClose () {
    setPopup(false)
    setWithExpiry('donate', false, 1 * 7 * 24 * 60 * 60 * 1000)
  }

  useEffect(() => import('bootstrap/dist/js/bootstrap.bundle'), [])

  const props = { sort, setSort, popup, donateClose }

  return (
    <>
      <Navbar {...props} />
      <Component {...pageProps} sort={sort} popup={popup} />
      <Footer />
    </>
  )
}

export default MyApp
