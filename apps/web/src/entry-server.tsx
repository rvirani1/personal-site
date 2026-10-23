import { renderToString } from 'react-dom/server'
import { App } from './App'
import { resolve, allPaths } from './routes'

export { allPaths }

export async function render(url: string) {
  const initial = await resolve(new URL(url, 'http://x').pathname)
  const html = renderToString(<App initial={initial} url={url} />)
  return { html, title: initial.title, description: initial.description, status: initial.status ?? 200 }
}
