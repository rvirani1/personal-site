import Head from 'next/head'
import Image from 'next/image'

import { BlogSearchItem } from '../../components/blog/BlogSearchItem'
import { SearchLayout } from '../../components/layout/SearchLayout'
import { Layout } from '../../components/Layout'
import styles from '../../components/blog/blogSearchStyles.module.css'

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
          <div style={{
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
          }}
          >
            <Image src="/shout.svg" height={50} width={50} />
            <h3 style={{ display: 'inline', marginRight: '2rem' }}>Heads Up</h3>
            <p style={{ display: 'inline' }}>
              My most recent amusing musings can be found at&nbsp;
            </p>
            <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              marginLeft: '4px',
            }}
            >
              <a href="https://dev.to/rvirani1" className={styles.link} target="_blank" rel="noreferrer noopener">
                <span>DEV.to</span>
                <span>&#8594;</span>
              </a>
              <a
                href="https://www.indiehackers.com/rvirani"
                className={styles.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>IndieHackers</span>
                <span>&#8594;</span>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ height: '10px', backgroundColor: 'teal', width: '20%' }} />
          </div>

          <BlogSearchItem
            titleText="Hidden Gems for Rails"
            date="2021-04-04"
            path="/blog-entries/012-hidden-gems-for-rails"
            previewText="So the title for this post is pretty self-explanatory. Yes, there are the common popular gems everyone uses."
          />
          <BlogSearchItem
            titleText="So I gave Svelte a Try"
            date="2021-03-19"
            path="/blog-entries/011-svelte-a-try"
            previewText="Svelte is a framework a la React and Vue. It uses a componentized approach just like those frameworks. However, it compiles down to plain JS with no runtime."
          />
          <BlogSearchItem
            titleText="Using the OverCommit Gem: The Poor Man's CI"
            date="2019-01-10"
            path="/blog-entries/010-overcommit"
            previewText="Don't have money for a fancy CI and work solo.
            Maybe the overcommit gem is all you need for CI"
          />
          <BlogSearchItem
            titleText="Heroku Slug Sizes Impact Your Boot Time"
            date="2018-12-27"
            path="/blog-entries/009-heroku-slug-sizes"
            previewText="If you come from server side rendering, the world of client side rendering
            can be kind of confusing."
          />
          <BlogSearchItem
            titleText="What is Client Side Routing?"
            date="2018-11-24"
            path="/blog-entries/008-what-is-client-side-routing"
            previewText="If you come from server side rendering, the world of client side rendering
            can be kind of confusing."
          />
          <BlogSearchItem
            titleText="Book TL;DR - Learned Optimism"
            date="2017-06-30"
            path="/blog-entries/007-learned-optimism"
            previewText="This is a quick book review of Learned Optimism by Martin Seligman"
          />
          <BlogSearchItem
            titleText="Installing a Ruby Gem Globally in RVM"
            date="2017-01-06"
            path="/blog-entries/006-global-rvm-gem"
            previewText="If you are a Rubyist and use RVM, you have probably used RVM gemsets
            before. If you haven’t, you should because it has some nifty features that will
            make your life easier. Here’s one of them"
          />
          <BlogSearchItem
            titleText="Teaching at The New School Atlanta"
            date="2016-02-23"
            path="/blog-entries/005-teaching-new-school"
            previewText="Recently, I just finished teaching a month-long programming boot camp
            at a local private high school, The New School. It was my first experience teaching
            high school age students. Needless to say, my students were amazing."
          />
          <BlogSearchItem
            titleText="Leading a Pair Programming Meeup"
            date="2016-01-23"
            path="/blog-entries/004-leading-pair-programming"
            previewText="In July of 2015, I started hosting a Pair Programming meetup as a
            part of the Atlanta Ruby Users Group. Most of the coding-oriented meetups I
            attended were fun as social events, but they always revolved..."
          />
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
