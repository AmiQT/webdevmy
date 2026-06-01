# WebDevMY

Landing page for AI solutions and custom software services targeting Malaysian businesses.

## Tech Stack

- Astro v4
- React 18
- Tailwind CSS v3
- TypeScript
- Netlify (deployment)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at port 4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
  components/    # Astro page sections
  data/          # Content (services, testimonials, portfolio, FAQs)
  layouts/       # Base layout with SEO meta tags
  pages/         # Routes
  styles/        # Global CSS, dark theme variables
  types/         # TypeScript interfaces
public/
  images/        # Static assets
    projects/    # Portfolio project screenshots (add .webp files here)
```

## Customization

Edit files in `src/data/` to update content without touching components.

| File | What it controls |
|------|-----------------|
| `src/data/site.ts` | Site name, phone, URL |
| `src/data/portfolio.ts` | Portfolio projects |
| `src/data/testimonials.ts` | Client testimonials |
| `src/data/faqs.ts` | FAQ section |

## Adding Portfolio Screenshots

Portfolio cards will show a gradient placeholder until you add images. Add `.webp` files to `public/images/projects/` matching the `image` field in `src/data/portfolio.ts`.

## Deployment

Configured for Netlify. Build command is `npm run build`, publish directory is `dist`.

## Contact

GitHub: [AmiQT](https://github.com/AmiQT)
