import Head from 'next/head'
import { BlogSearchItem } from '../../components/blog/BlogSearchItem'
import { SearchLayout } from '../../components/layout/SearchLayout'
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
        <SearchLayout>
          <BlogSearchItem
            titleText="Learning Guide - Ruby on Rails"
            date="2016-01-20"
            path="/blog-entries/003-learning-guide-ruby-on-rails"
            previewText="I’ve been using Ruby on Rails as my primary server-side programming
            language/framework for about 18 months now. For better or worse, I think it’s been
            a good choice as my first deep venture into server-side development."
          />
          <BlogSearchItem
            titleText="A Project Is An Information System"
            date="2016-01-16"
            path="/blog-entries/002-project-info-system"
            previewText="Think of your traditional software development team. Usually, the team has
            some software delivery or project management process. Maybe they have scrum boards, user
            stories, checkpoints, risk management registers, and the handy dandy PMBOK book (sometimes
            with a PMP Consultant)?"
          />
          <BlogSearchItem
            titleText="It Begins"
            date="2016-01-14"
            path="/blog-entries/001-it-begins"
            previewText="Everything has to start somewhere and this is the start of my blog.
            I’m a developer by trade, so most of my posts will be related to tech and something
            I’ve tried to solve."
          />
        </SearchLayout>
      </Layout>
    </>
  )
}
