const fmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
const short = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })

export const formatDate = (iso: string) => fmt.format(new Date(iso))
export const formatShort = (iso: string) => short.format(new Date(iso))
export const year = (iso: string) => iso.slice(0, 4)

export function groupBy<T>(items: T[], key: (t: T) => string): [string, T[]][] {
  const m = new Map<string, T[]>()
  for (const i of items) {
    const k = key(i)
    if (!m.has(k)) m.set(k, [])
    m.get(k)!.push(i)
  }
  return [...m]
}
