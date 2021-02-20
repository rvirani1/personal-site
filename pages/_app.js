import { AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp
