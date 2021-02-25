import { useEffect } from 'react'
import '../styles/globals.scss'

import { pageView } from '../lib/gtag'

function MyApp({ Component, pageProps, router }: any) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <Component {...pageProps} key={router.route} /> // eslint-disable-line react/jsx-props-no-spreading
  )
}

export default MyApp
