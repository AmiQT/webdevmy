# WebDevMY

Landing page for web development services targeting Malaysian SMEs.

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
  layouts/       # Base layout
  pages/         # Routes
  styles/        # Global CSS and variables
  types/         # TypeScript interfaces
public/
  images/        # Static assets
```

## Customization

Edit files in `src/data/` to update content without touching components.

Site-wide config (name, phone, email, URL) is in `src/data/site.ts`.

## Deployment

Configured for Netlify. Build command is `npm run build`, publish directory is `dist`.

## Contact

WhatsApp: +60 13-879-9702  
Email: hello@webdevmy.com
