import Head from 'next/head'

import Image from 'next/image'
import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.css'

export default function LearnedOptimism() {
  return (
    <>
      <Head>
        <title>Book Review: Learned Optimism - RiazV.me</title>
        <meta
          name="description"
          content="Quick book review of Learned Optimism by Martin Seligman"
        />
      </Head>
      <Layout>
        <BlogPost titleText="Book Review: Learned Optimism" date="2017-06-30">
          <Image
            alt="Picture of Learned Optimism Cover"
            layout="fixed"
            src="/blog-pics/learned-optimism.jpeg"
            width={200}
            height={300}
          />
          <h3>Optimism Good</h3>
          <p className={sharedStyles.blogParagraph}>
            Optimism results in better health, happiness, and success than pessimism. This is true
            even if pessimists more accurately assess reality. Why does this happen? Well, optimists
            will keep going while pessimists will get discouraged and give up.
          </p>

          <h3>Learned Helplessness Bad</h3>
          <p className={sharedStyles.blogParagraph}>
            Pessimists may acquire “learned helplessness”. That’s a fancy term for despair.
            For example, animals who can’t control when they get a reward or punishment usually give
            up responding to any stimulus after a period of time. This helplessness continues to disable
            them even in new circumstances.
          </p>

          <h3>So Be Optimistic</h3>
          <p className={sharedStyles.blogParagraph}>
            Optimists consistently see good things as permanent and that they themselves caused that
            good. Consequently, optimists see bad circumstances as temporary and caused by external forces.
          </p>

          <h3>My Thoughts</h3>
          <p className={sharedStyles.blogParagraph}>
            I liked this book, but thought it was definitely quite repetitive. Outside of the details
            of Seligman’s experiments and tons of anecdotes, I don’t know if I gained much more than
            I detailed in the TL;DR above.
          </p>
        </BlogPost>
      </Layout>
    </>
  )
}
