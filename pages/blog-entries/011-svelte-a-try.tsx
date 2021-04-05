import Head from 'next/head'

import Image from 'next/image'
import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.scss'
import { ExternalLink } from '../../components/blog/ExternalLink'

export default function SvelteTry() {
  return (
    <>
      <Head>
        <title>So I gave Svelte a Try - RiazV.me</title>
        <meta
          name="description"
          content="So I gave Svelte a Try"
        />
      </Head>
      <Layout>
        <BlogPost titleText="So I gave Svelte a Try" date="2021-03-19">
          <p className={sharedStyles.blogParagraph}>
            When I first started writing this blog, I wanted to try something new. I&lsquo;m a big believer in using
            proven technologies in production, but still taking advantage of opportunities like this site to try new
            things.
          </p>

          <Image
            alt="Svelte Framework logo"
            layout="intrinsic"
            src="/blog-pics/svelte-logo.png"
            width={700}
            height={300}
          />
          <h3>What is Svelte?</h3>
          <p className={sharedStyles.blogParagraph}>
            Svelte is a framework a la React and Vue. It uses a componentized approach just like those frameworks.
            However, it compiles down to plain JS with no runtime. That way it&lsquo;s smaller. It also looks a lot
            more like plain HTML and JS rather than weird custom syntax (I&lsquo;m looking at your Angular).
            It also has first class support for animations, which some other frameworks (cough React) don&lsquo;t have.
          </p>

          <h3>However, there are some problems...</h3>
          <p className={sharedStyles.blogParagraph}>
            The build ecosystem and routing solutions are a bit of a mess and the maintainers keep changing their mind
            (despite being well intentioned).
          </p>

          <p className={sharedStyles.blogParagraph}>
            For example, Svelte initially came with a CLI, then the maintainers
            switched to a format where they give you a template repo and you clone it via a custom tool called&nbsp;
            <ExternalLink text="degit" href="https://github.com/Rich-Harris/degit" />
            . They now want to move back to a CLI.
          </p>
          <p className={sharedStyles.blogParagraph}>
            The recommended Svelte build tool is called&nbsp;
            <ExternalLink text="Sapper" href="https://sapper.svelte.dev/" />
            .
            It&lsquo;s been deprecated in favor of a to be released build tool called Svelte Kit that is
            months and months delayed as of March 2021. They&lsquo;re also moving it to&nbsp;
            <ExternalLink text="Snowpack" href="https://www.snowpack.dev/" />
            &nbsp;for reasons?
            However even sticking with Sapper, I had a lot of obvious issues, like styling the
            {' '}
            <code>body</code>
            {' '}
            tag without triggering a Sapper warning.
            Build times for any non-trivial app can also get quite long using the webpack version of Sapper,
            which is something the maintainers acknowledge but can&lsquo;t fix until SvelteKit.
          </p>
          <p className={sharedStyles.blogParagraph}>
            Additionally, one of the principles of the framework is to bind JS to the UI in a way that looks like normal JS.
            However, this can lead to some problems. You think you&lsquo;re looking at
            {' '}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <code>let a = "b"</code>
            &nbsp;But it&lsquo;s actually doing a ton of magic to watch the value that expression to update the UI. So when
            it goes wrong. It&lsquo;s a little hard to debug.
          </p>
          <h3>Conclusion</h3>
          <p className={sharedStyles.blogParagraph}>
            First of all, this is just my opinion and this was my first attempt at using Svelte. However, chances
            are you&lsquo;re in the same boat, so I thought my insights could be valuable.
            I&lsquo;ve said a lot of negative things here, but
            I don&lsquo;t mean to rant. I really like Svelte&lsquo;s first class support for animations and the fact that it
            doesn&lsquo;t need to start up a runtime on the client to work. That means Svelte sites are generally fast
            after compilation. However, the ecosystem needs some more attention. It doesn&lsquo;t just need to be bigger
            but needs for the maintainers to stop using it for experimentation. If an idea is good at one point, it
            needs overwhelming reasons to change.
          </p>
        </BlogPost>
      </Layout>
    </>
  )
}
