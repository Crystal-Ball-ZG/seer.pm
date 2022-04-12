---
title: 'How to contribute on Zeitgeist Seer website?'
date: 2021-12-31
lastmod: 2021-12-31
tags:
  - 'Contribute'
  - 'Development'
  - 'Seer website'
cover: '/contribute/cover.webp'
---

This article contains some basic operations to help you quickly get started with Zeitgeist Seer website development. We are using Urara-template that combines latest web technologies like Vite, Svelte and WindiCSS enabling rapid development.


## Prerequisites

This template recommends using [pnpm](https://pnpm.io) and [@antfu/ni](https://github.com/antfu/ni).


### Install pnpm and ni using npm
```
npm install -g pnpm
npm i -g @antfu/ni
```

### Clone repo and install
```
git clone git@github.com:Crystal-Ball-ZG/seer.git 
cd seer
ni
```

## Development

Start a development server

```bash
# http://localhost:3000
nr dev
```

or listen to different IP and port:

```bash
# http://0.0.0.0:3000
nr dev --host 0.0.0.0

# http://0.0.0.0:8080
nr dev --host 0.0.0.0 --port 8080
```

## Build

```bash
nr build
```

or use the specified adapter:

```bash
# Vercel
VERCEL=true nr build

# Cloudflare Pages
CF_PAGES=true nr build

# Netlify
NETLIFY=true nr build
```

> This template uses `@sveltejs/adapter-auto@next` and `@sveltejs/adapter-static@next` by default.

> when the environment supported by adapter-auto is not detected, it will automatically fallback to adapter-static.

> u can modify it to any adapter supported by SvelteKit. see [SvelteKit Docs](https://kit.svelte.dev/docs#adapters)

> u can preview the built app with `nr preview`, regardless of
> whether u installed an adapter. This should _not_ be used to serve
> ur app in production.

## Misc

```bash
nr clean # clean the files under /src/routes/**/ and /static/
nr check # code check
nr format # code prittier
nr lint # code lint
```
