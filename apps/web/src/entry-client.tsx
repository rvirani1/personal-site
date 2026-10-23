import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App'
import { resolve } from './routes'
import { setHead } from './router'
import './styles.css'

const root = document.getElementById('root')!
const url = location.pathname + location.search

resolve(location.pathname).then((initial) => {
  const app = <App initial={initial} url={url} />
  // Prerendered pages hydrate; the dev server starts from an empty root.
  if (root.firstElementChild) hydrateRoot(root, app)
  else {
    setHead(initial)
    createRoot(root).render(app)
  }
})
