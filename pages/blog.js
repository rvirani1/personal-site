import Head from 'next/head'
import { Layout } from '../components/Layout'

export default function Blog() {
  return (
    <>
      <Head>
        <title>RiazV.me - Blog</title>
        <meta
          name="description"
          content="Riaz Virani writes blog articles of various sorts based on things that interest him."
        />
      </Head>

      <Layout>
        <p>blog</p>

      </Layout>
    </>
  )
}
