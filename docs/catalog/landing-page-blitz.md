# Landing Page Blitz

## Sasaran & Objektif
- **Klien utama:** SME, F&B, SaaS pre-launch, kempen promo masa terhad.
- **Outcome:** Landing page 1-pager yang siap dalam ≤14 hari dengan fokus conversion (lead/WhatsApp/order).

## Struktur Maklumat
1. Hero – headline urgency + CTA utama (WhatsApp/borang).
2. Countdown/Offer Highlight – timer atau stok berbaki.
3. Social Proof – testimoni ringkas + badge.
4. Feature Blocks – 3-4 poin manfaat + ikon.
5. Bonus/Bundle – upsell atau hadiah terhad.
6. FAQ Ringkas – jawab keraguan kritikal.
7. CTA Finale – CTA sekunder + info support.

## Senibina Frontend
- HTML5 modular dengan partial reusable (hero, FAQ, testimonial).
- CSS: guna `css/templatemo-first-portfolio-style.css` + kelas utility Bootstrap untuk grid.
- Animasi ringan (fade/slide) via CSS, toggle oleh `IntersectionObserver` (fallback ke jQuery animate ringan).
- Responsive breakpoints: 480, 575, 768, 991, 1200 px.

## Fungsional
- Countdown reusable (JS) dengan fallback statik.
- Sticky CTA button pada mobile.
- Deep link `wa.me` auto isi mesej.
- Optional form (Netlify forms atau Formspree) dengan honeypot anti-spam.

## Integrasi
- Google Analytics 4 (event `cta_click`, `countdown_end` optional).
- Facebook Pixel/Meta CAPI (script optional block).
- Email marketing (Mailchimp, ConvertKit) via embed form.

## Sumber Kandungan
- Copywriting urgency, testimoni, gambar produk/homestay.
- Warna CTA ikut brand (sediakan var CSS baharu jika perlu).
- Icon pack (Bootstrap Icons) set minimum.

## Workflow Pembangunan
1. **Day 1-2:** Wireframe + copy skeleton (Figma atau handoff PDF).
2. **Day 3-5:** HTML/CSS implement hero, offer, feature sections.
3. **Day 6-7:** Integrasi countdown + analytics, mobile tuning.
4. **Day 8-9:** QA (responsive + performance) + isi konten final.
5. **Day 10-12:** Deploy ke Netlify/GitHub Pages, UAT.
6. **Day 13-14:** Amends + serah laporan.

## QA Checklist
- Lighthouse score ≥90 (Performance & Accessibility).
- Countdown sync timezone klien.
- CTA track event di GA4 realtime.
- Form/WhatsApp tested (desktop + mobile).
- Schema `Product` / `Offer` optional untuk structured data.

## Dokumen Serahan
- Landing page HTML + aset.
- Fail konfigurasi analytics/pixel.
- Manual penggunaan (update teks, tukar timer).
