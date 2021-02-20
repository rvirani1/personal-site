import Head from 'next/head'
import { Layout } from '../components/Layout'
import { BlogSearchLayout } from '../components/blog/BlogSearchLayout'

export default function Talks() {
  return (
    <>
      <Head>
        <title>Talks - RiazV.me</title>
        <meta content="Recording of Riaz Virani's talks on various technology products." />
      </Head>

      <Layout>
        <BlogSearchLayout />
      </Layout>
    </>
  )
}
