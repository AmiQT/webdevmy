# Booking & Appointment Platform

## Sasaran & Objektif
- **Klien utama:** Homestay, spa, klinik, pusat tuisyen, servis konsultasi.
- **Outcome:** Portal tempahan dengan kalendar live, pembayaran deposit, notifikasi automatik.

## Senibina Keseluruhan
- **Frontend:** HTML/Bootstrap + komponen kalendar (Flatpickr/FullCalendar).
- **Backend Pilihan:**
  - Airtable/Notion + Zapier/Make (untuk MVP cepat), atau
  - Supabase/Firebase untuk custom DB, atau
  - WordPress + plugin Booking (Booknetic, Amelia) jika mahu CMS.
- **Integrasi Pembayaran:** Billplz, Payex, Stripe (untuk deposit penuh atau separa).
- **Notifikasi:** Email & WhatsApp (Twilio/Waapi) automation.

## Aliran Pengguna
1. Pelawat pilih perkhidmatan/pakej.
2. Semak slot kalendar live (sync dengan Google Calendar).
3. Isi butiran pelanggan + pilih add-on.
4. Buat pembayaran/deposit → redirect ke halaman kejayaan.
5. Terima email/SMS pengesahan + reminder automatik.
6. Admin lihat tempahan pada dashboard (kalendar + senarai).

## Komponen Frontend
- Hero dengan CTA “Semak Slot”.
- Pricing card untuk pakej.
- Kalendar availability (read-only) + butang “Tempah Sekarang”.
- Borang multi-step (maklumat pelanggan → add-on → payment).
- FAQ & testimoni untuk yakin-kan pelanggan.

## Database & Data Flow (contoh Supabase)
- Table `services` – id, nama, durasi, harga, deposit.
- Table `bookings` – id, service_id, customer info, tarikh/masa, status, payment_ref.
- Table `addons` – optional add-on, harga, service relation.
- Table `notifications` – log emel/WhatsApp.

## Integrasi Kalender
- Gunakan Google Calendar API (OAuth service account).
- Setiap tempahan berjaya → create event (block slot).
- Jika dibatalkan → delete event + trigger refund (jika perlu).

## Analytics & Tracking
- GA4 events: `view_schedule`, `start_booking`, `complete_booking`, `add_on_selected`.
- Customer feedback form post-visit (Net Promoter Score).

## Workflow Pembangunan
1. **Requirements Gathering:** tentukan jenis servis, durasi, deposit rules, polisi pembatalan.
2. **Wireframe + UX Flow:** mapping step booking, fallback manual.
3. **Setup Backend:** pilih platform, setup database & API endpoints.
4. **Frontend Build:** hero, pricing, kalendar embed, borang multi-step.
5. **Integrasi Payment & Calendar:** implement webhook (success/cancel).
6. **Automation Notification:** email template, WhatsApp template, reminder 24h/2h.
7. **QA:** test slot overlap, timezone, pembayaran sandbox, mobile UX.
8. **Launch:** Deploy + training admin (cara manage bookings, edit slot).

## Dokumen Serahan
- Manual admin (tambah slot, ubah harga, batalkan tempahan).
- SOP handling refund dan no-show.
- Template email/WhatsApp (confirmation, reminder, feedback).
