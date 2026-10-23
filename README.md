# dreamsn.codes

Riaz Virani's personal site: a home for the brain log, book notes, talks, projects, and whatever gets built next.

```
content/      Everything you read on the site, as Markdown and JSON. Edit here.
apps/web/     React front end (Vite). Every page is prerendered to static HTML.
apps/api/     Python back end (FastAPI). A shell today; search and AI experiments later.
```

## Run it

```sh
pnpm install
pnpm dev          # front end at http://localhost:5173
pnpm build        # static site in apps/web/dist
pnpm test         # front-end unit tests

pnpm api          # back end at http://localhost:8000 (needs uv: https://docs.astral.sh/uv/)
cd apps/api && uv run pytest
```

## Writing

- **Brain log:** add `content/brain-log/YYYY-MM-DD-slug.md`. See [the format](content/brain-log/README.md).
- **Books:** add the book to `content/books.json`. For notes, give it a `slug` and add `content/books/<slug>.md`, with an optional cover in `apps/web/public/covers/<slug>.webp`.
- **Now, intro and links:** `content/site.json`.
- **Talks, podcasts, projects:** the matching JSON file in `content/`.

Search, the RSS feed (`/feed.xml`) and the sitemap are generated from `content/` on every build.

## How the front end works

No framework beyond React. On purpose: fewer moving parts for people and AIs to keep up with.

- `content-plugin.ts` turns Markdown into HTML at build time, so no Markdown parser ships to the browser.
- `src/router.tsx` is a ~90-line router on the History API. Links are plain `<a>` tags.
- `scripts/prerender.mjs` renders every route to HTML and inlines the CSS, so pages paint before any JavaScript runs. React then hydrates for instant client-side navigation and search.
- System fonts only, so no font downloads.

## Deploying

The front end is a folder of static files (`apps/web/dist`), so it can go anywhere. `vercel.json` is set up for Vercel.
The API ships as a container (`apps/api/Dockerfile`, built from the repo root), ready for Google Cloud Run or similar.
