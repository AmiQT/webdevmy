import type { Project } from '../types/data';

export const projects: Project[] = [
  {
    title: 'StyleHub',
    category: 'E-commerce',
    description: 'Full-stack fashion e-commerce platform dengan React 18, Node.js & PostgreSQL.',
    tags: ['React 18', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '/images/projects/stylehub.webp',
  },
  {
    title: 'Rumah Tenang',
    category: 'Tourism',
    description: 'Malaysian homestay landing page untuk foreign tourists dengan booking system.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    image: '/images/projects/rumah_tenang.webp',
  },
  {
    title: 'Nasi Lemak Burger',
    category: 'Food & Beverage',
    description: 'Dynamic promotional landing page dengan countdown timer untuk food promotions.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Countdown'],
    image: '/images/projects/burger.webp',
  },
];
