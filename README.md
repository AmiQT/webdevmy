<div align="center">

# 🚀 WebDevMY

### *Transformasi Digital untuk SME Malaysia*

[![Astro](https://img.shields.io/badge/Astro-v4.16.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Landing page modern & professional untuk web development services yang fokus pada SME Malaysia!** 🇲🇾

[🌐 Live Demo](https://webdevmy.com) • [📧 Contact](mailto:hello@webdevmy.com) • [💬 WhatsApp](https://wa.me/60138799702)

</div>

---

## ✨ Highlights

<table>
<tr>
<td width="50%">

### 🎨 **Modern Design System**
- Shadcn UI components
- Gradient animations
- Dark mode ready
- Minimal & clean aesthetic

### 🚀 **Lightning Fast**
- Astro's island architecture
- Optimized static generation
- Lazy loading
- Zero JS by default

</td>
<td width="50%">

### 📱 **Mobile-First**
- Responsive design
- Touch-optimized
- Fast mobile loading
- Progressive enhancement

### 🎯 **Conversion Focused**
- Strategic CTAs
- WhatsApp integration
- Trust signals
- Exit intent popup

</td>
</tr>
</table>

---

## 🏗️ Tech Stack

### **Core Framework**
```
Astro v4.16.0        → Static Site Generator
React v18.3.1        → UI components (for Shadcn)
TypeScript v5.6.3    → Type safety
```

### **Styling**
```
Tailwind CSS v3.4.0  → Utility-first CSS
Shadcn UI            → Component library
CSS Variables        → HSL theming system
Custom Animations    → Fade-in, gradient effects
```

### **Components**
- `Button` - Primary/Secondary/Destructive variants
- `Card` - Content containers with header/footer
- `Badge` - "Offer" badges & labels
- `Input/Textarea` - Form components
- Custom utilities via `cn()` function

---

## 📁 Project Structure

```
webdevmy/
├── 📄 astro.config.mjs          # Astro configuration
├── 📄 tailwind.config.mjs       # Tailwind + Shadcn theme
├── 📄 tsconfig.json             # TypeScript config
├── 📄 netlify.toml              # Deployment config
│
├── 📂 src/
│   ├── 📂 assets/               # Static assets (CSS, images, JS)
│   │
│   ├── 📂 components/           # Astro components
│   │   ├── Navbar.astro         # Navigation with scroll effect
│   │   ├── Hero.astro           # Hero section with gradient
│   │   ├── Problems.astro       # Pain points section
│   │   ├── Services.astro       # 6 service cards
│   │   ├── Benefits.astro       # Stats + benefits grid
│   │   ├── Portfolio.astro      # Project showcase
│   │   ├── Testimonials.astro   # Client testimonials
│   │   ├── FAQ.astro            # Accordion-style FAQ
│   │   ├── Contact.astro        # Form + WhatsApp CTA
│   │   ├── Footer.astro         # Multi-column footer
│   │   └── ExitPopup.astro      # 20% discount popup
│   │
│   ├── 📂 components/ui/        # Shadcn UI components
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── badge.tsx            # Badge component
│   │   ├── input.tsx            # Input component
│   │   └── textarea.tsx         # Textarea component
│   │
│   ├── 📂 layouts/
│   │   └── Layout.astro         # Base layout with SEO
│   │
│   ├── 📂 lib/
│   │   └── utils.ts             # cn() utility function
│   │
│   ├── 📂 pages/
│   │   └── index.astro          # Main landing page
│   │
│   └── 📂 styles/
│       └── global.css           # Global styles + CSS variables
│
└── 📂 public/                   # Static files (copied to dist/)
    ├── google01f79227cf37826a.html
    ├── robots.txt
    ├── sitemap.xml
    └── images/                  # Optimized images
```

---

## 🎨 Design System

### **Color Palette**

| Color | HSL | Hex | Usage |
|-------|-----|-----|-------|
| **Primary** | `231 85% 50%` | `#3B67F0` | Main brand color (Blue) |
| **Secondary** | `160 84% 39%` | `#11A37F` | Accent color (Green) |
| **Destructive** | `0 84% 60%` | `#EF4444` | Error states |
| **Background** | `0 0% 100%` | `#FFFFFF` | Page background |
| **Foreground** | `222 47% 11%` | `#0F172A` | Text color |
| **Muted** | `210 40% 96%` | `#F1F5F9` | Subtle backgrounds |

### **Typography**

- **Headings**: System font stack (optimal performance)
- **Body**: System font stack with fallbacks
- **Sizes**: Responsive with `clamp()` for fluid scaling

### **Spacing**

Using Tailwind's default spacing scale with custom container:
- Container: `max-w-7xl` with responsive padding
- Section padding: `py-16 md:py-24`
- Gap scale: `4, 6, 8, 12, 16`

---

## 🚀 Quick Start

### **Prerequisites**
```bash
Node.js >= 20.0.0
npm >= 10.0.0
```

### **Installation**

```bash
# Clone repository
git clone https://github.com/yourusername/webdevmy.git

# Navigate to project
cd webdevmy

# Install dependencies
npm install

# Start dev server
npm run dev
```

### **Available Scripts**

```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

---

## 🎯 Landing Page Sections

### **1. 🦸 Hero Section**
- Gradient background animation
- Compelling headline with CTAs
- Trust badges (50+ projects, 100% satisfaction)
- Minimal, clean design

### **2. 😰 Problems Section**  
- 4 pain points SME Malaysia face
- Emoji icons for visual appeal
- Relatable scenarios

### **3. 💼 Services Section**
- 6 service cards with features
- "Offer" badges (no fixed pricing)
- Hover effects for engagement

### **4. ✨ Benefits Section**
- Statistics row (50+ projects, 99% uptime, 24/7 support)
- Benefits grid (6 key benefits)
- "Why Choose Us" list (5 reasons)

### **5. 🎨 Portfolio Section**
- 3 project showcases
- Hover effects
- "View All" CTA

### **6. ⭐ Testimonials Section**
- 3 client testimonials
- Star ratings
- Avatar + name + business

### **7. ❓ FAQ Section**
- 6 common questions
- Accordion design (collapsed by default)
- "Still have questions?" CTA

### **8. 📞 Contact Section**
- Two-column layout
- WhatsApp quick contact CTA
- Contact form with validation
- Social proof badges

### **9. 🔗 Footer**
- Multi-column layout (About, Services, Contact, Follow)
- Social media links
- Back to top button
- Copyright info

### **10. 🚪 Exit Intent Popup**
- 20% discount offer
- Triggered on exit intent
- Emoji + gradient badge
- WhatsApp CTA

---

## 🛠️ Customization

### **Update Contact Info**

Edit [src/components/Contact.astro](src/components/Contact.astro):
```javascript
// WhatsApp link
https://wa.me/60138799702

// Email
hello@webdevmy.com
```

### **Change Colors**

Edit [src/styles/global.css](src/styles/global.css):
```css
:root {
  --primary: 231 85% 50%;      /* Blue */
  --secondary: 160 84% 39%;    /* Green */
  /* Add your custom colors */
}
```

### **Add New Component**

```bash
# For Shadcn components (React)
npx shadcn-ui@latest add [component-name]

# For Astro components
# Create new .astro file in src/components/
```

---

## 📊 SEO Features

✅ **Meta Tags**: Complete Open Graph & Twitter Cards  
✅ **Structured Data**: Schema.org LocalBusiness markup  
✅ **Sitemap**: Auto-generated XML sitemap  
✅ **Robots.txt**: Search engine directives  
✅ **Performance**: Lighthouse score 95+  
✅ **Mobile-Friendly**: Google Mobile-Friendly Test passed  

---

## 🚀 Deployment

### **Deploy to Netlify**

```bash
# Build command
npm run build

# Publish directory
dist

# Environment variables
NODE_VERSION = 20
```

Configured in [netlify.toml](netlify.toml) ✅

### **Other Platforms**

- **Vercel**: Zero-config deployment
- **Cloudflare Pages**: Edge performance
- **GitHub Pages**: Free hosting with custom domain

---

## 📈 Performance

| Metric | Score |
|--------|-------|
| **Lighthouse Performance** | 95+ |
| **First Contentful Paint** | < 1.5s |
| **Time to Interactive** | < 3.0s |
| **Total Blocking Time** | < 200ms |
| **Cumulative Layout Shift** | < 0.1 |

*Optimized with Astro's zero-JS approach and lazy loading.*

---

## 🔧 Built With

- [Astro](https://astro.build) - Static site generator
- [React](https://react.dev) - UI library (for Shadcn)
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Shadcn UI](https://ui.shadcn.com) - Component library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Netlify](https://netlify.com) - Deployment platform

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💬 Support

Perlukan bantuan atau nak customize?

- 📧 **Email**: [hello@webdevmy.com](mailto:hello@webdevmy.com)
- 💬 **WhatsApp**: [+60 13-879-9702](https://wa.me/60138799702)
- 🌐 **Website**: [webdevmy.com](https://webdevmy.com)

---

<div align="center">

### Made with ❤️ for Malaysian SMEs 🇲🇾

**Transformasi digital anda bermula di sini!** 🚀

⭐ Star this repo if you find it helpful!

</div>
