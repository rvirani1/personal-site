import Head from 'next/head'

import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.css'

export default function GlobalRvmGem() {
  return (
    <>
      <Head>
        <title>Installing a Ruby Gem Globally in RVM - RiazV.me</title>
        <meta
          name="description"
          content="Explains how to install a Ruby gem globally in RVM"
        />
      </Head>
      <Layout>
        <BlogPost titleText="Installing a Ruby Gem Globally in RVM" date="2017-01-06">
          <p className={sharedStyles.blogParagraph}>
            If you are a Rubyist and use RVM, you have probably used RVM gemsets before. If you
            haven’t, you should because it has some nifty features that will make your life easier.
            Here’s one of them
          </p>

          <p className={sharedStyles.blogParagraph}>
            Since gemsets allow you to literally create separate universes of gems, you can run into
            an interesting problem.&nbsp;
            <strong>
              What if you actually want a gem that is globally installed across all of your gemsets?
            </strong>
            &nbsp;You probably want bundler in every one of your gemsets, right?
          </p>

          <p className={sharedStyles.blogParagraph}>
            Luckily, RVM makes this very easy and it’s built right in.
          </p>
          <code style={{ fontSize: '1.25rem' }}>{'rvm @global do gem install <Your Gem Name> end'}</code>

          <p className={sharedStyles.blogParagraph}>
            Boom! That&lsquo;s it.
          </p>
        </BlogPost>
      </Layout>
    </>
  )
}
