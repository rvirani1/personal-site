import { useEffect, type ReactNode } from 'react'
import { useRouter } from '../router'
import site from '../../../../content/site.json'

const NAV = [
  { href: '/brain-log', label: 'Brain log' },
  { href: '/books', label: 'Books' },
  { href: '/talks', label: 'Talks' },
  { href: '/projects', label: 'Projects' },
  { href: '/now', label: 'Now' },
]

export function Layout({ children }: { children: ReactNode }) {
  const { path, navigate } = useRouter()

  // "/" or ⌘K jumps to search from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement).closest('input, textarea, [contenteditable]')
      if ((e.key === '/' && !typing) || (e.key === 'k' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault()
        if (path !== '/search') navigate('/search')
        else document.querySelector<HTMLInputElement>('#search-input')?.focus()
      }
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [path, navigate])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-row">
          <a href="/" className="wordmark" aria-label="Home">
            <span className="wordmark-dot" aria-hidden="true" />
            {site.domain}
          </a>
          <nav aria-label="Main">
            <ul className="nav">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} aria-current={path === n.href || path.startsWith(n.href + '/') ? 'page' : undefined}>
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/search" className="nav-search" aria-label="Search" aria-current={path === '/search' ? 'page' : undefined}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" className="wrap">
        {children}
      </main>
      <footer className="site-footer wrap">
        <p>
          {site.links.map((l, i) => (
            <span key={l.label}>
              {i > 0 && <span aria-hidden="true"> · </span>}
              <a href={l.url} target={l.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{l.label}</a>
            </span>
          ))}
          <span aria-hidden="true"> · </span>
          <a href="/feed.xml">RSS</a>
        </p>
        <p className="muted">Made with care in {site.location}. Press <kbd>/</kbd> to search.</p>
      </footer>
    </>
  )
}
