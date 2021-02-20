import Head from 'next/head'
import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.css'
import { ExternalLink } from '../../components/blog/ExternalLink'

export default function BlogEntry() {
  return (
    <>
      <Head>
        <title>Learning Guide - Ruby on Rails - RiazV.me</title>
        <meta
          name="description"
          content="Learning guide for how to get started with Ruby on Rails"
        />
      </Head>
      <Layout>
        <BlogPost titleText="Learning Guide - Ruby on Rails" date="2016-01-20">
          <p className={sharedStyles.blogParagraph}>
            I’ve been using&nbsp;
            <ExternalLink href="https://rubyonrails.org" text="Ruby on Rails" />
            &nbsp;as my primary server-side programming language/framework for about 8 years now.
            For better or worse, I think it’s been a good choice to balance productivity with flexibility.
          </p>
          <p className={sharedStyles.blogParagraph}>
            However, I often meet other developers-to-be who have extreme difficulty getting started.&nbsp;
            <strong>
              Often, I find that they have very little foundation in other areas critical to web
              development.
            </strong>
            &nbsp;To be clear, that&lsquo;s nothing to be embarrased about. It takes courage to
            learn new skills. I’m a big proponent of getting started with Rails quickly. There is nothing as
            motivating as seeing your first app render a page on the internet (It’s alive!). Yet Rails
            makes no sense if you don’t have an understanding of version control, HTTP, command line,
            and Ruby.
          </p>
          <p className={sharedStyles.blogParagraph}>
            So here’s my guide of recommended resources before learning Rails.
          </p>
          <h2>
            First, read&nbsp;
            <ExternalLink
              href="http://www.vikingcodeschool.com/posts/why-learning-to-code-is-so-damn-hard"
              text="Why Learning to Code is So Damn Hard"
            />
          </h2>
          <p className={sharedStyles.blogParagraph}>
            The point is that learning to code is hard. That’s why it’s generally a fairly
            well-paid profession. Understand that the pain you feel during problem solving is
            simply the pressure of knowledge forcing itself into your brain.
          </p>

          <h2>Second, don’t fret the command line but also don&lsquo;t worship it</h2>
          <p className={sharedStyles.blogParagraph}>
            The command line is an interactive text-based interface to your computer (for Mac or Linux).
            You do need to know how to use CLI based tools, look at their help commands, and know how to
            move around directories. Don&lsquo;t skimp on that.

            But also don&lsquo;t worship the command line because it makes you look like a pro.
            I&lsquo;ve met many beginners who spend days tweaking their emacs configs rather than
            learning how to code. No one ever said: &quot;This app is great! It must have been
            written in emacs!&quot;
          </p>

          <h2>Third, track your code with Git</h2>
          <p className={sharedStyles.blogParagraph}>
            Developer usually store and share their code in something called a Version Control
            System (VCS). This allows them to track changes to their code over time and also
            collaborate.&nbsp;
            <ExternalLink href="https://git-scm.com/" text="Git" />
            &nbsp;is the most popular VCS that is used in the Ruby on Rails world.&nbsp;
            <ExternalLink href="https://github.com" text="GitHub" />
            &nbsp;is the most popular website used to host git repositories.
            As such, it’s pretty important to have a basic handle on git.
          </p>
          <ul className={sharedStyles.blogParagraph}>
            <li><ExternalLink href="https://try.github.io/" text="GitHub Git Learning" /></li>
            <li><ExternalLink href="https://www.atlassian.com/git" text="Atlassian Git Tutorial" /></li>
          </ul>

          <h2>Fourth, Learn Ruby</h2>
          <p className={sharedStyles.blogParagraph}>
            Ruby is the programming language used in the Rails framework. So you have to get
            a basic sense of how it works before moving forward. Ruby is a very developer-friendly
            language and doesn’t have a lot of messy punctuation in its syntax. If you do move onto
            Rails and find yourself confused about Ruby syntax (not necessarily the way Rails uses it),&nbsp;
            <strong>STOP</strong>
            &nbsp;and do more Ruby exercises.
          </p>
          <ul className={sharedStyles.blogParagraph}>
            <li><ExternalLink href="https://learnrubythehardway.org/book/" text="Learn Ruby The Hard Way" /></li>
            <li><ExternalLink href="https://exercism.io/" text="Exercism" /></li>
          </ul>

          <h2>Fifth, Understand The Web</h2>
          <p className={sharedStyles.blogParagraph}>
            So you’ve started figuring out this Ruby thing; however, you may still know nothing about
            web apps, how they work, and why they are crucial to building useful websites. You need to.
            I would watch a few basic videos on YouTube to get a sense of how the internet and web
            applications work. Remember Rails is simply a framework for how to write a web application
            using the Ruby programming language.
          </p>
          <ul className={sharedStyles.blogParagraph}>
            <li><ExternalLink href="https://www.youtube.com/watch?v=D8c4JZW73cM" text="YouTube - How Websites Work" /></li>
            <li><ExternalLink href="https://www.youtube.com/watch?v=5t2P8xIRyaM" text="YouTube - How Does A Website Work?" /></li>
          </ul>
        </BlogPost>
      </Layout>
    </>
  )
}
