import type { Project } from '../types/data';

export const projects: Project[] = [
  {
    title: 'Student Talent Profiling App',
    category: 'EdTech',
    description: 'Platform end-to-end untuk profiling bakat pelajar UTHM. Pelajar boleh showcase pencapaian, join events, dan berinteraksi melalui social feed. Admin universiti dapat analytics mendalam dan AI insights melalui web dashboard.',
    tags: ['Flutter', 'FastAPI', 'Supabase', 'Astro', 'LangGraph', 'Gemini AI'],
    image: '/images/projects/student_talent.webp',
  },
  {
    title: 'Sukimeh AI Interior Designer',
    category: 'AI Hackathon',
    description: 'AI-powered interior design tool untuk Chin Hin Group. Upload floor plan, AI analisa ruang, generate layout perabot automatik, dan bagi product recommendations dengan one-click purchasing.',
    tags: ['Next.js 14', 'FastAPI', 'Microsoft Foundry', 'Konva.js', 'Zustand'],
    image: '/images/projects/sukimeh.webp',
  },
  {
    title: 'Go-Lumina API Gateway',
    category: 'Backend Infrastructure',
    description: 'Production-ready API Gateway dan Distributed Caching Proxy dalam Go. Round-robin load balancing, circuit breaker, anti-cache stampede, rate limiting, dan Prometheus observability untuk high-traffic environments.',
    tags: ['Golang', 'Redis', 'Docker', 'Prometheus', 'Grafana'],
    image: '/images/projects/go_lumina.webp',
  },
  {
    title: 'Infra-Pulse',
    category: 'DevOps / SRE',
    description: 'Production-grade infrastructure health microservice dengan full DevOps pipeline. Java 21 Virtual Threads, dual CI/CD (Jenkins + GitHub Actions), Kubernetes via Helm, Terraform IaC, dan full observability stack dengan Prometheus dan Grafana.',
    tags: ['Java 21', 'Spring Boot', 'Kubernetes', 'Terraform', 'Prometheus', 'Jenkins'],
    image: '/images/projects/infra_pulse.webp',
  },
  {
    title: 'Gopher-Ops',
    category: 'AI / DevOps',
    description: 'AI-driven SRE ChatOps platform via Telegram. Manage Docker, Kubernetes, dan system metrics dengan natural language. Gemini AI untuk RCA automatik, HITL execution, Terraform IaC, dan zero-trust security.',
    tags: ['Golang', 'Gemini AI', 'Docker', 'Kubernetes', 'Terraform', 'Telegram Bot'],
    image: '/images/projects/gopher_ops.webp',
  },
  {
    title: 'Central-Infra',
    category: 'Infrastructure / IaC',
    description: 'Enterprise-grade IaC sandbox dengan multi-tier Kubernetes environment. 4 layer modular: cluster provisioning, platform (NGINX + Prometheus/Grafana), RBAC security, dan workload deployment - semua fully automated via Terraform dan Helm.',
    tags: ['Kubernetes', 'Terraform', 'Helm', 'k3d', 'Prometheus', 'Grafana'],
    image: '/images/projects/central_infra.webp',
  },
  {
    title: 'CHEA - Chin Hin Employee Assistant',
    category: 'Enterprise AI',
    description: 'AI-powered workplace companion untuk Chin Hin Group. Flutter mobile app dengan natural language chat (BM + English), leave management, expense claims dengan receipt OCR, room booking, dan proactive AI nudges.',
    tags: ['Flutter', 'FastAPI', 'Azure OpenAI', 'Riverpod', 'Python'],
    image: '/images/projects/chea.webp',
  },
  {
    title: 'Home Anywhere',
    category: 'Open Source',
    description: 'Self-hostable homestay booking platform dengan multi-step booking flow, real availability, Stripe deposits, Google Calendar sync, dan built-in CMS. Boleh deploy untuk mana-mana property portfolio.',
    tags: ['Next.js 14', 'Laravel 11', 'Stripe', 'Google Calendar', 'Docker'],
    image: '/images/projects/home_anywhere.webp',
  },
  {
    title: 'FinTrack Pro',
    category: 'Enterprise HR',
    description: 'Enterprise payroll dan HR management system dengan automated salary processing (EPF/SOCSO/PCB), leave management workflow, digital payslip PDF, employee self-service portal, dan Prometheus observability.',
    tags: ['Java 21', 'Spring Boot', 'React 18', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/projects/fintrack_pro.webp',
  },
];
