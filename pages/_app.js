import { useEffect, useState } from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga4'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

import Navbar from '../components/Navbar'

ReactGA.initialize('G-1KJXLJMYNF')

export default function App ({ Component, pageProps }) {
  const [sort, setSort] = useState('new')
  const [search, setSearch] = useState('')

  useEffect(() => import('bootstrap/dist/js/bootstrap.bundle'), [])

  const props = { sort, setSort }

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
      <Component {...pageProps} sort={sort} search={search} />
    </>
  )
}
