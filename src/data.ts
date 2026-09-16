export function imagePath(name: string) {
  return `/images/${name}.png`;
}

export const portfolio = [
  {
    slug: 'forma',
    name: 'FORMA Studio',
    kind: 'Hair salon & barbershop',
    tags: ['Appointment booking', 'Portfolio gallery', 'Mobile-first'],
    description:
      'A full booking experience for an independent LA hair studio: service menu with pricing, artist profiles, a filterable style portfolio, and live appointment scheduling that respects real hours and service length.',
    demoPath: '/demos/forma/',
    accent: '#a64f35',
  },
  {
    slug: 'cielo',
    name: 'Cielo Street Kitchen',
    kind: 'Restaurant & street food',
    tags: ['Online ordering', 'Menu & specials', 'Responsive design'],
    description:
      'A vibrant online presence for a street-food restaurant: full menu with photos, an online ordering flow, and location and hours designed to turn a scroll into a visit or a delivery.',
    demoPath: '/demos/cielo/',
    accent: '#d9552d',
  },
] as const;

export const services = [
  {
    title: 'Custom design',
    description:
      'A site built around your business, not a template — your colors, your photos, your story.',
  },
  {
    title: 'Mobile-first build',
    description:
      'Most customers find you on their phone first. Every site is designed and tested there first.',
  },
  {
    title: 'Booking & ordering',
    description:
      'Appointment requests, menus, and online ordering — connected to the tools you already use.',
  },
  {
    title: 'Fast & findable',
    description:
      'Quick load times and clean structure, so search engines and customers can both find you.',
  },
  {
    title: 'Launch support',
    description:
      'I set up hosting and your domain, and walk you through updating the site yourself.',
  },
  {
    title: 'Ongoing updates',
    description:
      'Hours, menus, and prices change. I keep your site current so you do not have to think about it.',
  },
] as const;

export const process = [
  {
    step: '01',
    title: 'Free consultation',
    description: 'Tell me about your business, your customers, and what your current site is missing (or that you do not have one yet).',
  },
  {
    step: '02',
    title: 'Design & build',
    description: 'I design and build your site, usually within one to two weeks, and share progress along the way.',
  },
  {
    step: '03',
    title: 'Review & launch',
    description: 'We walk through the finished site together, make any changes, and take it live on your domain.',
  },
  {
    step: '04',
    title: 'Ongoing support',
    description: 'After launch, I stay on for updates and small changes — a new hour, a new dish, a new photo.',
  },
] as const;

export const faqs: [string, string][] = [
  [
    'Do you build the site or use a template builder?',
    'Every site is hand-built with real code, so it loads fast and looks like nothing else in your industry — not a drag-and-drop template.',
  ],
  [
    'Can you connect my existing booking or ordering system?',
    'Yes. The demos below show what a fully custom booking and ordering flow can look like. For a live site, I connect your verified provider — Square, Toast, Booksy, Calendly, or others.',
  ],
  [
    'How much does a site cost?',
    'It depends on the pages, features, and integrations you need. After a free consultation, I send a clear, fixed quote before any work starts.',
  ],
  [
    'What if I need changes after launch?',
    'Small updates are included for a period after launch, and I offer ongoing support plans for anything after that.',
  ],
];
