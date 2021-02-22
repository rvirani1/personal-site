import Head from 'next/head'
import { Layout } from '../components/Layout'
import styles from './index.module.scss'
import { BlogHr } from '../components/blog/BlogHr'
import { HeroCopy } from '../components/index/HeroCopy'
import { HeroImage } from '../components/index/HeroImage'
import { SiteExplainer } from '../components/index/SiteExplainer'

export default function Index() {
  return (
    <>
      <Head>
        <title>Home - RiazV.me</title>
        <meta
          name="description"
          content="Riaz Virani is a Toronto based full stack web developer with expertise in React
          and Ruby on Rails. He is awesome. You should say hi."
        />
      </Head>

      <Layout>
        <div className={styles.homeLayout}>
          <div className={styles.heroLayout}>
            <HeroCopy />
            <HeroImage />
          </div>
          <BlogHr />
          <SiteExplainer />
        </div>
      </Layout>
    </>
  )
}
