import Head from 'next/head'

import Image from 'next/image'
import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.scss'
import { ExternalLink } from '../../components/blog/ExternalLink'

export default function Overcommit() {
  return (
    <>
      <Head>
        <title>Poor Man’s CI: The OverCommit Gem - RiazV.me</title>
        <meta
          name="description"
          content="Poor Man’s CI: The OverCommit Gem"
        />
      </Head>
      <Layout>
        <BlogPost titleText="Poor Man’s CI: The OverCommit Gem" date="2019-01-10">
          <p className={sharedStyles.blogParagraph}>
            I’m a huge fan of the&nbsp;
            <ExternalLink text="OverCommit" href="https://github.com/sds/overcommit" />
            &nbsp;gem. The gem uses Git hooks, which you can already use with plain Git,
            to simplify the process of running test suites and linters as a part of source control.
          </p>
          <Image
            alt="Image of the Overcommit CLI"
            layout="intrinsic"
            src="/blog-pics/overcommit.png"
            width={600}
            height={300}
          />
          <p className={sharedStyles.blogParagraph}>
            This is a wonder. I can’t tell you how many times I’ve worked with teams that use&nbsp;
            <ExternalLink text="CodeClimate" href="https://codeclimate.com/" />
            &nbsp;or a CI solution to run linters after the fact. Just like it’s better to tell users
            up front about validation errors before they hit submit, it’s also better to tell developers
            up front about a linting error before they commit and push.
          </p>
          <p className={sharedStyles.blogParagraph}>
            Here’s how it works:
          </p>
          <p className={sharedStyles.blogParagraph}>
            You install the gem, then run&nbsp;
            <code>overcommit --install</code>
            &nbsp;to add the OverCommit hook code to your project&nbsp;
            <code>.git</code>
            &nbsp;directory. This will also add a&nbsp;
            <code>overcommit.yml</code>
            &nbsp;configuration file to your project. You make some tweaks to support the linters
            or test suites specific to your project and you’re done.
          </p>
          <p className={sharedStyles.blogParagraph}>
            Every developer who has run&nbsp;
            <code>overcommit --install</code>
            &nbsp;once in that project gets the full benefit of all of that configuration.
          </p>

          <p className={sharedStyles.blogParagraph}>
            At LoadUp, we’ve found that with a small team we rarely ever need the test suites in our
            CI and are saving significant amounts of money getting rid of it. Heroku still handles
            automated builds, but we’ve kept our test suites fast enough that the whole suite runs on&nbsp;
            <code>git push</code>
            &nbsp;. Sure we could have a suite pass on one developer machine and fail on another.
            However, that would be caught quite quickly. So give OverCommit a shot in your project and
            let me know what you think!
          </p>
        </BlogPost>
      </Layout>
    </>
  )
}
