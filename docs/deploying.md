# Deploying

The front end goes on **Vercel**. The Python API goes on **Google Cloud Run** later, once it does real work.

## Front end on Vercel (one-time setup)

1. In Vercel: **Add New → Project** and import `rvirani1/personal-site`.
   - Leave the root directory as the repo root. `vercel.json` already sets the build command (`pnpm build`) and output folder (`apps/web/dist`).
   - Framework preset: **Other**. Node version: **22**.
2. Deploy. Every PR now gets a preview URL, and `main` deploys to production.
3. **Settings → Domains**: add `dreamsn.codes`, `www.dreamsn.codes`, `dreamsncodes.com` and `www.dreamsncodes.com`.
   Make `dreamsn.codes` the primary domain and set the other three to **redirect (308)** to it.
4. At your domain registrar, add the DNS records Vercel shows for each domain. They're usually:
   - Apex (`@`): `A` record to `76.76.21.21`
   - `www`: `CNAME` to `cname.vercel-dns.com`

   **Don't change the MX or TXT records.** Email for `riaz@dreamsn.codes` depends on them.
5. Wait for Vercel to show the domains as valid. HTTPS certificates are issued automatically.

## API on Cloud Run (when it's needed)

One-time setup:

```sh
gcloud auth login
gcloud config set project <your-project-id>
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
gcloud artifacts repositories create web --repository-format=docker --location=us-east1
```

Deploy (from the repo root, so the `content/` folder is included in the image):

```sh
IMAGE=us-east1-docker.pkg.dev/<your-project-id>/web/api
gcloud builds submit --config=- . <<YAML
steps:
  - name: gcr.io/cloud-builders/docker
    args: [build, -f, apps/api/Dockerfile, -t, $IMAGE, .]
images: [$IMAGE]
YAML
gcloud run deploy api --image $IMAGE --region us-east1 --allow-unauthenticated
```

Cloud Run scales to zero, so an idle API costs about nothing. To serve it at `api.dreamsn.codes`, add a domain mapping in Cloud Run and create the `CNAME` it gives you.
Then point the front end at it with an environment variable when the site starts calling the API.
