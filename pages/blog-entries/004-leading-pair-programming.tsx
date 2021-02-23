import Head from 'next/head'
import Image from 'next/image'

import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.scss'
import { ExternalLink } from '../../components/blog/ExternalLink'
import { BlogHr } from '../../components/blog/BlogHr'

export default function LeadingPairProgramming() {
  return (
    <>
      <Head>
        <title>Leading a Pair Programming Meetup - RiazV.me</title>
        <meta
          name="description"
          content="Tips and tricks I learned while learning to run a Ruby meetup"
        />
      </Head>
      <Layout>
        <BlogPost titleText="Leading a Pair Programming Meetup" date="2016-01-23">
          <Image
            alt="Picture of Pair Programming Meetup"
            layout="intrinsic"
            src="/blog-pics/pair-programming.jpeg"
            width={600}
            height={335}
          />
          <p className={sharedStyles.blogParagraph}>
            In July of 2015, I started hosting a Pair Programming meetup as a part of the&nbsp;
            <ExternalLink href="https://www.meetup.com/atlrug/" text="Atlanta Ruby Users Group" />
            . Most of the coding-oriented meetups I attended were fun as social events,
            but they always revolved around a presentation that I could just as easily
            watch on YouTube. No one seemed to write any code at meetups for coders!
          </p>
          <p className={sharedStyles.blogParagraph}>
            The Pair Programming meetup was meant to be an alternative based on a simple
            idea. We meet up, pair up, and work on short coding exercises. Junior developers
            would get to work with more senior developers. People would socialize. They’d
            help each other. Kumbaya! That is, if I could find the right format. I think I
            did, but here’s some things I learned along the way…
          </p>
          <BlogHr />
          <h3>First Iteration: Web Apps</h3>
          <p className={sharedStyles.blogParagraph}>
            I chose the exercises. I aimed initially at making them&nbsp;
            <ExternalLink text="real web applications" href="https://github.com/ATLRUG-AIR/lunchfinder" />
            . We didn’t necessarily exchange code at the end and I provided no tests to
            measure their success. Quickly I learned that a few hours simply isn’t enough
            for most people get over the hurdles of deploying a real web app. New developers
            would often get stuck in the mechanics of deployment or version control. Secondly,
            people felt disheartened at the lack of tests provided. They didn’t feel like they
            had a measurable goal to tackle. Finally, people didn’t necessarily love the
            exercises I baked up myself.
          </p>
          <BlogHr />
          <h3>Second Iteration: Gamification</h3>
          <p className={sharedStyles.blogParagraph}>
            In the second iteration, I asked participants to sign up at&nbsp;
            <ExternalLink text="CodeWars" href="https://codewars.com" />
            &nbsp;and choose their own exercises. CodeWars assigns a point number to the exercise
            based upon its difficulty. I would track the increase in the team’s total through
            the course of the evening. The team that gained the greatest number of points won.
            Additionally, CodeWars provided automated tests for each of its exercises. However,
            this approach resulted in an odd disconnect between teams. Every team worked on
            different problems at different times, so they didn’t talk to each other. Furthermore,
            CodeWars didn’t expose all the tests it ran to the user. So sometimes CodeWars would
            fail code but not explain why the code had failed.
          </p>
          <BlogHr />
          <h3>Third and Final Iteration</h3>
          <p className={sharedStyles.blogParagraph}>
            In the third iteration, we switched tools again to&nbsp;
            <ExternalLink text="Exercism.io" href="https://exercism.io" />
            . However, I would choose one or two exercises for the evening rather than letting the
            teams choose. This way everyone was working on the same problems. Additionally, Exercism
            exposed its tests to the user, so there was no confusion as to why a test failed. Finally,
            Exercism provided a review mechanism for code that was submitted to their system. At our
            meetup, we would do this review in person by reserving the last 15 minutes purely for peer
            code review. People seemed to really like the format. Score!
          </p>
        </BlogPost>
      </Layout>
    </>
  )
}
