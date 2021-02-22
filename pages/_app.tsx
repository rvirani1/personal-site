import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }: any) {
  return (
    <Component {...pageProps} key={router.route} /> // eslint-disable-line react/jsx-props-no-spreading
  )
}

export default MyApp
