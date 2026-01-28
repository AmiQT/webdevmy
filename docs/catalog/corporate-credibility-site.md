# Corporate Credibility Site

## Sasaran & Objektif
- **Klien utama:** Syarikat B2B, agensi kerajaan, firma profesional.
- **Outcome:** Website korporat multi-page yang tonjolkan kredibiliti, struktur informasi mantap, integrasi dokumentasi/borang.

## Struktur Navigasi
1. Home – hero nilai tambah, statistik syarikat, highlight servis.
2. About – sejarah, kepimpinan, timeline, CSR.
3. Services – breakdown servis + CTA konsultasi.
4. Case Studies – grid ringkas linking ke projek detail.
5. Insights/News – artikel syarikat & press release.
6. Careers – job listing, link ke borang permohonan.
7. Contact – peta, info HQ, borang pertanyaan, hotline.

## Senibina Frontend
- Gunakan sistem design modular: komponen hero, card, accordion, timeline, tab.
- Guna `src/components/` untuk partial (header, footer, testimonial).
- CSS: extend `templatemo-first-portfolio-style.css` dengan utiliti `--corporate-primary`, `--corporate-accent`.
- Animasi halus (fade-in, number counter) guna IntersectionObserver + CSS.

## Integrasi Backend
- CMS: Statik (Netlify CMS) atau Headless (Contentful/Sanity) untuk update konten tanpa dev.
- Borang: Netlify forms atau integrasi CRM (HubSpot, Zoho) pakai webhook.
- Dokumen muat turun (PDF, brosur) host dalam `/downloads/` atau S3 bucket.

## SEO & Compliance
- Struktur heading logik (H1 per page).
- Schema `Organization`, `BreadcrumbList`, `JobPosting` (untuk careers).
- WCAG AA: kontras warna, fokus state, ARIA label.
- Multi-language opsyenal (BM/EN) – guna folder `en/` mirrored.

## Analytics
- GA4 events: `lead_form_submit`, `download_brochure`, `career_apply`.
- LinkedIn Insight Tag + Meta Pixel (B2B retargetting).

## Workflow Pembangunan
1. **Information Architecture Workshop** – susun navigasi, CTA, stakeholder flow.
2. **Design System** – definisi typography, components, grid (Figma).
3. **Build Template** – layout base (header/footer), page variants, CMS binding.
4. **Content Entry** – populate page, optimise gambar (WebP).
5. **Testing** – cross-browser, performance, accessibility, security headers.
6. **Deployment** – Netlify/Cloudflare Pages dengan custom domain.
7. **Training** – manual penggunaan CMS + SOP update berita.

## Dokumen Serahan
- Guide struktur folder & cara tambah halaman baru.
- Template press release & case study (Markdown).
- Checklist post-launch (backup, review suku tahunan).
