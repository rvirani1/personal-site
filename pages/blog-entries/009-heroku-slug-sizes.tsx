import Head from 'next/head'

import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.scss'
import { ExternalLink } from '../../components/blog/ExternalLink'

export default function HerokuSlugSizes() {
  return (
    <>
      <Head>
        <title>Heroku Slug Sizes Impact Your Boot Time - RiazV.me</title>
        <meta
          name="description"
          content="Explains how Heroku slug sizes impact application boot time"
        />
      </Head>
      <Layout>
        <BlogPost titleText="Heroku Slug Sizes Impact Your Boot Time" date="2018-12-27">
          <p className={sharedStyles.blogParagraph}>
            Recently, I was trying to figure out why some of our projects were getting Heroku’s dreaded&nbsp;
            <ExternalLink text="H20 errors" href="https://devcenter.heroku.com/articles/error-codes#h12-request-timeout" />
            &nbsp;when rebooting or deploying. When it’s starting new dynos, Heroku basically queues
            up requests it gets in it’s own routing infrastructure for up to 75 seconds while it tries to
            get your app processes up and running again. I assumed that this time only included the time
            it took to start my Rails processes. Not true! My processes took no where near 75 seconds to
            start and I was still getting H20 errors.
          </p>

          <p className={sharedStyles.blogParagraph}>
            I had some suspicions and contacted Heroku support to confirm. Turns out I was right on the
            money. That gap is the time Heroku is taking to copy my slug (basically my code) onto the
            new dyno! The slug size of my slow booting app is about 270 MB!
          </p>
          <p className={sharedStyles.blogParagraph}>
            So what can we do?
          </p>
          <ol>
            <li>We could leave Heroku to some other PaaS or run our own infrastructure.</li>
            <li>We could reduce our slug size, which was feasible in this specific case but might not be in all cases.</li>
            <li>
              We could enable&nbsp;
              <ExternalLink text="Heroku Preboot" href="https://devcenter.heroku.com/articles/preboot" />
              .
            </li>
          </ol>
          <p className={sharedStyles.blogParagraph}>
            The latter option isn’t actually wasn’t too bad of an idea. Preboot essentially boots up your
            new app for a few minutes before cutting traffic over to it, so you get true no-downtime
            deploys. There are some risks and downsides to this, but they are manageable.
          </p>
          <p className={sharedStyles.blogParagraph}>
            We found that we were leaving around a lot of unused&nbsp;
            <code>node_modules</code>
            {' '}
            after we built our front end application.
            That dropped us about 150MB and dramatically sped up boot times. Whew!
          </p>
        </BlogPost>
      </Layout>
    </>
  )
}
