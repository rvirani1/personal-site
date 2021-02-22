import Head from 'next/head'
import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.css'

export default function BlogEntry() {
  return (
    <>
      <Head>
        <title>It Begins... - RiazV.me</title>
        <meta
          name="description"
          content="This article defines the beginning of Riaz Virani's personal blog. Welcome!"
        />
      </Head>
      <Layout>
        <BlogPost titleText="It Begins" date="2016-01-14">
          <p className={sharedStyles.blogParagraph}>
            Everything has to start somewhere and this is the start of my blog.
            I’m a developer by trade, so most of my posts will be related to tech and
            something I’ve tried to solve.
          </p>
          <p className={sharedStyles.blogParagraph}>
            This blog post, however, is about beginnings. Beginnings of all sorts, shapes,
            and sizes. After procrastinating on it for two years, I have started a blog.
            It happened. I’m no longer a procrastinator.
          </p>
          <p className={sharedStyles.blogParagraph}>
            So now I ask you, what are you procrastinating on? Didn’t you just think about
            it? Did you not go to the gym? Did you not read that informative article? Have
            you still not called your childhood friend to apologize after hitting them in the
            crotch with a water balloon, thereby embarrassing them in front of the whole school,
            causing them to grow up an adolescent nu-metal hipster, only for them to discover their
            genius as a theoretical physicist and discover a solution to nuclear fusion,
            but then not complete their research because of debilitating daily sadness from an
            incommodious childhood memory you inadvertently caused?
          </p>
          <p className={sharedStyles.blogParagraph}>
            Yeah, you know what I’m talking about? Here’s the point, don’t think, and do it.
          </p>
          <div style={{
            display: 'flex', justifyContent: 'center', marginTop: 40,
          }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZXsQAXx_ao0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Shia Labeouf motivational video"
              allowFullScreen
            />
          </div>
        </BlogPost>
      </Layout>
    </>
  )
}
