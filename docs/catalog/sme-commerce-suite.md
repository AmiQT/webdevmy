# SME Commerce Suite

## Sasaran & Objektif
- **Klien utama:** Peruncit SME, DTC brands, mini marketplace.
- **Outcome:** E-dagang ringan dengan katalog produk ≤100 SKU, pembayaran tempatan, automasi asas.

## Senibina Sistem
- **Frontend:** Bootstrap + modul komponen (header, grid produk, cart mini).
- **Backend Pilihan:**
  - Shopify Basic (preferred untuk speed) ATAU
  - WooCommerce (WordPress) untuk hosting sendiri.
- **Integrasi pembayaran:** iPay88, Billplz, Stripe (pilih ikut klien).
- **Penghantaran:** EasyParcel API atau table rate manual.

## Struktur Halaman
1. Home (hero, koleksi pilihan, testimoni).
2. Shop (grid produk, filter kategori).
3. Product detail (gallery, variant selector, rating).
4. Checkout (multi-step secure).
5. Blog/Insights (opsyenal untuk SEO).
6. About & Contact dengan peta/borang.

## Modul Utama
- **Pengurusan Produk:** CRUD dengan kategori/tag.
- **Inventori:** stok automatik, notifikasi threshold.
- **Cart & Checkout:** cart sticky (desktop/mobile), kupon diskaun.
- **Customer Account:** history order, alamat tersimpan.
- **Automation:** emel pengesahan, abandoned cart (jika Shopify/plug-in).

## Rekaan UI
- Gunakan palette brand (definisi dalam `:root` CSS).
- Component pattern: card produk, badge stok, review snippet.
- Mobile-first; gunakan slider untuk koleksi di mobile.

## Analytics & Tracking
- GA4 + ecommerce events (view_item, add_to_cart, purchase).
- Meta Pixel + server-side (via Shopify/Woo plugin).
- Heatmap optional (Hotjar, Microsoft Clarity).

## Workflow Pembangunan
1. **Discovery:** tentukan platform (Shopify/Woo), mapping SKU & proses fulfillment.
2. **Setup Platform:** install theme boilerplate, configure domain, payment, shipping.
3. **Design Customisation:** style hero, koleksi, menu mega (jika perlu).
4. **Integrasi Plugin:** payment, shipping, analytics, automation.
5. **Migrasi Data:** import produk (CSV), gambar optimize (WebP).
6. **QA:** test checkout (sandbox), mobile responsiveness, kecepatan <3s.
7. **Launch:** sambung domain, activate SSL, training.

## Dokumen & Handover
- SOP tambah produk, update banner, guna kupon.
- Template email transaksional.
- Senarai plug-in & kos bulanan.
- Checklist maintenance (backup, updates).
