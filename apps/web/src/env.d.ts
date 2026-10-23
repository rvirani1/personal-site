declare module 'virtual:content' {
  export const brainLog: {
    slug: string
    title: string
    date: string
    tags: string[]
    summary: string
    minutes: number
    archive: boolean
  }[]
  export const bookNotes: string[]
}

declare module '*.md' {
  const doc: { meta: Record<string, any>; html: string }
  export default doc
}
