import Head from 'next/head'

import { BlogPost } from '../../components/blog/BlogPost'
import { Layout } from '../../components/Layout'
import sharedStyles from '../../components/blog/sharedStyles.module.css'
import { BlockQuote } from '../../components/blog/BlockQuote'
import { ExternalLink } from '../../components/blog/ExternalLink'

export default function ClientSideRouting() {
  return (
    <>
      <Head>
        <title>What is Client Side Routing - RiazV.me</title>
        <meta
          name="description"
          content="Describes what client side routing is"
        />
      </Head>
      <Layout>
        <BlogPost titleText="What is Client Side Routing?" date="2018-11-24">
          <p className={sharedStyles.blogParagraph}>
            If you’re familiar with traditional web development where you actually have different
            HTML files for different URL paths, routing in the Single Page App world can be kind
            of confusing.
          </p>
          <BlockQuote>
            Stop telling me there is only one page in your so-called Single Page Application.
            I’m clicking around your site and I can tell you there is more than one “page” sir!
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            --A Very Confused Me
          </BlockQuote>
          <p className={sharedStyles.blogParagraph}>
            When I started doing modern development, a lot of the explanations I found used a lot of
            technical jargon alongside more React / Angular /&nbsp;
            <ExternalLink text="Anything" href="https://github.com/Rabrennie/anything.js/" />
            &nbsp;technical jargon. So I wrote this article as a more practical explanation.
          </p>
          <h3>How We Used To Do It</h3>
          <p className={sharedStyles.blogParagraph}>
            Let’s say you had a traditional site with just a bunch of HTML, CSS, and JS files and you
            just hosted it with a standard web server. If you then visited the site with a URL like
            <code>http://www.yoursite.com/some/path</code>
            , the web server would actually look in the files and folders on the server. It would look
            for a folder called&nbsp;
            <code>some</code>
            &nbsp;and then a file inside of that called&nbsp;
            <code>path</code>
            . Most web servers will then try one more thing if they can’t find a file there. They will
            also check for&nbsp;
            <code>/some/path/index.html</code>
            . Let’s say there is a file at that folder path. The web server reads it’s contents and
            sends it to the browser. Simple! It’s like a file finder on your computer!
          </p>
          <h3>How We Do It Now</h3>
          <p className={sharedStyles.blogParagraph}>
            However, in the case of a single page web app, like a client rendered React or Angular app.
            There is nothing at the path&nbsp;
            <code>/some/path</code>
            &nbsp;or&nbsp;
            <code>/some/path/index.html</code>
            . If you’ve ever looked at the compiled contents of your web application, you’ll probably only
            see a&nbsp;
            <code>index.html</code>
            &nbsp;and an assortment of JS and CSS files. When you click around your application, the fact
            that the URL may show&nbsp;
            <code>/some/path</code>
            &nbsp;to the user is basically a simulation. It gives the user the impression they are
            navigating between pages. In reality, the JS code simply updating the contents of the
            existing page and telling the browser to show&nbsp;
            <code>/some/path</code>
            &nbsp;as the route. The browser exposes some JS commands called the&nbsp;
            <ExternalLink text="History API" href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" />
            &nbsp;to allow your JS code to do this. In the React world, you are probably using React
            Router which is doing this manipulation for you.
          </p>
        </BlogPost>
      </Layout>
    </>
  )
}
