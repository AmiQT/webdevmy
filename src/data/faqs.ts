import type { FAQ } from '../types/data';

export const faqs: FAQ[] = [
  {
    question: 'Apa jenis servis dan kepakaran kejuruteraan yang anda tawarkan?',
    answer: 'Kami fokus pada penyelesaian perisian gred produksi — merangkumi Cloud Infrastructure & DevOps (Kubernetes, Terraform IaC, CI/CD), High-Throughput Backend (Go, FastAPI, Spring Boot), Sistem Enterprise (HR/Payroll EPF/SOCSO, Custom CRM), dan Integrasi Agentic AI (LangGraph, RAG).',
  },
  {
    question: 'Bagaimana servis Cloud Cost & System Audit berfungsi?',
    answer: 'Kami menawarkan sesi audit 15 minit percuma di mana kami menganalisis seni bina semasa anda, mengenal pasti over-provisioned cloud resources (AWS/GCP/DigitalOcean), serta mencadangkan strategi caching dan automasi yang mampu menjimatkan sehingga 30%-50% bil bulanan server anda.',
  },
  {
    question: 'Bolehkah anda integrasikan kecerdasan AI ke dalam sistem syarikat yang sedia ada?',
    answer: 'Ya, tentu sekali. Kami mereka bentuk lapisan AI (seperti ChatOps bot, pembantu sokongan RAG, atau automasi dokumen PDF) yang bersambung terus dengan pangkalan data dan API sedia ada anda tanpa perlu membina semula keseluruhan sistem dari awal.',
  },
  {
    question: 'Berapa lama masa yang diperlukan untuk menyiapkan sesuatu projek?',
    answer: 'Bergantung pada skop kerja. Audit infrastruktur dan CI/CD setup mengambil masa 3-5 hari. MVP web app atau sistem automasi AI biasanya siap dalam 2-4 minggu. Sistem enterprise berskala penuh mengambil masa 4-8 minggu dengan milestone dan demo setiap sprint.',
  },
  {
    question: 'Adakah kod sumber dan infrastruktur menjadi hak milik penuh syarikat saya?',
    answer: 'Ya, 100%. Kesemua kod sumber (GitHub/GitLab), fail konfigurasi Terraform/Docker, dan infrastruktur cloud dideploy terus ke akaun anda. Kami turut menyediakan dokumentasi seni bina lengkap dan sesi handover secara langsung.',
  },
  {
    question: 'Bagaimana struktur harga dan terma pembayaran?',
    answer: 'Kami mengamalkan model harga telus berasaskan milestone berfasa (contohnya 40% deposit, 30% milestone beta, 30% handover penuh) atau pelan retainer bulanan untuk pengurusan DevOps dan penambahbaikan sistem berterusan.',
  },
];

