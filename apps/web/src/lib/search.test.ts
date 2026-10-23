import { describe, expect, it } from 'vitest'
import { search, tokenize, type SearchDoc } from './search'

const docs: SearchDoc[] = [
  { url: '/books/meditations', type: 'Book notes', title: 'Meditations', subtitle: 'Marcus Aurelius', text: 'You have power over your mind, not outside events.' },
  { url: '/books', type: 'Book', title: 'The Martian', subtitle: 'Andy Weir', text: '' },
  { url: '/brain-log/x', type: 'Brain log', title: 'On stoic mornings', subtitle: '2026-01-01', text: 'Reading Meditations again with coffee.' },
]

describe('search', () => {
  it('ranks title matches above body matches', () => {
    const hits = search(docs, 'meditations')
    expect(hits.map((h) => h.url)).toEqual(['/books/meditations', '/brain-log/x'])
  })

  it('requires every word to match', () => {
    expect(search(docs, 'andy weir')).toHaveLength(1)
    expect(search(docs, 'andy stoic')).toHaveLength(0)
  })

  it('ignores case, accents and apostrophes', () => {
    expect(tokenize('Thíngs I’ve READ')).toEqual(['things', 'ive', 'read'])
    expect(search(docs, 'MARCUS')).toHaveLength(1)
  })

  it('builds a snippet around the first match', () => {
    expect(search(docs, 'coffee')[0].snippet).toContain('coffee')
  })
})
