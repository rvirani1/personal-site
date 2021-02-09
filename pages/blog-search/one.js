import Head from 'next/head'
import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'

export default function One() {
  return (
    <>
      <Head>
        <title>Blog - RiazV.me</title>
        <meta
          name="description"
          content="Riaz Virani writes blog articles of various sorts based on things that interest him."
        />
      </Head>

      <Layout>
        <div style={{ marginTop: '4rem' }}>
          <BlogPost
            titleText="It Begins"
            date="2016-01-14"
            path="/blog-entries/001-it-begins"
            previewText="fooey"
          />
        </div>
      </Layout>
    </>
  )
}
