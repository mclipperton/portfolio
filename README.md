# Mark Clipperton Portfolio

A product designer portfolio site for Mark Clipperton.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
pnpm install
pnpm run dev
pnpm run build
```

The production build is configured for static export so it can be deployed on
GitHub Pages.

## GitHub Pages Setup

1. Create a public GitHub repository for this site.
2. Push the code to the `main` branch.
3. In GitHub, open **Settings > Pages** and set the source to **GitHub Actions**.
4. Wait for the workflow named **Deploy to GitHub Pages** to finish.
5. Use the published URL shown in the workflow or the Pages settings page.

If you are creating a user site such as `yourname.github.io`, keep the workflow
as-is. If you are creating a project site, the workflow already adds the repo
name as the base path automatically.

## Included Shape

- edit site code under `app/`
- `next.config.ts` is configured for static export
- `.github/workflows/github-pages.yml` deploys the site with GitHub Actions
- `public/` contains the favicon and social card used by the homepage

## Optional Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `pnpm run dev`: start local development
- `pnpm run build`: verify the static export build output
- `pnpm test`: build the site and run the rendered HTML test
- `pnpm run db:generate`: generate Drizzle migrations after schema changes
