import { Router } from './router'
import type { Resolved } from './routes'
import { Layout } from './components/Layout'

export function App({ initial, url }: { initial: Resolved; url: string }) {
  return <Router initial={initial} initialUrl={url}>{(r) => <Layout>{r.element}</Layout>}</Router>
}
