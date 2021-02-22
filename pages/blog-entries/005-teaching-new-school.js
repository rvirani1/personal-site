import Head from 'next/head'
import Image from 'next/image'

import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.css'
import { BlogHr } from '../../components/blog/BlogHr'

export default function TeachingNewSchool() {
  return (
    <>
      <Head>
        <title>Teaching at The New School in Atlanta - RiazV.me</title>
        <meta
          name="description"
          content="Things I learned while teaching at the New School Atlanta"
        />
      </Head>
      <Layout>
        <BlogPost titleText="Teaching at The New School in Atlanta" date="2016-02-23">
          <Image
            alt="Picture of Pair Programming Meetup"
            layout="fixed"
            src="/blog-pics/teaching-new-school.jpeg"
            width={600}
            height={300}
          />
          <p className={sharedStyles.blogParagraph}>
            Recently, I just finished teaching a month-long programming boot camp at a local
            private high school, The New School. It was my first experience teaching high school
            age students. Needless to say, my students were amazing and I was impressed by how much
            they learned in a short time frame. I by no means believe that I was or have become a
            master teacher; however, I gained a few insights I’d like to share.
          </p>
          <BlogHr />

          <p className={sharedStyles.blogParagraph}>
            Let’s get to lesson one: syntax is the beginning, but it is also ONLY the beginning.
            To start writing code in any language, we have to start with basic syntax and rightfully
            so. It’s hard to start writing English without learning the letters. But after that, we
            want to start writing Shakespearean Sonnets right away. We want to show the power of our
            language. It provides a sense of progress and keeps us interested. This motivation is
            powerful, so I’m not recommending that instructors hold back showing the eye candy. But
            there is a latent danger in this approach.
          </p>
          <BlogHr />

          <p className={sharedStyles.blogParagraph}>
            If we rush to “building” without truly “understanding”, we ignore the hardest part about
            coding, which is to think programmatically. For example, let’s say I ask a student to print
            out all the even numbers from 0–100 to the console. At one level, the student should
            understand what the console is, what loops are, and how to print data to the console.
            However, the next step is to come up with an algorithm in his or her mind. An algorithm may
            be something like set a counter to 0. Then create a loop that stops when the counter is
            greater than one hundred. Inside the loop, print the value of the counter and increase it by
            two. If you got that right away, I’m guessing you’re a developer.
          </p>
          <BlogHr />

          <p className={sharedStyles.blogParagraph}>
            Some people are faster at picking up algorithms than others. However, for the vast majority
            of programmers, it’s only something they’ve gotten good at by practice. Even the coders that
            believe themselves naturally-talented struggled. They just don’t remember it or lost their
            memory in their massive ego. As such, this part of the learning process doesn’t fit with the
            learn-fast-feel-good approach we often aim for. So what should we do?
          </p>
          <BlogHr />

          <p className={sharedStyles.blogParagraph}>
            The answer to me is simple. Allow for time to learn algorithms before learning syntax. It won’t
            be perfect, but a primer in basic algorithmic thinking is just too crucial. Find code kata style
            exercises and solve them using pseudo-code rather than real code. Then take the same problem and
            solve it using another approach but only in pseudo-code. I think the impact could be tremendous.
            What do you think?
          </p>
        </BlogPost>
      </Layout>
    </>
  )
}
