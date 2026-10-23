// A deliberately tiny router: one context, the History API, and a resolver
// that maps a path to a page plus its data. No dependency to keep up with.
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { resolve, type Resolved } from './routes'

type RouterState = { path: string; search: string; navigate: (to: string, opts?: { replace?: boolean }) => void }

const RouterContext = createContext<RouterState>({ path: '/', search: '', navigate: () => {} })

export const useRouter = () => useContext(RouterContext)

function isInternal(a: HTMLAnchorElement) {
  return a.origin === location.origin && !a.target && !a.hasAttribute('download') && !a.pathname.match(/\.\w+$/)
}

export function setHead(r: Resolved) {
  document.title = r.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', r.description)
}

export function Router({ initial, initialUrl, children }: { initial: Resolved; initialUrl: string; children: (r: Resolved) => ReactNode }) {
  const [state, setState] = useState(() => {
    const u = new URL(initialUrl, 'http://x')
    return { path: u.pathname, search: u.search, resolved: initial }
  })

  const go = useCallback(async (to: string, push: boolean, replace = false) => {
    const u = new URL(to, location.href)
    const resolved = await resolve(u.pathname)
    if (push) history[replace ? 'replaceState' : 'pushState'](null, '', u.pathname + u.search + u.hash)
    setState({ path: u.pathname, search: u.search, resolved })
    setHead(resolved)
    if (push && !replace) {
      if (u.hash) document.getElementById(u.hash.slice(1))?.scrollIntoView()
      else window.scrollTo(0, 0)
    }
  }, [])

  const navigate = useCallback((to: string, opts?: { replace?: boolean }) => void go(to, true, opts?.replace), [go])

  useEffect(() => {
    const onPop = () => void go(location.href, false)
    // One delegated handler covers <a> tags in components and in rendered markdown.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element).closest('a')
      if (!a || !isInternal(a)) return
      if (a.pathname === location.pathname && a.hash) return
      e.preventDefault()
      navigate(a.href)
    }
    // Warm the next page's data while the pointer is on its way.
    const onHover = (e: Event) => {
      const a = (e.target as Element).closest?.('a')
      if (a && isInternal(a)) void resolve(a.pathname)
    }
    addEventListener('popstate', onPop)
    document.addEventListener('click', onClick)
    document.addEventListener('pointerover', onHover, { passive: true })
    document.addEventListener('touchstart', onHover, { passive: true })
    return () => {
      removeEventListener('popstate', onPop)
      document.removeEventListener('click', onClick)
      document.removeEventListener('pointerover', onHover)
      document.removeEventListener('touchstart', onHover)
    }
  }, [go, navigate])

  return (
    <RouterContext.Provider value={{ path: state.path, search: state.search, navigate }}>
      {children(state.resolved)}
    </RouterContext.Provider>
  )
}
