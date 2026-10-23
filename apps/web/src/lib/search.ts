export type SearchDoc = { url: string; type: string; title: string; subtitle: string; text: string }
export type SearchHit = SearchDoc & { score: number; snippet: string }

export const normalize = (s: string) =>
  s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, '')

export const tokenize = (q: string) => normalize(q).split(/[^\p{L}\p{N}]+/u).filter((t) => t.length > 1)

function count(haystack: string, needle: string, max: number) {
  let n = 0
  for (let i = haystack.indexOf(needle); i !== -1 && n < max; i = haystack.indexOf(needle, i + needle.length)) n++
  return n
}

function snippet(text: string, tokens: string[], size = 160) {
  if (!text) return ''
  const lower = normalize(text)
  const at = Math.min(...tokens.map((t) => lower.indexOf(t)).filter((i) => i >= 0))
  if (!Number.isFinite(at)) return text.slice(0, size) + (text.length > size ? '…' : '')
  const start = Math.max(0, at - 50)
  const end = Math.min(text.length, start + size)
  return (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '')
}

// Every query word must appear somewhere. Titles count most, then subtitles, then body text.
export function search(docs: SearchDoc[], query: string, limit = 30): SearchHit[] {
  const tokens = tokenize(query)
  if (tokens.length === 0) return []
  const hits: SearchHit[] = []
  for (const d of docs) {
    const title = normalize(d.title)
    const sub = normalize(d.subtitle)
    const text = normalize(d.text)
    let score = 0
    let all = true
    for (const t of tokens) {
      const inTitle = title.includes(t)
      const inSub = sub.includes(t)
      const inText = count(text, t, 8)
      if (!inTitle && !inSub && !inText) {
        all = false
        break
      }
      score += (inTitle ? 10 : 0) + (new RegExp(`(^|\\W)${t}`).test(title) ? 5 : 0) + (inSub ? 4 : 0) + inText
    }
    if (!all) continue
    if (title === normalize(query)) score += 20
    hits.push({ ...d, score, snippet: snippet(d.text, tokens) })
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit)
}
