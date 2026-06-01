export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    country: string;
    region: string;
  };
  openingHours: string;
  priceRange: string;
  rating: {
    value: string;
    count: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}
