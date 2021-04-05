import Head from 'next/head'

import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.scss'
import { ExternalLink } from '../../components/blog/ExternalLink'

export default function TopRubyGems() {
  return (
    <>
      <Head>
        <title>Hidden Gems for Rails - RiazV.me</title>
        <meta
          name="description"
          content="A list of my top 5 Rails Gems"
        />
      </Head>
      <Layout>
        <BlogPost titleText="Hidden Gems for Rails" date="2021-04-04">
          <p className={sharedStyles.blogParagraph}>
            So the title for this post is pretty self-explanatory. Yes, there are the common popular gems everyone uses,
            like Devise. However, there are some hidden &ldquo;gems&ldquo; out there.
            <em>(Did you catch that?)</em>
            &nbsp;Also note that I&lsquo;ve used all of these gems in production and found them to be stable over time.
            So anyway here&lsquo;s my list:
          </p>

          <h3>Counter Culture Gem</h3>
          <p className={sharedStyles.blogParagraph}>
            Rails has a built in system to do counter caches, which means count the related records of another type.
            However, it&lsquo;s pretty primitive. Sometimes you need to sum a column from another class or sometimes you
            only need to count records given a condition. That&lsquo;s what this gem does. The DSL is really simple and has
            worked pretty reliable for us.
          </p>
          <ExternalLink href="https://github.com/magnusvk/counter_culture" text="GitHub" />

          <h3>Kaminari</h3>
          <p className={sharedStyles.blogParagraph}>
            Oh Kaminari...
            Kaminari helps you take your ActiveRecord relations and paginate them. So if you want to display a large
            list of things in a UI, you&lsquo;ll need to paginate. You can paginate just be using ActiveRecord, but
            this gem just makes it so easy and integrates just so seamlessly with ActiveRecord that it&lsquo;s a great
            choice.
          </p>
          <ExternalLink href="https://github.com/kaminari/kaminari" text="GitHub" />

          <h3>LightService</h3>
          <p className={sharedStyles.blogParagraph}>
            I&lsquo;ve written a couple of articles on this gem. It helps organize your Rails service objects in a
            functional pattern. If you&lsquo;re business logic code is getting a little convoluted and hard to follow, I
            highly recommend this project.
          </p>
          <ExternalLink href="https://github.com/adomokos/light-service" text="GitHub" />

          <h3>Geocoder</h3>
          <p className={sharedStyles.blogParagraph}>
            If your application deals with location data, i.e. longitude, latitude, this is a fantastic gem. You can
            find database records that are near other records. Provide a string and figure out where it is. I don&lsquo;t
            know of a comparable gem as powerful and stable in the Ruby ecosystem.
          </p>
          <ExternalLink href="https://github.com/alexreisner/geocoder" text="GitHub" />

          <h3>Lockbox</h3>
          <p className={sharedStyles.blogParagraph}>
            This is another ActiveRecord integrated gem that makes it super easy to store encrypted data in your
            database. You simply add it, configure the security keys, and then mark that column as an encrypted column.
            With some exceptions, you can then just use it in your application as an unencrypted column.
          </p>
          <ExternalLink href="https://github.com/ankane/lockbox" text="GitHub" />
        </BlogPost>
      </Layout>
    </>
  )
}
