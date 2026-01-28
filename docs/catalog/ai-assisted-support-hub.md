# AI-Assisted Support Hub

## Sasaran & Objektif
- **Klien utama:** SME dengan volume pertanyaan tinggi, syarikat servis, e-dagang.
- **Outcome:** Pusat sokongan self-service dengan chatbot AI, knowledge base, dan integrasi tiket.

## Komponen Utama
1. **Landing/Home:** Jelaskan cara pengguna dapat bantuan (chat, FAQ, tiket).
2. **Knowledge Base:** artikel kategori (FAQ, panduan, troubleshooting).
3. **Chatbot AI:** custom prompt guna OpenAI/Gemini; fallback ke agen manusia.
4. **Ticket Form:** untuk isu kompleks → terus ke CRM/Helpdesk.
5. **Status Page (opsyenal):** paparkan status sistem/perkhidmatan.

## Senibina
- **Frontend:** HTML modular (header, kategori, artikel card, chatbot widget). Styling ikut brand guideline.
- **Backend:** 
  - Headless CMS (Contentful/Sanity) untuk knowledge base artikel.
  - Chatbot: API OpenAI GPT-4o/Gemini via serverless (Netlify Functions) untuk jaga API key.
  - Ticket: Integrasi Zendesk/Freshdesk atau Google Sheets via webhook untuk MVP.
- **Search:** Algolia/Typesense untuk carian dalam knowledge base.

## Chatbot Flow
1. User tanya soalan → request ke serverless endpoint.
2. Endpoint buat retrieval (Vector DB) dengan artikel relevan.
3. AI generate jawapan + rujuk artikel (link).
4. Jika user taip “agent” → escalate ke form tiket atau WhatsApp support.

## Data & Integrasi
- **Vector DB:** Pinecone/Supabase Vector untuk simpan embedding artikel.
- **Analytics:** GA4 events (`chat_open`, `kb_search`, `article_view`, `ticket_submit`).
- **Feedback Loop:** rating jawapan (thumbs up/down) → log ke DB untuk training semula.
- **Security:** Rate limit, mask data sensitif, log hanya conversation summary.

## Workflow Pembangunan
1. **Discovery:** kumpul FAQ/topik, tentukan nada suara chatbot, SOP escalation.
2. **Content Ops:** susun knowledge base (kategori, slug), sediakan metadata (keywords, summary, related articles).
3. **Frontend Build:** layout knowledge base + chatbot widget (floating button).
4. **Backend Setup:** CMS struktur, serverless function untuk AI, vector DB syncing.
5. **Testing:** scenario Q&A, fallback agent, search relevancy, latency target <2s.
6. **Training Staff:** cara tambah artikel, review chat logs, escalate tiket.

## Maintenance & Scale
- Jadual retraining (contoh: 2 minggu sekali update embedding).
- Monitoring penggunaan API & kos.
- SLA support (waktu live chat manusia).

## Dokumen Serahan
- Peta aliran chatbot (diagram).
- Manual update artikel knowledge base.
- Checklist privacy (PII handling, retention).
- Template jawapan canned untuk agent manusia.
