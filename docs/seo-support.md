# SEO & Outreach Support Kit

## Google Analytics 4 Snippet

1. Ganti `G-XXXXXXXXXX` dengan Measurement ID GA4 anda.
2. Letakkan blok ini sebelum penutup `</head>` pada setiap halaman yang mahu dipantau.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true,
    'allow_ad_personalization_signals': false
  });

  gtag('event', 'page_view', {
    'page_location': window.location.href,
    'page_title': document.title
  });
</script>
```

### Event Tambahan (Opsyenal)

Masukkan selepas blok `gtag('config', ...)` untuk track interaksi CTA.

```html
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var ctaButtons = document.querySelectorAll('[data-track="cta"]');
    ctaButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        gtag('event', 'cta_click', {
          'event_category': 'engagement',
          'event_label': button.getAttribute('href') || 'cta'
        });
      });
    });
  });
</script>
```

Tambah `data-track="cta"` pada butang yang ingin dipantau, contoh:

```html
<a class="custom-btn btn btn-lg" data-track="cta" href="https://wa.me/...">WhatsApp Sekarang</a>
```

## Template Emel Outreach Backlink

Subjek: `Cadangan Kolaborasi Konten: Homestay Rumah Tenang`

```
Hi {{Nama Kontak}},

Saya {{Nama Anda}} dari WebDevMY. Kami baru sahaja siapkan landing page baharu untuk klien homestay bernama Rumah Tenang yang fokus tarik pelancong antarabangsa.

Kenapa saya hubungi:
- Konten anda tentang {{Topik Artikel Mereka}} sangat align dengan pengalaman budaya di Rumah Tenang.
- Kami ada data & visual yang boleh tambah nilai pada artikel anda (galeri immersive, result conversion, dsb).
- Kami sedia beri kredit penuh + backlink balas melalui projek kami yang relevan.

Cadangan idea sinergi:
1. Tambah seksyen “Contoh Homestay Storytelling” dalam artikel anda dan link ke case study kami.
2. Kolaborasi guest post bertajuk “5 Tips Naikkan Conversion Homestay dengan Storytelling”.
3. Feature Rumah Tenang dalam roundup “Homestay Unik Sekitar Malaysia”.

Jika berminat, saya boleh share deck ringkas (1-pager) dan asset gambar high-res.

Terima kasih! Saya tunggu respon anda.

Salam hormat,
{{Nama Anda}}
WebDevMY
hello@webdevmy.com | +60 13-879 9702
```
