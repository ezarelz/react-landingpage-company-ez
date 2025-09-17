// src/components/container/TestimonialsSection/testimonials.data.ts
export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar: string; // path ke /public/assets
  rating?: 1 | 2 | 3 | 4 | 5;
  starsImg?: string; // optional override star image path
  quoteIcon?: string; // optional override quote icon path
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Tan',
    role: 'Product Manager',
    company: 'Finovate',
    quote:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    avatar: '/assets/sarah-tan.png',
    rating: 5,
    starsImg: '/assets/rating-ico.png',
    quoteIcon: '/assets/tdesign_quote-filled.png',
  },
  {
    name: 'John Lee',
    role: 'CTO',
    company: 'Innovate Corp',
    quote:
      'A true partner. They turned complex ideas into intuitive experiences and kept us informed at every step.',
    avatar: '/assets/john-lee.png',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Head',
    company: 'TechHive',
    quote:
      'Seamless collaboration and reliable delivery. The results exceeded expectations and boosted our KPIs.',
    avatar: '/assets/emily-chen.png',
    rating: 4,
  },
];
