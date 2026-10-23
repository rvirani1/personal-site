// Renders every route to static HTML so pages paint before any JS runs.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const SITE_URL = 'https://dreamsn.codes'

const { render, allPaths } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)
let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

// Inline the stylesheet: one less render-blocking request on first visit.
template = template.replace(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/, (_, href) => {
  const css = fs.readFileSync(path.join(dist, href), 'utf8')
  return `<style>${css}</style>`
})

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

async function page(url) {
  const r = await render(url)
  const canonical = SITE_URL + (url === '/' ? '' : url)
  const head = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="${SITE_URL}/riaz.webp" />`,
    `<meta name="twitter:card" content="summary" />`,
  ].join('\n    ')
  return {
    status: r.status,
    html: template
      .replace('<!--title-->', esc(r.title))
      .replace('<!--description-->', esc(r.description))
      .replace('<!--head-->', head)
      .replace('<!--app-->', r.html),
  }
}

const paths = allPaths()
for (const url of paths) {
  const { html } = await page(url)
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
}
fs.writeFileSync(path.join(dist, '404.html'), (await page('/404')).html)

fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    paths.map((p) => `<url><loc>${SITE_URL}${p === '/' ? '' : p}</loc></url>`).join('') +
    `</urlset>`,
)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered ${paths.length} pages.`)
