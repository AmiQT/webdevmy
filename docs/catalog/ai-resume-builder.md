# AI Resume Builder

## Sasaran & Objektif
- **Klien utama:** Job seekers, fresh graduates, professionals yang nak optimize resume untuk ATS.
- **Outcome:** Platform SaaS untuk generate dan optimize resume menggunakan AI berdasarkan job description.

## Komponen Utama
1. **Landing Page:** Showcase features, pricing plans, dan demo.
2. **Resume Builder:** Form input untuk personal info, work experience, education, skills.
3. **AI Optimization:** GPT-4 analyze job description dan optimize resume content.
4. **Template Gallery:** Professional, Modern, dan Creative templates.
5. **Export Options:** Download sebagai PDF (ATS-friendly) atau Word (.docx).
6. **Dashboard:** Manage saved resumes dan track usage quota.
7. **Authentication:** Login dengan email/password atau Google OAuth.

## Senibina
- **Frontend:** 
  - React 18 + TypeScript
  - Material-UI (MUI) untuk components
  - Vite untuk build tool
  - React Router untuk navigation
  - jsPDF & docx library untuk export
  - **Deployed on:** Vercel
  
- **Backend:** 
  - Python 3.8+ dengan FastAPI
  - OpenAI API (via OpenRouter) untuk AI optimization
  - Pydantic untuk data validation
  - **Deployed on:** Railway
  
- **Database & Auth:**
  - Supabase (PostgreSQL + Authentication)
  - Row Level Security (RLS) untuk data protection
  - Real-time subscriptions untuk usage tracking

## AI Optimization Flow
1. **Job Analysis:** AI extract keywords, skills, dan requirements dari job description.
2. **Content Optimization:** AI rewrite work experience dengan action verbs dan quantifiable achievements.
3. **Skills Matching:** AI prioritize relevant skills dan suggest improvements.
4. **Professional Summary:** AI generate compelling summary yang match job requirements.
5. **ATS Optimization:** Format content untuk pass Applicant Tracking Systems.

## Features Utama
- 🤖 **AI-Powered Optimization** - GPT-4 analyze dan optimize resume content
- 📄 **Multiple Templates** - Professional, Modern, Creative designs
- 📥 **Export Options** - PDF (ATS-friendly) dan Word (.docx)
- 🔐 **User Authentication** - Email/password atau Google OAuth
- 💰 **SaaS Model** - Free, Pro ($9/month), Premium ($19/month) plans
- 📊 **Dashboard** - Manage saved resumes dan track usage
- 🎯 **ATS Optimization** - Ensure resume pass ATS scanners

## Pricing Plans
### Free Plan
- 3 AI generations (lifetime)
- 1 saved resume
- Basic template
- PDF export

### Pro Plan ($9/month)
- 20 AI generations/month
- 5 saved resumes
- All templates
- PDF & Word export
- AI Cover Letter

### Premium Plan ($19/month)
- Unlimited generations
- Unlimited resumes
- Custom templates
- All export formats
- LinkedIn optimization
- Priority support

## Data & Integrasi
- **Analytics:** Track user behavior, conversion rates, feature usage
- **Payment Gateway:** ToyyibPay untuk subscription management
- **API Keys Management:** Secure storage untuk OpenAI/OpenRouter keys
- **Usage Tracking:** Real-time quota monitoring per user plan
- **Security:** JWT authentication, API rate limiting, data encryption

## Workflow Pembangunan
1. **Setup:** Clone repo, install dependencies (Python + Node.js)
2. **Environment Config:** Setup API keys (OpenRouter, Supabase)
3. **Database Schema:** Run SQL migrations untuk Supabase tables
4. **Backend Development:** FastAPI endpoints untuk AI optimization
5. **Frontend Development:** React components untuk resume builder
6. **Integration:** Connect frontend dengan backend API
7. **Testing:** Test AI optimization, export functionality, auth flow
8. **Deployment:** Deploy backend ke Railway, frontend ke Vercel

## Tech Stack
- **Frontend:** React 18, TypeScript, Material-UI, Vite
- **Backend:** Python, FastAPI, OpenAI API
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth (Email + Google OAuth)
- **Deployment:** Vercel (Frontend), Railway (Backend)
- **AI Models:** GPT-4 (primary), Gemini Pro (fallback), Qwen 3 235B (free)

## Live Demo
- **Frontend:** https://resume-ai-tawny-seven.vercel.app
- **Backend API:** https://ai-resume-backend-production-f917.up.railway.app
- **API Docs:** https://ai-resume-backend-production-f917.up.railway.app/docs

## Maintenance & Scale
- Monitor API usage dan kos OpenAI/OpenRouter
- Update AI prompts untuk better optimization
- Add new resume templates based on user feedback
- Scale backend infrastructure based on traffic
- Regular security audits dan updates

## Dokumen Serahan
- Setup guide (README.md)
- API documentation (FastAPI auto-generated)
- Database schema (SUPABASE_SCHEMA.sql)
- Deployment guide (DEPLOYMENT.md)
- Tech stack documentation (TECH_STACK.md)
- User manual untuk resume builder
- Admin guide untuk manage subscriptions

## Repository
- **GitHub:** Private repository dengan full source code
- **Scripts:** Automated setup dan development scripts
- **Documentation:** Comprehensive docs dalam folder `/docs`

