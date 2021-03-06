import Head from 'next/head'
import { Layout } from '../components/Layout'
import { SearchLayout } from '../components/layout/SearchLayout'
import { TalkSearchItem } from '../components/talks/TalkSearchItem'
import { TalkHr } from '../components/talks/TalkHr'

export default function Talks() {
  return (
    <>
      <Head>
        <title>Talks - RiazV.me</title>
        <meta content="Recording of Riaz Virani's talks on various technology products." />
      </Head>

      <Layout>
        <SearchLayout>
          <TalkSearchItem
            titleText="RailsConf 2021: Missing Guide to Service Objects in Rails"
            date="May 18, 2021"
            externalUrl="https://www.youtube.com/watch?v=XH1fbvexqyU"
            thumbnailImg="/talk-thumbnails/railsconf-2021.png"
            previewText="This is my RailsConf 2021 talk regarding service objects."
          />
          <TalkHr />
          <TalkSearchItem
            titleText="Using Services to Effectively Implement Business Logic in Rails"
            date="May 8, 2021"
            externalUrl="https://podcasts.apple.com/us/podcast/using-services-to-effectively-implement-business-logic/id1539988688?i=1000520883998"
            thumbnailImg="/talk-thumbnails/engine-yard.png"
            previewText="This is a guest interview I gave on the Steam Powered podcast for Engine Yard."
          />
          <TalkHr />
          <TalkSearchItem
            titleText="Building Hybrid Mobile Apps Using Expo"
            date="July 21, 2020"
            externalUrl="https://www.youtube.com/watch?v=bQC-Bxl5fUI"
            thumbnailImg="/talk-thumbnails/expo.png"
            previewText="This is a talk I gave at the Atlanta React Meetup about using Expo to build React
            Native apps."
          />
          <TalkHr />
          <TalkSearchItem
            titleText="Drifting Ruby Interview"
            date="May 16, 2019"
            externalUrl="https://www.driftingruby.com/episodes/interview-with-riaz-virani"
            thumbnailImg="/talk-thumbnails/drifting-ruby.png"
            previewText="More talking! I recently got to do an interview with the folks over at DriftingRuby about my experience organizing the Atlanta Ruby Meetup. Check it out!"
          />
          <TalkHr />
          <TalkSearchItem
            titleText="Supply Chain Radio"
            date="May 6, 2019"
            externalUrl="https://businessradiox.com/podcast/supply-chain-now/episode-74/"
            thumbnailImg="/talk-thumbnails/supply-chain.png"
            previewText="So I was recently on the Supply Chain Radio podcast. Take a
            listen and let me know if I bored you!"
          />
          <TalkHr />
          <TalkSearchItem
            titleText="GraphQL Loves Ruby"
            date="January 9, 2019"
            externalUrl="https://www.youtube.com/watch?v=XVEsCKGNkus"
            thumbnailImg="/talk-thumbnails/graphql-ruby.png"
            previewText="This was a talk I gave at the Atlanta Ruby Meetup on GraphQL and Ruby"
          />
          <TalkHr />
          <TalkSearchItem
            titleText="JavaScript Everywhere"
            date="March 30, 2017"
            externalUrl="https://www.youtube.com/watch?v=d1upI3mwfNY"
            thumbnailImg="/talk-thumbnails/js-everywhere.png"
            previewText="I recently gave a talk about JavaScript at a local meetup. Enjoy!"
          />
          <TalkHr />
          <TalkSearchItem
            titleText="WebRTC For Your App"
            date="May 18, 2016"
            externalUrl="https://www.youtube.com/watch?v=kC12enYIBKE"
            thumbnailImg="/talk-thumbnails/webrtc.png"
            previewText="Recently, I gave a talk at the Atlanta Ruby Meetup on WebRTC. Rails
            now supports ActionCable is about to be released and I’ve found some people are
            very confused between WebSockets and WebRTC. Hopefully, you find itinformative!"
          />
          <TalkHr />
          <TalkSearchItem
            titleText="A Real Time Presentation System"
            date="Sometime in 2015"
            externalUrl="https://www.youtube.com/watch?v=hsAyl7U3G1E&feature=emb_title"
            thumbnailImg="/talk-thumbnails/curly-braces.png"
            previewText="Recently, I got to do an impromptu presentation at the Curly Braces
            2015 conference about a personal project, called YoThumb. It’s a way for an audience
            to passively provide feedback to a presenter while he or she is presenting."
          />
        </SearchLayout>
      </Layout>
    </>
  )
}
