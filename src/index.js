import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Gallery from './js/Gallery'
import Info from './js/Info'
import ClanBanners from './js/ClanBanners'
import { urlToString } from './js/Strings'

import { useRoutes } from 'hookrouter'
import ReactGA from 'react-ga'

const routes = {
  '/clanbanners': () => <App pageComponent={ClanBanners} />,
  '/info': () => <App pageComponent={Info} />,
  '/destiny1/:device': ({ device }) => (
    <App
      pageComponent={Gallery} device={urlToString[device]}
      game='Destiny 1'
    />
  ),
  '/destiny1/:device/:wallpaper': ({ device, wallpaper }) => (
    <App
      pageComponent={Gallery} device={urlToString[device]}
      game='Destiny 1' modal={decodeURIComponent(wallpaper)}
    />
  ),
  '/destiny2/:device/:type': ({ device, type }) => (
    <App
      pageComponent={Gallery} type={urlToString[type]} device={urlToString[device]}
      game='Destiny 2'
    />
  ),
  '/destiny2/:device/:type/:wallpaper': ({ device, type, wallpaper }) => (
    <App
      pageComponent={Gallery} type={urlToString[type]}
      game='Destiny 2' device={urlToString[device]}
      modal={decodeURIComponent(wallpaper)}
    />
  )
}

const Routing = () => {
  const routeResult = useRoutes(routes)

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize('UA-160209776-1')
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [routeResult])

  return routeResult || (
    <script>{(
      window.location.href = '/destiny2/desktop/emblems'
    )}
    </script>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'))
