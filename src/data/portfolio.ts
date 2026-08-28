import type { Project } from '../types/data';

export const projects: Project[] = [
  {
    title: 'Go-Lumina API Gateway & Proxy',
    category: 'Distributed Systems & Go',
    description: 'High-throughput API Gateway dan Distributed Caching Proxy dalam Go dengan kemampuan 7,500+ RPS. Dilengkapi round-robin load balancing, anti-cache stampede, dynamic circuit breaker, dan Prometheus observability.',
    tags: ['Golang', 'Redis', 'Docker', 'Prometheus', 'Grafana', '7,500 RPS'],
    image: '/images/projects/go_lumina.webp',
  },
  {
    title: 'Central-Infra IaC Sandbox',
    category: 'Cloud & Infrastructure (IaC)',
    description: 'Enterprise-grade Infrastructure-as-Code sandbox dengan multi-tier Kubernetes cluster (k3d). Menampilkan 4 layer modular: cluster provisioning, platform ingress & monitoring, zero-trust RBAC, dan workload orchestration via Terraform & Helm.',
    tags: ['Kubernetes', 'Terraform', 'Helm', 'k3d', 'Prometheus', 'Grafana'],
    image: '/images/projects/central_infra.webp',
  },
  {
    title: 'Infra-Pulse Health Microservice',
    category: 'DevOps & SRE',
    description: 'Microservice kesihatan infrastruktur gred produksi dengan Java 21 Virtual Threads. Dilengkapi dual CI/CD pipeline (Jenkins + GitHub Actions), deployment Kubernetes via Helm charts, dan dashboard observability penuh.',
    tags: ['Java 21', 'Spring Boot', 'Kubernetes', 'Helm', 'CI/CD Pipelines', 'Grafana'],
    image: '/images/projects/infra_pulse.webp',
  },
  {
    title: 'Gopher-Ops AI ChatOps SRE',
    category: 'Agentic AI & DevOps',
    description: 'Platform SRE ChatOps berkuasa AI via Telegram. Urus Docker, Kubernetes, dan metrik server dengan natural language. Dilengkapi Gemini AI RCA (Root Cause Analysis), human-in-the-loop validation, dan zero-trust guardrails.',
    tags: ['Golang', 'Gemini AI', 'Docker', 'Kubernetes', 'Telegram Bot', 'ChatOps'],
    image: '/images/projects/gopher_ops.webp',
  },
  {
    title: 'FinTrack Pro Enterprise Payroll',
    category: 'Enterprise Fullstack',
    description: 'Sistem pengurusan gaji dan HR enterprise dengan kalkulasi automatik cukai Malaysia (EPF, SOCSO, EIS, PCB). Dilengkapi penjanaan slip gaji PDF automatik, workflow kelulusan cuti, dan cache Redis berprestasi tinggi.',
    tags: ['Java 21', 'Spring Boot', 'React 18', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/projects/fintrack_pro.webp',
  },
  {
    title: 'Home Anywhere Booking SaaS',
    category: 'Fullstack Platform',
    description: 'Enjin tempahan homestay & properti moden dengan sistem bayaran Stripe deposit, sinkronisasi dua hala Google Calendar, kalendar ketersediaan masa-nyata, dan panel admin modular.',
    tags: ['Next.js 14', 'Laravel 11', 'Stripe', 'Google Calendar', 'PostgreSQL'],
    image: '/images/projects/home_anywhere.webp',
  },
  {
    title: 'Sukimeh AI Interior Designer',
    category: 'AI Hackathon Champion',
    description: 'Alat reka bentuk dalaman berkuasa AI untuk Chin Hin Group. Muat naik pelan lantai, AI menganalisis ruang, menjana susun atur perabot 2D/3D secara automatik, dan memadankan katalog produk dengan satu klik.',
    tags: ['Next.js 14', 'FastAPI', 'Azure OpenAI', 'Konva.js', 'Zustand'],
    image: '/images/projects/sukimeh.webp',
  },
  {
    title: 'Student Talent Profiling App',
    category: 'EdTech & Multi-Agent AI',
    description: 'Platform menyeluruh untuk profiling bakat pelajar universiti (UTHM). Dilengkapi LangGraph AI intelligence, analisa profil dinamik, suapan sosial interaktif, dan papan pemuka analitik pentadbir.',
    tags: ['Flutter', 'FastAPI', 'Supabase', 'LangGraph', 'Gemini AI', 'Astro'],
    image: '/images/projects/student_talent.webp',
  },
];
