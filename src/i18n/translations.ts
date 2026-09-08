export const languages = {
  ms: 'Bahasa Melayu',
  en: 'English',
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'ms';

export const translations = {
  ms: {
    // Meta & SEO
    meta: {
      title: 'WebDevMY | Production-Grade Web Systems, DevOps & AI Solutions',
      description: 'Website dan sistem web custom untuk bisnes servis Malaysia — daripada lead capture, booking dan automasi workflow hingga aplikasi AI.',
      skipLink: 'Langkau ke kandungan utama',
    },
    // Navbar
    nav: {
      problems: 'Masalah',
      solutions: 'Solusi',
      portfolio: 'Portfolio',
      pricing: 'Pakej & Harga',
      testimonials: 'Testimoni',
      contact: 'Hubungi',
      whatsappBtn: 'WhatsApp Sekarang',
    },
    // Hero
    hero: {
      badge: 'Production-Grade Engineering & Cloud Infra',
      title1: 'Website Yang Bantu Bisnes Anda',
      title2: 'Dapat Lebih Banyak Enquiry.',
      subheadline: 'Website Conversion • Booking & Workflow • Custom Systems • AI Automation',
      description: 'Kami bina website dan sistem web custom untuk service business — daripada lead capture dan booking hingga workflow automation serta AI copilot yang praktikal.',
      ctaConsultation: 'Dapatkan Konsultasi 15 Minit',
      ctaPortfolio: 'Lihat Portfolio Kami',
      socialProof: 'Dari idea hingga launch — design, build, integration dan deployment dalam satu team.',
      cards: [
        {
          title: 'Conversion-Focused Website',
          desc: 'Service pages, portfolio, WhatsApp CTA dan enquiry flow yang kemas',
        },
        {
          title: 'Booking & Workflow Automation',
          desc: 'Booking, lead pipeline, payment, dashboard dan notification workflow',
        },
        {
          title: 'Practical AI Automation',
          desc: 'AI knowledge assistant, document workflow dan human-reviewed copilot',
        },
      ],
      statsBadge: {
        title: 'Built Around Your Business Workflow',
        desc: 'Bukan template umum — setiap build ikut objektif dan proses kerja anda.',
        tags: ['Custom Build', 'Secure Deploy', 'Clear Handover'],
      },
    },
    // Floating WhatsApp
    floatingWa: {
      label: 'Chat WhatsApp',
      message: 'Hi WebDevMY, saya nak tanya tentang servis web / sistem.',
    },
    // Problems Section
    problems: {
      tag: 'Cabaran & Bottleneck Perniagaan',
      title: 'Adakah Sistem Anda Menghadapi',
      titleHighlight: 'Isu Ini',
      desc: 'Banyak syarikat berbelanja besar untuk teknologi tetapi terperangkap dengan infrastruktur yang rapuh dan proses manual. Kami ada penyelesaian kejuruteraan yang tepat.',
      viewSolutions: 'Lihat Solusi Yang Kami Bina',
      chatWa: 'Bincang masalah sistem anda di WhatsApp →',
      waMessage: 'Hi WebDevMY, saya nak audit masalah sistem saya',
      items: [
        {
          title: 'Bil Cloud (AWS/GCP) Melambung & Server Lemau',
          description: 'Over-provisioning resources tanpa auto-scaling dan ketiadaan caching menyebabkan bil server cecah ribuan ringgit tanpa peningkatan prestasi.',
        },
        {
          title: 'Sistem Tersekat & Proses Manual Buang Masa',
          description: 'Operasi bisnes tersekat dengan spreadsheet manual, pengiraan gaji berisiko silap, dan tiada automasi antara jabatan.',
        },
        {
          title: 'Ingin AI Sebenar, Bukan Chatbot Generik Bodo',
          description: 'Banyak chatbot di pasaran hanya membalas jawapan umum dan halusinasi. Bisnes perlukan AI agentic yang boleh membaca dokumen PDF dan bertindak ke atas pangkalan data.',
        },
        {
          title: 'Ketiadaan Senior Tech Lead & DevOps In-House',
          description: 'Menggaji pasukan kejuruteraan penuh menelan belanja ratusan ribu. Bekerjasama dengan rakan kongsi kejuruteraan freelance memberi anda kepakaran gred enterprise pada kos fleksibel.',
        },
      ],
    },
    // Services Section
    services: {
      tag: 'Servis & Kepakaran Kejuruteraan',
      title: 'Solutions Yang',
      titleHighlight: 'Selesaikan Masalah Sebenar',
      desc: 'Setiap projek dibina dengan seni bina teknikal yang kukuh, selamat, dan sedia berkembang bersama saiz perniagaan anda.',
      discussService: 'Bincang Servis Ini',
      bottomNote: 'Ada keperluan sistem khusus atau nak audit percuma?',
      bottomCta: 'WhatsApp Kami Sekarang',
      waPrefix: 'Hi WebDevMY, saya berminat nak bincang tentang servis ',
      waGeneral: 'Hi WebDevMY, saya nak bincang tentang keperluan sistem saya',
      items: [
        {
          title: 'DevOps & Cloud Cost Optimization',
          description: 'Audit & optimumkan infrastruktur cloud (AWS/GCP), kurangkan bil server sehingga 30-50%, bina CI/CD automated deployment, Kubernetes orchestration, dan Terraform IaC.',
          features: ['Kubernetes & Docker', 'Terraform IaC & CI/CD Pipelines', 'Cloud Cost Audit (Jimat 30-50%)'],
          badge: 'High-ROI & Blue Ocean',
        },
        {
          title: 'High-Throughput Backend & Distributed Systems',
          description: 'Seni bina backend berprestasi tinggi dalam Go, FastAPI, atau Spring Boot. Distributed caching Redis, database schema design, & microservices mampu kendali 7,500+ RPS.',
          features: ['Golang / FastAPI / Spring Boot', 'Redis Distributed Caching', '7,500+ RPS Benchmark Performance'],
          badge: 'High Performance',
        },
        {
          title: 'Enterprise Fullstack & Custom Web Apps',
          description: 'Web apps moden, SaaS platforms, & internal enterprise portals (ERP, Payroll EPF/SOCSO, Booking Systems) dengan Next.js 14, React 18, Astro, dan PostgreSQL.',
          features: ['Next.js 14 / Astro / React 18', 'Custom ERP & Payroll Systems', 'Stripe / FPX Payment Integration'],
          badge: 'B2B Scalable',
        },
        {
          title: 'Agentic AI & ChatOps Automation',
          description: 'Sistem AI bertaraf produksi dengan LangGraph multi-agent workflows, Document RAG (PDF/Docs), dan Telegram/Slack ChatOps bots untuk automasi operasi bisnes anda.',
          features: ['LangGraph Multi-Agent Workflows', 'ChatOps Telegram / Slack Bots', 'RAG Document Processing (PDF/Data)'],
          badge: 'Trending #1 In Demand',
        },
        {
          title: 'Ultra-Fast Landing Pages & Lead Funnels',
          description: 'Laman web sepantas kilat (Lighthouse 100/100) menggunakan Astro & Tailwind CSS yang dioptimumkan khas untuk ranking Google (Local SEO) dan penukaran prospek direct WhatsApp.',
          features: ['Astro Lighthouse 100/100 Speed', 'WhatsApp Direct Lead Capture', 'Local SEO & Schema Markup'],
          badge: 'High Conversion',
        },
        {
          title: 'System Observability & 24/7 Monitoring',
          description: 'Papan pemuka metrik masa-nyata Prometheus & Grafana. Alert automatik ke Telegram/Email serta-merta bila server mengalami ralat atau lonjakan trafik luar biasa.',
          features: ['Prometheus & Grafana Dashboards', 'Automated Telegram / Slack Alerts', 'Zero-Downtime Reliability'],
          badge: 'Zero-Downtime',
        },
      ],
    },
    // Benefits Section
    benefits: {
      tag: 'Nilai & Kelebihan Kami',
      title: 'Bukan Sekadar Deliver.',
      titleHighlight: 'Kami Bina Dengan Standard Tertinggi.',
      desc: 'Setiap baris kod dan konfigurasi server mempunyai matlamat kejuruteraan yang jelas untuk memacu pertumbuhan perniagaan anda.',
      stats: [
        { value: 'Fullstack', label: 'Design hingga Deployment' },
        { value: 'Custom', label: 'Ikut Workflow Bisnes' },
        { value: 'AI', label: 'Automation Yang Praktikal' },
        { value: 'Clear', label: 'Scope & Handover' },
      ],
      benefitsTitle: 'Apa Yang Anda Peroleh',
      items: [
        { title: 'Seni Bina Gred Enterprise', desc: 'Setiap sistem dibina atas foundation kukuh — modular, scalable, clean architecture, dan production-ready dari Hari Pertama.' },
        { title: 'Built For Reliable Growth', desc: 'Seni bina, hosting dan integrasi dipilih mengikut keperluan semasa supaya sistem mudah dijaga dan dinaik taraf.' },
        { title: 'Agentic AI Bertaraf Produksi', desc: 'Bukan sekadar bot generik. AI agents dengan tool-calling, document RAG, dan ChatOps yang beroperasi stabil dalam senario bisnes sebenar.' },
        { title: 'Deployment & Support Yang Kemas', desc: 'Kami urus deployment, dokumentasi dan handover supaya pasukan anda tahu cara meneruskan operasi selepas launch.' },
        { title: 'Komunikasi Pantas & Terus', desc: 'Tiada birokrasi agensi yang perlahan — berhubung terus dengan jurutera melalui WhatsApp dengan sprint update dua minggu yang jelas.' },
      ],
      whyTitle: 'Mengapa WebDevMY?',
      reasons: [
        'Pengalaman hands-on dengan distributed systems, Kubernetes IaC, & AI hackathons',
        'Fokus pada ROI & impak bisnes sebenar, bukan sekadar template semberono',
        'Full-stack end-to-end: dari frontend UI, scalable API, hingga cloud infrastructure',
        'Standard kod gred produksi: diuji (tested), modular, berdokumen, & mudah di-extend',
        'Respons pantas dalam masa 1-2 jam di WhatsApp/Telegram sepanjang projek berjalan',
      ],
      whyCtaDesc: 'Sedia bincang website atau workflow yang sesuai untuk bisnes anda?',
      whyCtaBtn: 'Mulakan Sesi Perbincangan',
      waMessage: 'Hi WebDevMY, saya nak bincang projek atau claim audit',
    },
    // Portfolio Section
    portfolio: {
      tag: 'Portfolio & Kajian Kes',
      title: 'Projek & Seni Bina Yang Telah',
      titleHighlight: 'Kami Bina',
      desc: 'Dari distributed backend berprestasi 7,500+ RPS hingga sandbox Kubernetes multi-tier dan sistem automasi AI gred enterprise.',
      moreCodeTitle: 'Ingin Lihat Lebih Banyak Seni Bina & Kod Sumber?',
      moreCodeDesc: 'Terokai dokumentasi seni bina teknikal yang lebih mendalam di portfolio kejuruteraan kami.',
      openPortfolio: 'Buka NoorAzami.me',
      discussProject: 'Bincang Projek Serupa',
      waMessage: 'Hi WebDevMY, saya berminat dengan projek anda',
      projects: [
        {
          title: 'Go-Lumina API Gateway & Proxy',
          category: 'Distributed Systems & Go',
          description: 'High-throughput API Gateway dan Distributed Caching Proxy dalam Go dengan kemampuan 7,500+ RPS. Dilengkapi round-robin load balancing, anti-cache stampede, dynamic circuit breaker, dan Prometheus observability.',
          tags: ['Golang', 'Redis', 'Docker', 'Prometheus', 'Grafana', '7,500 RPS'],
        },
        {
          title: 'Central-Infra IaC Sandbox',
          category: 'Cloud & Infrastructure (IaC)',
          description: 'Enterprise-grade Infrastructure-as-Code sandbox dengan multi-tier Kubernetes cluster (k3d). Menampilkan 4 layer modular: cluster provisioning, platform ingress & monitoring, zero-trust RBAC, dan workload orchestration via Terraform & Helm.',
          tags: ['Kubernetes', 'Terraform', 'Helm', 'k3d', 'Prometheus', 'Grafana'],
        },
        {
          title: 'Infra-Pulse Health Microservice',
          category: 'DevOps & SRE',
          description: 'Microservice kesihatan infrastruktur gred produksi dengan Java 21 Virtual Threads. Dilengkapi dual CI/CD pipeline (Jenkins + GitHub Actions), deployment Kubernetes via Helm charts, dan dashboard observability penuh.',
          tags: ['Java 21', 'Spring Boot', 'Kubernetes', 'Helm', 'CI/CD Pipelines', 'Grafana'],
        },
        {
          title: 'Gopher-Ops AI ChatOps SRE',
          category: 'Agentic AI & DevOps',
          description: 'Platform SRE ChatOps berkuasa AI via Telegram. Urus Docker, Kubernetes, dan metrik server dengan natural language. Dilengkapi Gemini AI RCA (Root Cause Analysis), human-in-the-loop validation, dan zero-trust guardrails.',
          tags: ['Golang', 'Gemini AI', 'Docker', 'Kubernetes', 'Telegram Bot', 'ChatOps'],
        },
        {
          title: 'FinTrack Pro Enterprise Payroll',
          category: 'Enterprise Fullstack',
          description: 'Sistem pengurusan gaji dan HR enterprise dengan kalkulasi automatik cukai Malaysia (EPF, SOCSO, EIS, PCB). Dilengkapi penjanaan slip gaji PDF automatik, workflow kelulusan cuti, dan cache Redis berprestasi tinggi.',
          tags: ['Java 21', 'Spring Boot', 'React 18', 'PostgreSQL', 'Redis', 'Docker'],
        },
        {
          title: 'Home Anywhere Booking SaaS',
          category: 'Fullstack Platform',
          description: 'Enjin tempahan homestay & properti moden dengan sistem bayaran Stripe deposit, sinkronisasi dua hala Google Calendar, kalendar ketersediaan masa-nyata, dan panel admin modular.',
          tags: ['Next.js 14', 'Laravel 11', 'Stripe', 'Google Calendar', 'PostgreSQL'],
        },
        {
          title: 'Sukimeh AI Interior Designer',
          category: 'AI Hackathon Champion',
          description: 'Alat reka bentuk dalaman berkuasa AI untuk Chin Hin Group. Muat naik pelan lantai, AI menganalisis ruang, menjana susun atur perabot 2D/3D secara automatik, dan memadankan katalog produk dengan satu klik.',
          tags: ['Next.js 14', 'FastAPI', 'Azure OpenAI', 'Konva.js', 'Zustand'],
        },
        {
          title: 'Student Talent Profiling App',
          category: 'EdTech & Multi-Agent AI',
          description: 'Platform menyeluruh untuk profiling bakat pelajar universiti (UTHM). Dilengkapi LangGraph AI intelligence, analisa profil dinamik, suapan sosial interaktif, dan papan pemuka analitik pentadbir.',
          tags: ['Flutter', 'FastAPI', 'Supabase', 'LangGraph', 'Gemini AI', 'Astro'],
        },
      ],
    },
    // Pricing Section
    pricing: {
      tag: 'Pakej & Pelaburan Telus',
      title: 'Pelaburan Jelas,',
      titleHighlight: 'Hasil Berimpak Tinggi',
      desc: 'Scope dan timeline dimuktamadkan sebelum build bermula. Pilih pakej yang sesuai dengan tahap operasi bisnes anda.',
      periodFrom: 'bermula dari',
      periodCustom: 'custom quote',
      popularChoice: 'Pilihan Paling Ramai Klien',
      guarantees: [
        { title: '⏱️ Fast Turnaround', desc: 'Milestones siap ikut jadual tanpa delay.' },
        { title: '🔒 100% Kod Hak Milik Anda', desc: 'Full source code & deployment handover milik anda.' },
        { title: '🤝 Telus & Beretika', desc: 'Tiada bayaran tersembunyi atau lock-in vendor.' },
      ],
      packages: [
        {
          name: 'Lead-Generating Website',
          badge: 'Untuk Service Business',
          price: 'RM 3,500',
          period: 'bermula dari',
          description: 'Website profesional untuk servis lokal, kontraktor, klinik dan bisnes yang mahu lebih banyak enquiry berkualiti.',
          features: [
            'Custom mobile-first design & service pages',
            'WhatsApp CTA dan enquiry form berstruktur',
            'Portfolio, testimoni dan trust sections',
            'SEO foundation, GA4 dan lead tracking',
            'Hosting, SSL dan deployment setup',
            'Sesi handover + 30 hari support'
          ],
          ctaText: 'Bincang Website Anda',
          ctaLink: 'https://wa.me/60138799702?text=Hi%20WebDevMY,%20saya%20nak%20bincang%20Lead-Generating%20Website%20untuk%20bisnes%20saya.'
        },
        {
          name: 'Website + Workflow Automation',
          badge: '🔥 Paling Popular',
          price: 'RM 6,500',
          period: 'bermula dari',
          description: 'Untuk bisnes yang mahu website dihubungkan dengan booking, lead pipeline, payment atau dashboard operasi ringkas.',
          features: [
            'Semua asas Lead-Generating Website',
            'Booking, site visit atau lead pipeline',
            'Database dan dashboard admin ringkas',
            'Integrasi payment / calendar mengikut scope',
            'Notifikasi email atau WhatsApp',
            'Handover, dokumentasi dan 60 hari support'
          ],
          ctaText: 'Bincang Workflow Saya',
          ctaLink: 'https://wa.me/60138799702?text=Hi%20WebDevMY,%20saya%20nak%20bincang%20website%20dengan%20booking%20atau%20workflow%20automation.'
        },
        {
          name: 'Custom System & AI Automation',
          badge: '🚀 Custom Scope',
          price: 'RM 15,000+',
          period: 'custom quote',
          description: 'Untuk workflow operasi yang kompleks, aplikasi custom, integrasi dalaman atau AI copilot yang perlukan discovery dan reka bentuk khusus.',
          features: [
            'Discovery workshop dan workflow mapping',
            'Custom web app, role access dan integrations',
            'Document, quotation atau operations automation',
            'AI copilot / knowledge assistant dengan human review',
            'Secure deployment, monitoring dan documentation',
            'Pilihan maintenance & improvement retainer'
          ],
          ctaText: 'Dapatkan Enterprise Quote',
          ctaLink: 'https://wa.me/60138799702?text=Hi%20WebDevMY,%20saya%20perlukan%20solusi%20Enterprise%20DevOps%20/%20High-Throughput%20Backend%20/%20AI%20Automation.'
        }
      ],
    },
    // Testimonials Section
    testimonials: {
      tag: 'Testimoni & Bukti Sosial',
      title: 'Apa Kata',
      titleHighlight: 'Klien & Rakan Kongsi',
      desc: 'Maklum balas jujur daripada pengasas bisnes, CTO, dan peneraju teknologi yang telah bekerjasama dengan kami.',
      items: [
        {
          quote: 'AI assistant yang mereka bina untuk syarikat kami memang luar biasa. Boleh faham bahasa Melayu, ada memory, dan boleh query database terus. Bukan chatbot biasa - ini betul-betul agentic system.',
          name: 'Encik Farouk Amin',
          role: 'Head of Digital',
          company: 'Kumpulan Perusahaan Farouk',
          location: 'Kuala Lumpur',
          rating: 5,
        },
        {
          quote: 'Backend API yang mereka design sangat clean. Documentation lengkap, test coverage tinggi, dan architecture yang senang nak extend. Team kami boleh onboard dalam masa 2 hari je.',
          name: 'Cik Sharifah Nadia',
          role: 'CTO',
          company: 'Nexora Tech',
          location: 'Cyberjaya, Selangor',
          rating: 5,
        },
        {
          quote: 'Flutter app yang dibina untuk syarikat kami berjalan smooth kat iOS dan Android. Integration dengan AI dan backend seamless. Siap dalam masa yang dijanjikan dan quality memang tinggi.',
          name: 'Dr. Hazwan Kamaruddin',
          role: 'Pengarah Inovasi',
          company: 'MedTech Solutions MY',
          location: 'Putrajaya',
          rating: 5,
        },
        {
          quote: 'Mereka setup full DevOps pipeline untuk kami - Docker, Kubernetes, CI/CD, Prometheus. Deployment yang dulu ambil setengah hari sekarang 10 minit. Infrastructure sekarang stable dan observable.',
          name: 'Encik Rizwan Tarmizi',
          role: 'Lead Engineer',
          company: 'Synapse Labs',
          location: 'Petaling Jaya, Selangor',
          rating: 5,
        },
        {
          quote: 'Kami hire mereka untuk integrate AI ke dalam sistem HR sedia ada. Proses yang dulu manual sekarang automated sepenuhnya. ROI dalam 6 minggu pertama dah cover kos pembangunan.',
          name: 'Puan Azlina Rashid',
          role: 'HR Director',
          company: 'Prisma Holdings',
          location: 'Shah Alam, Selangor',
          rating: 5,
        },
        {
          quote: 'Custom analytics dashboard yang mereka buat bagi visibility penuh kepada operations kami. Real-time data, alert system, PDF reports - semua yang kami minta ada dan berfungsi perfectly.',
          name: 'Encik Darwisyah Malik',
          role: 'Operations Manager',
          company: 'Logistera Sdn Bhd',
          location: 'Johor Bahru, Johor',
          rating: 5,
        },
      ],
    },
    // FAQ Section
    faq: {
      tag: 'Soalan Lazim (FAQ)',
      title: 'Semua Yang Anda Perlu Tahu Mengenai',
      titleHighlight: 'Servis Kami',
      desc: 'Jawapan telus kepada soalan-soalan teknikal, kos, jangka masa, dan pemilikan kod.',
      stillQuestions: 'Masih ada soalan?',
      askPrompt: 'Jangan segan untuk tanya terus!',
      whatsappBtn: 'WhatsApp Kami',
      waMessage: 'Hi WebDevMY, saya ada soalan tentang servis anda',
      items: [
        {
          question: 'Apa jenis servis dan kepakaran kejuruteraan yang anda tawarkan?',
          answer: 'Kami fokus pada penyelesaian perisian gred produksi — merangkumi Cloud Infrastructure & DevOps (Kubernetes, Terraform IaC, CI/CD), High-Throughput Backend (Go, FastAPI, Spring Boot), Sistem Enterprise (HR/Payroll EPF/SOCSO, Custom CRM), dan Integrasi Agentic AI (LangGraph, RAG).',
        },
        {
          question: 'Bagaimana servis Cloud Cost & System Audit berfungsi?',
          answer: 'Kami mulakan dengan sesi perbincangan 15 minit percuma untuk faham objektif, proses semasa dan keutamaan anda. Jika sesuai, kami cadangkan pendekatan, scope dan anggaran timeline sebelum sebarang kerja bermula.',
        },
        {
          question: 'Bolehkah anda integrasikan kecerdasan AI ke dalam sistem syarikat yang sedia ada?',
          answer: 'Ya, tentu sekali. Kami mereka bentuk lapisan AI (seperti ChatOps bot, pembantu sokongan RAG, atau automasi dokumen PDF) yang bersambung terus dengan pangkalan data dan API sedia ada anda tanpa perlu membina semula keseluruhan sistem dari awal.',
        },
        {
          question: 'Berapa lama masa yang diperlukan untuk menyiapkan sesuatu projek?',
          answer: 'Website biasanya mengambil 1-2 minggu selepas kandungan dan scope disahkan. Website dengan booking atau workflow automation lazimnya 2-4 minggu. Sistem custom yang lebih kompleks akan dipecahkan kepada milestone dengan timeline yang dipersetujui bersama.',
        },
        {
          question: 'Adakah kod sumber dan infrastruktur menjadi hak milik penuh syarikat saya?',
          answer: 'Ya, 100%. Kesemua kod sumber (GitHub/GitLab), fail konfigurasi Terraform/Docker, dan infrastruktur cloud dideploy terus ke akaun anda. Kami turut menyediakan dokumentasi seni bina lengkap dan sesi handover secara langsung.',
        },
        {
          question: 'Bagaimana struktur harga dan terma pembayaran?',
          answer: 'Untuk projek pantas/landing page: 50% deposit upfront & 50% baki semasa handover. Untuk projek custom & enterprise: kami amalkan milestone berfasa (40% deposit, 30% milestone beta, 30% handover penuh) atau pelan retainer bulanan.',
        },
      ],
    },
    // Contact Section
    contact: {
      tag: 'Hubungi Kami',
      title: 'Sedia Untuk Bina Sistem Yang',
      titleHighlight: 'Boleh Scale',
      desc: 'Dari audit kos cloud, penambahbaikan seni bina backend, hingga pembangunan sistem fullstack dan automasi AI — jom bincang secara telus.',
      reachOutTitle: 'Reach Out Terus Kepada Jurutera',
      reachOutDesc: 'WhatsApp kami untuk semakan scope teknikal, claim free 15-min audit, atau anggaran kos projek anda. Kami biasanya membalas dalam tempoh 1-2 jam.',
      reachOutCta: 'Chat di WhatsApp Sekarang',
      reachOutPhone: '+60 13-879 9702 (Noorazami / WebDevMY)',
      waMessage: 'Hi WebDevMY, saya berminat nak bincang projek / claim Free 15-Minute Cloud & System Audit.',
      expectTitle: 'Apa Yang Anda Akan Peroleh:',
      expectItems: [
        {
          title: '15-Minute Discovery & Audit Call',
          desc: 'Semakan pantas keperluan teknikal, isu infrastruktur, dan objektif bisnes.',
        },
        {
          title: 'Proposal Seni Bina & Sebut Harga Telus',
          desc: 'Pecahan skop kerja, tech stack, dan sebut harga tanpa sebarang caj tersembunyi.',
        },
        {
          title: 'Sprint Milestones & Full Handover',
          desc: 'Pelan pembangunan berfasa dengan demonstrasi berkala dan dokumentasi lengkap.',
        },
      ],
    },
    // Footer Section
    footer: {
      brandDesc: 'Penyelesaian kejuruteraan perisian dan infrastruktur gred produksi untuk perniagaan di Malaysia & serantau. Fullstack web apps, distributed systems, DevOps cloud, dan automasi Agentic AI.',
      engineeringPortfolio: 'Engineering Portfolio ↗',
      servicesTitle: 'Servis & Kepakaran',
      quickLinksTitle: 'Pautan Pantas',
      copyright: '© 2026 WebDevMY. Hak cipta terpelihara.',
      portfolioLink: 'Portfolio (noorazami.me)',
      githubLink: 'GitHub (@AmiQT)',
      backToTop: 'Kembali ke atas',
      services: [
        'DevOps & Cloud Cost Optimization',
        'High-Throughput Backend & Go',
        'Enterprise Web Apps & Systems',
        'Agentic AI & ChatOps Automation',
        'Ultra-Fast Landing Pages & Funnels',
        'Observability & 24/7 Monitoring',
      ],
      quickLinks: [
        { href: '#masalah', label: 'Cabaran' },
        { href: '#solusi', label: 'Kepakaran & Servis' },
        { href: '#portfolio', label: 'Kajian Kes & Portfolio' },
        { href: '#testimoni', label: 'Testimoni' },
        { href: '#hubungi', label: 'Hubungi Jurutera' },
      ],
    },
    // Exit Popup
    exitPopup: {
      badge: '⚡ Konsultasi Projek Percuma',
      title: 'Nak Website atau Sistem Yang Lebih Membantu Bisnes?',
      subtitlePre: 'Dapatkan sesi ',
      subtitleHighlight: 'konsultasi projek 15 minit',
      subtitlePost: ' bersama team kami.',
      freeConsultationBadge: 'KONSULTASI PERCUMA',
      cta: 'Bincang Di WhatsApp',
      note: 'Kami akan fahamkan keperluan anda sebelum mencadangkan scope projek.',
      waMessage: 'Hi WebDevMY, saya nak bincang website atau sistem untuk bisnes saya.',
      benefits: [
        'Faham objektif dan masalah utama bisnes anda',
        'Kenal pasti sama ada website, workflow atau AI sesuai',
        'Cadangan langkah seterusnya yang praktikal',
        'Percuma dan tanpa komitmen',
      ],
    },
  },
  en: {
    // Meta & SEO
    meta: {
      title: 'WebDevMY | Production-Grade Web Systems, DevOps & AI Solutions',
      description: 'Custom websites and web systems for Malaysian service businesses — from lead capture, booking and workflow automation to practical AI applications.',
      skipLink: 'Skip to main content',
    },
    // Navbar
    nav: {
      problems: 'Problems',
      solutions: 'Solutions',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      testimonials: 'Testimonials',
      contact: 'Contact',
      whatsappBtn: 'WhatsApp Us',
    },
    // Hero
    hero: {
      badge: 'Production-Grade Engineering & Cloud Infra',
      title1: 'Websites That Empower Your Business To',
      title2: 'Generate High-Value Inquiries.',
      subheadline: 'Conversion Websites • Booking & Workflows • Custom Systems • AI Automation',
      description: 'We build high-performance websites and custom web systems for service businesses — from lead capture and booking to workflow automation and practical AI copilots.',
      ctaConsultation: 'Get Free 15-Min Consultation',
      ctaPortfolio: 'View Our Portfolio',
      socialProof: 'From idea to launch — design, build, integration, and deployment under one roof.',
      cards: [
        {
          title: 'Conversion-Focused Website',
          desc: 'Clean service pages, portfolio, WhatsApp CTA, and seamless inquiry flow',
        },
        {
          title: 'Booking & Workflow Automation',
          desc: 'Booking, lead pipeline, payments, dashboards, and automated notifications',
        },
        {
          title: 'Practical AI Automation',
          desc: 'AI knowledge assistants, document workflows, and human-reviewed copilots',
        },
      ],
      statsBadge: {
        title: 'Built Around Your Business Workflow',
        desc: 'Never generic templates — each build is tailored to your real business workflows.',
        tags: ['Custom Build', 'Secure Deploy', 'Clear Handover'],
      },
    },
    // Floating WhatsApp
    floatingWa: {
      label: 'Chat WhatsApp',
      message: 'Hi WebDevMY, I would like to inquire about your web / system services.',
    },
    // Problems Section
    problems: {
      tag: 'Business Bottlenecks & Challenges',
      title: 'Is Your Tech Facing',
      titleHighlight: 'These Bottlenecks',
      desc: 'Many companies spend heavily on tech yet end up trapped in fragile infrastructure and manual processes. We provide targeted engineering solutions.',
      viewSolutions: 'Explore Our Solutions',
      chatWa: 'Discuss your tech bottlenecks on WhatsApp →',
      waMessage: 'Hi WebDevMY, I would like an audit on my system bottlenecks',
      items: [
        {
          title: 'Skyrocketing Cloud Bills & Sluggish Servers',
          description: 'Over-provisioning without auto-scaling and zero caching causes cloud bills to surge into thousands with zero performance gain.',
        },
        {
          title: 'Bottlenecked Systems & Wasteful Manual Work',
          description: 'Daily operations bogged down by manual spreadsheets, error-prone payroll, and disjointed departmental workflows.',
        },
        {
          title: 'Craving Real AI, Not Generic Dumb Chatbots',
          description: 'Most chatbots just regurgitate hallucinations. Modern businesses need agentic AI that reads your PDF documents and acts on live databases.',
        },
        {
          title: 'No Senior Tech Lead & In-House DevOps',
          description: 'Hiring a full in-house engineering team costs hundreds of thousands. Partnering with a senior engineering studio gives you enterprise expertise at flexible costs.',
        },
      ],
    },
    // Services Section
    services: {
      tag: 'Engineering Capabilities & Services',
      title: 'Solutions That',
      titleHighlight: 'Solve Real Business Problems',
      desc: 'Every project is engineered with resilient, secure, and scalable architecture ready to grow with your business demand.',
      discussService: 'Discuss This Service',
      bottomNote: 'Need a custom system architecture or a free audit?',
      bottomCta: 'WhatsApp Us Now',
      waPrefix: 'Hi WebDevMY, I am interested in discussing ',
      waGeneral: 'Hi WebDevMY, I would like to discuss my custom system requirements',
      items: [
        {
          title: 'DevOps & Cloud Cost Optimization',
          description: 'Audit & optimize cloud infrastructure (AWS/GCP), trim server costs by 30-50%, implement automated CI/CD pipelines, Kubernetes orchestration, and Terraform IaC.',
          features: ['Kubernetes & Docker', 'Terraform IaC & CI/CD Pipelines', 'Cloud Cost Audit (Save 30-50%)'],
          badge: 'High-ROI & Blue Ocean',
        },
        {
          title: 'High-Throughput Backend & Distributed Systems',
          description: 'High-performance backend architectures in Go, FastAPI, or Spring Boot. Redis distributed caching, database schema tuning, & microservices handling 7,500+ RPS.',
          features: ['Golang / FastAPI / Spring Boot', 'Redis Distributed Caching', '7,500+ RPS Benchmark Performance'],
          badge: 'High Performance',
        },
        {
          title: 'Enterprise Fullstack & Custom Web Apps',
          description: 'Modern web apps, SaaS platforms, & internal enterprise portals (ERP, Payroll EPF/SOCSO, Booking Systems) using Next.js 14, React 18, Astro, and PostgreSQL.',
          features: ['Next.js 14 / Astro / React 18', 'Custom ERP & Payroll Systems', 'Stripe / FPX Payment Integration'],
          badge: 'B2B Scalable',
        },
        {
          title: 'Agentic AI & ChatOps Automation',
          description: 'Production-ready AI systems with LangGraph multi-agent workflows, Document RAG (PDF/Docs), and Telegram/Slack ChatOps bots automating your business operations.',
          features: ['LangGraph Multi-Agent Workflows', 'ChatOps Telegram / Slack Bots', 'RAG Document Processing (PDF/Data)'],
          badge: 'Trending #1 In Demand',
        },
        {
          title: 'Ultra-Fast Landing Pages & Lead Funnels',
          description: 'Blazing-fast websites (Lighthouse 100/100) using Astro & Tailwind CSS optimized for Google Local SEO rankings and high-converting direct WhatsApp leads.',
          features: ['Astro Lighthouse 100/100 Speed', 'WhatsApp Direct Lead Capture', 'Local SEO & Schema Markup'],
          badge: 'High Conversion',
        },
        {
          title: 'System Observability & 24/7 Monitoring',
          description: 'Real-time metrics dashboards with Prometheus & Grafana. Automated instant alerts to Telegram/Email whenever errors spike or unusual traffic surges occur.',
          features: ['Prometheus & Grafana Dashboards', 'Automated Telegram / Slack Alerts', 'Zero-Downtime Reliability'],
          badge: 'Zero-Downtime',
        },
      ],
    },
    // Benefits Section
    benefits: {
      tag: 'Our Value & Advantages',
      title: 'We Don’t Just Deliver.',
      titleHighlight: 'We Build To The Highest Standards.',
      desc: 'Every line of code and server configuration serves a clear engineering purpose to propel your business forward.',
      stats: [
        { value: 'Fullstack', label: 'Design to Deployment' },
        { value: 'Custom', label: 'Built for Your Workflows' },
        { value: 'AI', label: 'Practical Automation' },
        { value: 'Clear', label: 'Scope & Transparent Handover' },
      ],
      benefitsTitle: 'What You Gain',
      items: [
        { title: 'Enterprise-Grade Architecture', desc: 'Every system is built upon solid foundations — modular, scalable, clean architecture, and production-ready from Day One.' },
        { title: 'Built For Reliable Growth', desc: 'Architecture, hosting, and integrations are selected to match your lifecycle so systems remain easy to maintain and upgrade.' },
        { title: 'Production-Grade Agentic AI', desc: 'Not just another generic bot. AI agents with tool-calling, document RAG, and ChatOps that run reliably in real-world business scenarios.' },
        { title: 'Clean Deployment & Support', desc: 'We handle deployment, documentation, and thorough handover so your team confidently operates the system post-launch.' },
        { title: 'Direct & Rapid Communication', desc: 'No bloated agency bureaucracy — talk directly with engineers via WhatsApp with clear bi-weekly sprint updates.' },
      ],
      whyTitle: 'Why WebDevMY?',
      reasons: [
        'Hands-on experience with distributed systems, Kubernetes IaC, & AI hackathons',
        'Laser focus on real business ROI and impact, never cookie-cutter templates',
        'End-to-end fullstack: from frontend UI and scalable APIs to cloud infrastructure',
        'Production code quality: thoroughly tested, modular, documented, & easy to extend',
        'Prompt responses within 1-2 hours on WhatsApp/Telegram throughout the engagement',
      ],
      whyCtaDesc: 'Ready to discuss the ideal website or automated workflow for your business?',
      whyCtaBtn: 'Start Discovery Discussion',
      waMessage: 'Hi WebDevMY, I want to discuss a project or claim an audit',
    },
    // Portfolio Section
    portfolio: {
      tag: 'Portfolio & Case Studies',
      title: 'Systems & Architectures',
      titleHighlight: 'We’ve Built & Shipped',
      desc: 'From high-throughput backends handling 7,500+ RPS to multi-tier Kubernetes sandboxes and enterprise agentic AI systems.',
      moreCodeTitle: 'Want To See More Architecture & Source Code?',
      moreCodeDesc: 'Explore in-depth technical architecture documentation on our engineering portfolio.',
      openPortfolio: 'Open NoorAzami.me',
      discussProject: 'Discuss Similar Project',
      waMessage: 'Hi WebDevMY, I am interested in your past projects',
      projects: [
        {
          title: 'Go-Lumina API Gateway & Proxy',
          category: 'Distributed Systems & Go',
          description: 'High-throughput API Gateway and Distributed Caching Proxy in Go benchmarked at 7,500+ RPS. Features round-robin load balancing, anti-cache stampede, dynamic circuit breaker, and Prometheus observability.',
          tags: ['Golang', 'Redis', 'Docker', 'Prometheus', 'Grafana', '7,500 RPS'],
        },
        {
          title: 'Central-Infra IaC Sandbox',
          category: 'Cloud & Infrastructure (IaC)',
          description: 'Enterprise-grade Infrastructure-as-Code sandbox featuring multi-tier Kubernetes cluster (k3d). 4 modular layers: cluster provisioning, platform ingress & monitoring, zero-trust RBAC, and workload orchestration via Terraform & Helm.',
          tags: ['Kubernetes', 'Terraform', 'Helm', 'k3d', 'Prometheus', 'Grafana'],
        },
        {
          title: 'Infra-Pulse Health Microservice',
          category: 'DevOps & SRE',
          description: 'Production-grade infrastructure health microservice built with Java 21 Virtual Threads. Dual CI/CD pipeline (Jenkins + GitHub Actions), Kubernetes Helm charts deployment, and complete observability dashboard.',
          tags: ['Java 21', 'Spring Boot', 'Kubernetes', 'Helm', 'CI/CD Pipelines', 'Grafana'],
        },
        {
          title: 'Gopher-Ops AI ChatOps SRE',
          category: 'Agentic AI & DevOps',
          description: 'AI-powered SRE ChatOps platform via Telegram. Manage Docker, Kubernetes, and server metrics with natural language. Equipped with Gemini AI RCA (Root Cause Analysis), human-in-the-loop validation, and zero-trust guardrails.',
          tags: ['Golang', 'Gemini AI', 'Docker', 'Kubernetes', 'Telegram Bot', 'ChatOps'],
        },
        {
          title: 'FinTrack Pro Enterprise Payroll',
          category: 'Enterprise Fullstack',
          description: 'Enterprise HR & payroll management system with automated statutory tax calculations (EPF, SOCSO, EIS, PCB). Features automatic PDF payslip generation, leave approval workflows, and high-performance Redis caching.',
          tags: ['Java 21', 'Spring Boot', 'React 18', 'PostgreSQL', 'Redis', 'Docker'],
        },
        {
          title: 'Home Anywhere Booking SaaS',
          category: 'Fullstack Platform',
          description: 'Modern homestay & property booking engine with Stripe deposit payments, two-way Google Calendar synchronization, real-time availability calendar, and modular admin management portal.',
          tags: ['Next.js 14', 'Laravel 11', 'Stripe', 'Google Calendar', 'PostgreSQL'],
        },
        {
          title: 'Sukimeh AI Interior Designer',
          category: 'AI Hackathon Champion',
          description: 'AI-powered interior design tool for Chin Hin Group. Upload floor plans, AI analyzes spaces, automatically generates 2D/3D furniture layouts, and matches product catalogs in a single click.',
          tags: ['Next.js 14', 'FastAPI', 'Azure OpenAI', 'Konva.js', 'Zustand'],
        },
        {
          title: 'Student Talent Profiling App',
          category: 'EdTech & Multi-Agent AI',
          description: 'Comprehensive student talent profiling platform for university (UTHM). Features LangGraph AI intelligence, dynamic profile evaluation, interactive social feeds, and administrator analytics dashboards.',
          tags: ['Flutter', 'FastAPI', 'Supabase', 'LangGraph', 'Gemini AI', 'Astro'],
        },
      ],
    },
    // Pricing Section
    pricing: {
      tag: 'Transparent Packages & Investment',
      title: 'Clear Investment,',
      titleHighlight: 'High-Impact Results',
      desc: 'Scope and timelines are finalized before any build begins. Choose the package that matches your business operational phase.',
      periodFrom: 'starting from',
      periodCustom: 'custom quote',
      popularChoice: 'Most Popular Choice',
      guarantees: [
        { title: '⏱️ Fast Turnaround', desc: 'Milestones shipped on schedule without delay.' },
        { title: '🔒 100% Code Ownership', desc: 'Full source code & deployment handover owned by you.' },
        { title: '🤝 Transparent & Ethical', desc: 'Zero hidden fees or vendor lock-in.' },
      ],
      packages: [
        {
          name: 'Lead-Generating Website',
          badge: 'For Service Businesses',
          price: 'RM 3,500',
          period: 'starting from',
          description: 'Professional website for local services, contractors, clinics, and businesses seeking consistent high-quality inquiries.',
          features: [
            'Custom mobile-first design & service pages',
            'WhatsApp CTA and structured inquiry forms',
            'Portfolio, testimonials and trust sections',
            'SEO foundation, GA4 and lead tracking',
            'Hosting, SSL and deployment setup',
            'Handover session + 30 days support'
          ],
          ctaText: 'Discuss Your Website',
          ctaLink: 'https://wa.me/60138799702?text=Hi%20WebDevMY,%20I%20want%20to%20discuss%20a%20Lead-Generating%20Website%20for%20my%20business.'
        },
        {
          name: 'Website + Workflow Automation',
          badge: '🔥 Most Popular',
          price: 'RM 6,500',
          period: 'starting from',
          description: 'For businesses wanting their website integrated with bookings, lead pipelines, payments, or streamlined operations dashboards.',
          features: [
            'Everything in Lead-Generating Website',
            'Booking, site visits, or lead pipelines',
            'Database and streamlined admin dashboard',
            'Payment / calendar integrations per scope',
            'Automated email or WhatsApp alerts',
            'Handover, documentation and 60 days support'
          ],
          ctaText: 'Discuss My Workflow',
          ctaLink: 'https://wa.me/60138799702?text=Hi%20WebDevMY,%20I%20want%20to%20discuss%20a%20website%20with%20booking%20or%20workflow%20automation.'
        },
        {
          name: 'Custom System & AI Automation',
          badge: '🚀 Custom Scope',
          price: 'RM 15,000+',
          period: 'custom quote',
          description: 'For complex workflows, bespoke web apps, internal systems, or custom AI copilots requiring dedicated technical discovery.',
          features: [
            'Discovery workshop & workflow mapping',
            'Custom web app, role permissions & integrations',
            'Document, quotation or operations automation',
            'AI copilot / knowledge assistant with human review',
            'Secure deployment, monitoring & documentation',
            'Optional ongoing maintenance retainer'
          ],
          ctaText: 'Get Enterprise Quote',
          ctaLink: 'https://wa.me/60138799702?text=Hi%20WebDevMY,%20I%20need%20Enterprise%20DevOps%20/%20High-Throughput%20Backend%20/%20AI%20Automation.'
        }
      ],
    },
    // Testimonials Section
    testimonials: {
      tag: 'Testimonials & Social Proof',
      title: 'What Our',
      titleHighlight: 'Clients & Partners Say',
      desc: 'Unfiltered feedback from business founders, CTOs, and engineering leaders who have collaborated with us.',
      items: [
        {
          quote: 'The AI assistant they engineered for us is phenomenal. It comprehends Malay natively, retains conversation memory, and queries our database directly. Not a toy chatbot — a genuine agentic system.',
          name: 'Mr. Farouk Amin',
          role: 'Head of Digital',
          company: 'Farouk Enterprise Group',
          location: 'Kuala Lumpur',
          rating: 5,
        },
        {
          quote: 'The backend APIs they designed are impeccably clean. Comprehensive documentation, high test coverage, and an easily extensible architecture. Our team onboarded within 2 days.',
          name: 'Ms. Sharifah Nadia',
          role: 'CTO',
          company: 'Nexora Tech',
          location: 'Cyberjaya, Selangor',
          rating: 5,
        },
        {
          quote: 'The Flutter app built for our business runs smoothly across iOS and Android. Seamless AI and backend integrations. Delivered on schedule with outstanding engineering quality.',
          name: 'Dr. Hazwan Kamaruddin',
          role: 'Director of Innovation',
          company: 'MedTech Solutions MY',
          location: 'Putrajaya',
          rating: 5,
        },
        {
          quote: 'They set up our entire DevOps pipeline — Docker, Kubernetes, CI/CD, and Prometheus. Deployments that previously took half a day now take 10 minutes. Rock-solid and observable.',
          name: 'Mr. Rizwan Tarmizi',
          role: 'Lead Engineer',
          company: 'Synapse Labs',
          location: 'Petaling Jaya, Selangor',
          rating: 5,
        },
        {
          quote: 'We engaged them to integrate AI into our existing HR system. Previously manual tasks are now completely automated. ROI in the first 6 weeks fully offset development costs.',
          name: 'Mrs. Azlina Rashid',
          role: 'HR Director',
          company: 'Prisma Holdings',
          location: 'Shah Alam, Selangor',
          rating: 5,
        },
        {
          quote: 'The custom analytics dashboard they engineered provides full operational visibility. Live data feeds, proactive alerts, automated PDF reporting — runs flawlessly.',
          name: 'Mr. Darwisyah Malik',
          role: 'Operations Manager',
          company: 'Logistera Sdn Bhd',
          location: 'Johor Bahru, Johor',
          rating: 5,
        },
      ],
    },
    // FAQ Section
    faq: {
      tag: 'Frequently Asked Questions (FAQ)',
      title: 'Everything You Need To Know About',
      titleHighlight: 'Our Services',
      desc: 'Clear, candid answers regarding technical stack, pricing models, delivery timelines, and code ownership.',
      stillQuestions: 'Still have questions?',
      askPrompt: 'Feel free to reach out directly!',
      whatsappBtn: 'WhatsApp Us',
      waMessage: 'Hi WebDevMY, I have a question about your services',
      items: [
        {
          question: 'What types of engineering services do you specialize in?',
          answer: 'We specialize in production-grade software solutions — encompassing Cloud Infrastructure & DevOps (Kubernetes, Terraform IaC, CI/CD), High-Throughput Backends (Go, FastAPI, Spring Boot), Enterprise Systems (HR/Payroll EPF/SOCSO, Custom CRM), and Agentic AI Integration (LangGraph, Document RAG).',
        },
        {
          question: 'How does your Cloud Cost & System Audit work?',
          answer: 'We begin with a complimentary 15-minute discovery call to understand your business objectives, current bottlenecks, and priorities. If there is a mutual fit, we propose the scope, architecture approach, and estimated timeline before any work commences.',
        },
        {
          question: 'Can you integrate AI into our existing legacy software systems?',
          answer: 'Yes, absolutely. We architect modular AI integration layers (such as ChatOps bots, RAG knowledge copilots, or PDF document workflows) that interface directly with your existing APIs and databases without rebuilding your entire stack.',
        },
        {
          question: 'What are typical delivery timelines for projects?',
          answer: 'Lead-generating websites usually take 1-2 weeks once scope and content are finalized. Websites with booking or automated workflows typically take 2-4 weeks. Complex enterprise systems are delivered in structured sprint milestones.',
        },
        {
          question: 'Will our business own 100% of the code and infrastructure?',
          answer: 'Yes, 100%. All source code (GitHub/GitLab), Terraform/Docker config files, and cloud deployments are provisioned directly to your company accounts. We provide complete architectural documentation and a live handover session.',
        },
        {
          question: 'What is your payment structure and terms?',
          answer: 'For landing pages and quick projects: 50% deposit upfront & 50% upon final handover. For bespoke and enterprise systems: phased milestones (40% kickoff, 30% beta milestone, 30% handover) or monthly retainer agreements.',
        },
      ],
    },
    // Contact Section
    contact: {
      tag: 'Contact Us',
      title: 'Ready To Build Systems That',
      titleHighlight: 'Scale Effortlessly',
      desc: 'From cloud cost audits and backend refactoring to bespoke fullstack platforms and agentic AI — let’s have a candid discussion.',
      reachOutTitle: 'Connect Directly With Engineers',
      reachOutDesc: 'WhatsApp us for technical scope evaluations, claim your free 15-min audit, or get an honest project estimate. We typically reply within 1-2 hours.',
      reachOutCta: 'Chat on WhatsApp Now',
      reachOutPhone: '+60 13-879 9702 (Noorazami / WebDevMY)',
      waMessage: 'Hi WebDevMY, I want to discuss a project / claim the Free 15-Minute Cloud & System Audit.',
      expectTitle: 'What You Can Expect:',
      expectItems: [
        {
          title: '15-Minute Discovery & Audit Call',
          desc: 'Rapid review of technical requirements, infrastructure bottlenecks, and business objectives.',
        },
        {
          title: 'Architecture Proposal & Transparent Quote',
          desc: 'Breakdown of work scope, tech stack recommendations, and pricing with zero hidden fees.',
        },
        {
          title: 'Sprint Milestones & Full Handover',
          desc: 'Structured iterative delivery with regular demos, tests, and complete documentation.',
        },
      ],
    },
    // Footer Section
    footer: {
      brandDesc: 'Production-grade software engineering and infrastructure solutions for businesses in Malaysia and beyond. Fullstack web applications, distributed systems, DevOps cloud, and Agentic AI automation.',
      engineeringPortfolio: 'Engineering Portfolio ↗',
      servicesTitle: 'Services & Capabilities',
      quickLinksTitle: 'Quick Links',
      copyright: '© 2026 WebDevMY. All rights reserved.',
      portfolioLink: 'Portfolio (noorazami.me)',
      githubLink: 'GitHub (@AmiQT)',
      backToTop: 'Back to top',
      services: [
        'DevOps & Cloud Cost Optimization',
        'High-Throughput Backend & Go',
        'Enterprise Web Apps & Systems',
        'Agentic AI & ChatOps Automation',
        'Ultra-Fast Landing Pages & Funnels',
        'Observability & 24/7 Monitoring',
      ],
      quickLinks: [
        { href: '#masalah', label: 'Challenges' },
        { href: '#solusi', label: 'Services & Solutions' },
        { href: '#portfolio', label: 'Case Studies & Portfolio' },
        { href: '#testimoni', label: 'Testimonials' },
        { href: '#hubungi', label: 'Contact Engineer' },
      ],
    },
    // Exit Popup
    exitPopup: {
      badge: '⚡ Free Project Consultation',
      title: 'Looking For A Website Or System That Drives Growth?',
      subtitlePre: 'Claim your complimentary ',
      subtitleHighlight: '15-minute project consultation',
      subtitlePost: ' with our engineering team.',
      freeConsultationBadge: 'FREE CONSULTATION',
      cta: 'Discuss On WhatsApp',
      note: 'We understand your exact needs before proposing any project scope.',
      waMessage: 'Hi WebDevMY, I want to discuss a website or system for my business.',
      benefits: [
        'Understand your core business goals and bottlenecks',
        'Determine if a website, workflow, or AI is the right fit',
        'Receive actionable, practical next steps',
        '100% free with no commitment required',
      ],
    },
  },
} as const;
