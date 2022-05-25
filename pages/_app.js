import { useEffect, useState } from 'react'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getWithExpiry, setWithExpiry } from '../components/utilsClient'

export default function App ({ Component, pageProps }) {
  const [popup, setPopup] = useState()
  const [sort, setSort] = useState('new')
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return setPopup(true)

    const item = getWithExpiry('donate')
    if (item === null) setPopup(true)
    else setPopup(item)
  }, [])

  function donateClose () {
    setPopup(false)
    setWithExpiry('donate', false, 24 * 60 * 60 * 1000)
  }

  useEffect(() => import('bootstrap/dist/js/bootstrap.bundle'), [])

  const props = { sort, setSort, popup, donateClose }

  return (
    <>
      <Head>
        <title>SiLeNtWaLkEr Wallpapers</title>
        <meta property="og:type" content="website" />

        <meta key='color' name="theme-color" content="#d4ce2a"></meta>
        <meta key='url' property='og:url' content='/' />
        <meta key='title' property='og:title' content='SiLeNtWaLkEr Wallpapers' />
        <meta key='desc' property='og:description' content='The biggest collection of Destiny emblem wallpapers. Made by SiLeNtWaLkEr' />
        <meta key='image' property='og:image' content='/images/assets/logo_only.png' />
      </Head>
      <Navbar {...props} setSearch={setSearch} />
      <Component {...pageProps} sort={sort} popup={popup} search={search} />
      <Footer />
    </>
  )
}
