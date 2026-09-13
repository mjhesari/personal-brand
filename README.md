# MJ Hesari — Personal Brand

<div align="center">

**Personal portfolio built with Next.js 14, NextUI & TypeScript**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NextUI](https://img.shields.io/badge/NextUI-2-000000?logo=react&logoColor=white)](https://nextui.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

### 🌐 Live Demo

**[Open on Vercel](https://YOUR-PROJECT.vercel.app)**

> Replace `https://YOUR-PROJECT.vercel.app` with your real Vercel deployment URL.

[English](https://YOUR-PROJECT.vercel.app/en) · [فارسی](https://YOUR-PROJECT.vercel.app/fa)

</div>

---

## Overview

A bilingual personal brand site for **MJ Hesari** — Full Stack & Next.js developer.

| Feature | Description |
| --- | --- |
| 🌓 Theme | Light / dark mode with `next-themes` |
| 🌍 i18n | English & Persian (`/en`, `/fa`) with RTL |
| 📱 Responsive | Desktop navbar + minimal mobile menu |
| ✉️ Contact | Form + direct channels (email, Telegram, socials) |
| 🔍 SEO | Metadata, Open Graph, Twitter cards, hreflang |

---

## Where the static data comes from

This project **does not fetch profile content from an API at runtime**.

All person/content data is **static** and lives in the repo:

```text
utils/data/index.ts     ← main profile source (PERSONS["mj-hesari"])
utils/data/mj-hesari.ts ← helper / related data module
app/[lang]/dictionaries/
  en.json               ← English UI strings + meta
  fa.json               ← Persian UI strings + meta (RTL)
config/site-meta.ts     ← site URL, locale map, brand name
config/site.ts          ← nav config (legacy / shared)
types/person.ts         ← TypeScript shapes for person data
```

### What each source owns

| Source | Used for |
| --- | --- |
| `utils/data/index.ts` | Name, job title, about, email, experiences, projects, social links, images |
| `dictionaries/*.json` | UI copy (nav, buttons, contact labels, SEO title/description) |
| `config/site-meta.ts` | Canonical base URL for metadata (`NEXT_PUBLIC_SITE_URL` or default) |

### How pages read it

```tsx
// app/[lang]/page.tsx
const dicts = await getDictionary(lang);
const personalData = PERSONS["mj-hesari"];
```

To update the portfolio content, edit **`utils/data/index.ts`**.  
To change button/label text, edit **`en.json` / `fa.json`**.

> Contact details currently mirror the public info from [mj-hesari.ir](https://mj-hesari.ir) (email, Telegram, LinkedIn, GitHub, Instagram).

---

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **UI:** NextUI v2 + Tailwind CSS
- **Motion:** Framer Motion
- **Theme:** next-themes
- **Icons:** Iconify
- **Language:** TypeScript

---

## Getting started

```bash
# install
npm install

# develop
npm run dev

# production build
npm run build
npm start
```

App runs at `http://localhost:3000` (or the next free port).

### Environment (optional)

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://YOUR-PROJECT.vercel.app
```

This value is used for SEO canonical / Open Graph base URL (`config/site-meta.ts`).

---

## Project structure

```text
app/
  layout.tsx              # root layout + base metadata
  [lang]/
    layout.tsx            # navbar, footer, lang direction
    page.tsx              # homepage sections + generateMetadata
    dictionaries/         # en / fa static UI dictionaries
components/
  about/                  # Hero, About, Experiences, Projects, Contact
  navbar.tsx
  theme-switch.tsx
  lang-switch.tsx
utils/data/               # ★ static person data
config/                   # fonts, site meta
types/                    # shared types
```

---

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/).
3. Set `NEXT_PUBLIC_SITE_URL` to your deployment URL.
4. Deploy.

Then put your live URL here and at the top of this README:

```text
https://YOUR-PROJECT.vercel.app
```

---

## License

MIT — see [LICENSE](./LICENSE).

<div align="center">

Built by **MJ Hesari** · [GitHub](https://github.com/mjhesari) · [LinkedIn](https://www.linkedin.com/in/mj-hesari)

</div>
