export type WorkEntry = {
  company: string;
  date: string;
  role: string;
  desc: string;
};

export const workEntries: WorkEntry[] = [
  {
    company: 'Adani Enterprises',
    date: 'Oct 2024 — Present',
    role: "UI/UX Designer — CTO's Office",
    desc: 'Designing for 30 million users. Leading UX across 4 verticals — AI Labs (Sirius DigiTech), Cyber Security, Adani Digital Labs (Adani One), and Tech Business Development. Delivered 5 enterprise platforms and 3 SaaS dashboards, driving a 15% increase in site visits and client acquisition. Built a WCAG-compliant design system used across all digital touchpoints.',
  },
  {
    company: 'Green Dot Agro',
    date: 'May — Oct 2024',
    role: 'Creative Associate & Management Trainee',
    desc: 'Sole designer. Built the entire brand identity system from zero — logo, colour, typography, packaging, and visual language. Managed IP registration and trademark filing independently.',
  },
  {
    company: 'Hekate Industries',
    date: 'Feb — Apr 2024',
    role: 'Packaging Designer & Creative Consultant',
    desc: 'Defined the visual language and brand-aligned design system across 5 SKUs. Validated 8 design concepts through prototyping and iterative stakeholder feedback.',
  },
  {
    company: 'N.K. Proteins (Olixir Oils)',
    date: 'Jan — Jul 2022',
    role: 'Product Packaging & Artwork Designer',
    desc: 'Full packaging pipeline across 20+ SKUs and 4 product ranges — 3D bottle modelling, dieline development, and 80+ print-ready label variants. Improved brand engagement by 12%.',
  },
];

export type FilterKey =
  | 'ux-research'
  | 'service-design'
  | 'ui-ux'
  | 'branding'
  | 'packaging'
  | 'figma';

export const filterTabsBase: { key: FilterKey; label: string }[] = [
  { key: 'ux-research', label: 'UX Research' },
  { key: 'service-design', label: 'Service Design' },
  { key: 'ui-ux', label: 'UI/UX' },
  { key: 'branding', label: 'Branding' },
  { key: 'packaging', label: 'Packaging' },
  { key: 'figma', label: 'Figma' },
];

export type Project = {
  id: string;
  tags: FilterKey[];
  domain: string;
  /** Short name shown in the Selected Work hover list. */
  shortTitle: string;
  /** Full name shown in the tilted preview card and elsewhere. */
  title: string;
  desc: string;
  meta: string;
  cta: string;
  /** Path under public/ to a real project screenshot, if one exists yet. */
  image?: string;
  /** External URL (e.g. a Figma prototype) the project row links out to. */
  link?: string;
};

export const projects: Project[] = [
  {
    id: 'proj-crushcup',
    tags: ['service-design', 'ux-research'],
    domain: 'Service Design · Research',
    shortTitle: 'Crush Cup',
    title: 'Crush Cup: Revival of the Terracotta',
    desc: 'Redesigning takeaway coffee culture in the UK through a sustainable terracotta cup service system. Masters thesis. CEA Prize winner.',
    meta: 'GSA, Scotland · 2023',
    cta: '7 min read →',
    image: '/work/crush-cup.png',
  },
  {
    id: 'proj-nexushift',
    tags: ['service-design', 'ux-research'],
    domain: 'Service Design · Fintech',
    shortTitle: 'NexuShift',
    title: 'NexuShift: Fair Finance in the UK',
    desc: 'A service design intervention addressing financial exclusion for underserved communities in the UK. System mapping, co-design workshops.',
    meta: 'UK · 2023',
    cta: '9 min read →',
    image: '/work/nexushift.png',
  },
  {
    id: 'proj-adanione',
    tags: ['ux-research'],
    domain: 'UX Research · Usability Study',
    shortTitle: 'AdaniOne',
    title: 'AdaniOne — UX Research & Usability Study',
    desc: "End-to-end usability research for India's largest airport super-app across 5 archetypes.",
    meta: 'India · 2024',
    cta: '8 min read →',
    image: '/work/adanione.png',
  },
  {
    id: 'proj-noir',
    tags: ['ui-ux'],
    domain: 'UI/UX · Web Design',
    shortTitle: 'Noir Beauty',
    title: 'Noir Beauty',
    desc: 'A minimalist beauty webpage redefining luxury through clean graphics, soft pastels, and deliberate negative space.',
    meta: 'Web · 2024',
    cta: 'View Prototype →',
    image: '/work/noir-beauty.png',
  },
  {
    id: 'proj-pricegenius',
    tags: ['ui-ux'],
    domain: 'UI/UX · B2B · Enterprise',
    shortTitle: 'PriceGenius.AI',
    title: 'PriceGenius.AI — Sirius DigiTech',
    desc: 'Live product webpage for an enterprise AI procurement forecaster. Contributed to a 15% increase in client acquisition.',
    meta: 'Web · 2024',
    cta: 'View Live →',
    image: '/work/pricegenius-ai.png',
  },
  {
    id: 'proj-sirius',
    tags: ['ui-ux'],
    domain: 'UI/UX · Industrial AI',
    shortTitle: 'Sirius DigiTech',
    title: 'Sirius DigiTech — Homepage',
    desc: 'Flagship homepage unifying 7 enterprise-scale AI products for energy, aviation, and industrial operations.',
    meta: 'Web · 2024',
    cta: 'View Live →',
    image: '/work/sirius-digitech.png',
  },
  {
    id: 'proj-alife',
    tags: ['packaging'],
    domain: 'Packaging Design',
    shortTitle: 'Alife',
    title: 'Alife — Soap & Hand Sanitiser',
    desc: 'Packaging identity rooted in clean living and minimal material waste.',
    meta: '2022',
    cta: '5 min read →',
    image: '/work/alife.png',
  },
  {
    id: 'proj-vedas',
    tags: ['packaging'],
    domain: 'Packaging Design',
    shortTitle: 'The Vedas',
    title: 'The Vedas — Green Tea',
    desc: 'Packaging design drawing from ancient Indian philosophy and botanical illustration.',
    meta: '2022',
    cta: '4 min read →',
    image: '/work/the-vedas.png',
  },
  {
    id: 'proj-greendot',
    tags: ['branding'],
    domain: 'Branding · Identity',
    shortTitle: 'Green Dot Agro',
    title: 'Green Dot Agro Pvt. Ltd.',
    desc: 'Brand identity for an agritech company — balancing trust, modernity, and agricultural rootedness.',
    meta: '2022',
    cta: '4 min read →',
    image: '/work/green-dot-agro.png',
  },
  {
    id: 'proj-xlr8',
    tags: ['branding'],
    domain: 'Branding · Aerospace',
    shortTitle: 'XLR8 Aerospace',
    title: 'XLR8 Aerospace',
    desc: 'Brand identity for an aerospace startup — precision, ambition, and futurism.',
    meta: '2023',
    cta: '3 min read →',
    image: '/work/xlr8-aerospace.png',
  },
  {
    id: 'proj-figma-collection',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Collection',
    title: 'A Collection Built Around Choice',
    desc: 'A product collection interface designed around flexible customization and clear visual choice.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/a-collection-built-around-choice.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=1016-44&viewport=584%2C466%2C0.09&t=pG5kuRAklTvZ6YqG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1009%3A179&page-id=1008%3A19',
  },
  {
    id: 'proj-figma-bicycle',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Bicycle Customization',
    title: 'Bicycle Customization Experience',
    desc: 'An interactive configurator letting riders build and preview a custom bicycle in real time.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/bicycle-customization-experience.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=625-21&viewport=515%2C230%2C0.04&t=CsTOOdPKvsP3cDeq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=613%3A167&desktop-link-click-timestamp=1783787160925&desktop-ul-exp-bucket=V&page-id=610%3A119',
  },
  {
    id: 'proj-figma-veggie',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Veggie Shopping',
    title: 'Daily Veggie Shopping Experience',
    desc: 'A grocery app concept streamlining daily fresh-produce shopping with fast, visual browsing.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/daily-veggie-shopping-experience.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=3345-530&viewport=-2129%2C-1478%2C0.16&t=oDpgW3xgmFB6q5RE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3406%3A542&show-proto-sidebar=1&desktop-link-click-timestamp=1783787185289&desktop-ul-exp-bucket=V&page-id=1252%3A2',
  },
  {
    id: 'proj-figma-runway',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Fashion Runway',
    title: 'Fashion Runway Experience',
    desc: 'An immersive digital runway experience translating fashion week energy into a mobile interface.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/fashion-runway-experience.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=1124-3229&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1124%3A3229&desktop-link-click-timestamp=1783787204629&desktop-ul-exp-bucket=V&page-id=1119%3A8258&t=x6pwGBS3CQKEtL7u-',
  },
  {
    id: 'proj-figma-halo',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'HALO Headphones',
    title: 'HALO Headphones',
    desc: 'A product landing page for a premium headphone brand, built around sound, form, and focus.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/halo-headphones.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=471-48&viewport=164%2C26%2C0.09&t=7TCFtr4edtjw4EYW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=470%3A6172&desktop-link-click-timestamp=1783787228819&desktop-ul-exp-bucket=V&page-id=443%3A372&show-proto-sidebar=1',
  },
  {
    id: 'proj-figma-icecream',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Ice Cream Selection',
    title: 'Ice Cream Selection',
    desc: 'A playful ordering flow for building a custom ice cream, from base to toppings.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/ice-cream-selection.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=1102-141&starting-point-node-id=1096%3A18&scaling=scale-down&content-scaling=fixed&t=TRbVfEnHlt1asYwG-1&desktop-link-click-timestamp=1783787287155&desktop-ul-exp-bucket=V&page-id=1095%3A17',
  },
  {
    id: 'proj-figma-feedback',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Feedback, Humanized',
    title: 'Making Feedback Feel Human',
    desc: 'A feedback collection flow redesigned to feel conversational rather than transactional.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/making-feedback-feel-human.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=3639-845&t=gkqeac3MvfW9xkKE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3639%3A845&show-proto-sidebar=1&desktop-link-click-timestamp=1783787311282&desktop-ul-exp-bucket=V&page-id=1252%3A2',
  },
  {
    id: 'proj-figma-travel',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Travel Discovery',
    title: 'Motion-Driven Travel Discovery',
    desc: 'A motion-first travel app concept using movement and transition to guide destination discovery.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/motion-driven-travel-discovery.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=418-2&viewport=661%2C159%2C0.1&t=PnwXLvWT8vIAjqZZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=418%3A2&desktop-link-click-timestamp=1783787335909&desktop-ul-exp-bucket=V&page-id=416%3A10',
  },
  {
    id: 'proj-figma-motionbrands',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Motion-Led Branding',
    title: 'Motion-Led Design for Modern Brands',
    desc: 'A motion design system exploring how modern brands can express identity through movement.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/motion-led-design-for-modern-brands.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=284-534&viewport=694%2C-57%2C0.15&t=9Djx1JGVTGdRuKnU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=284%3A634&show-proto-sidebar=1&page-id=282%3A92',
  },
  {
    id: 'proj-figma-hackathon',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Engagement Hackathon',
    title: 'Nationwide Engagement Hackathon',
    desc: 'A hackathon platform concept designed to drive nationwide participation and engagement.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/nationwide-engagement-hackathon.png',
    link: 'https://www.figma.com/proto/GwVmrbs6VcLhxGJDvL2cib/Tarkash-Website?node-id=161-204&viewport=2135%2C248%2C0.07&t=QbupapKXLv4n50Py-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=44%3A147&desktop-link-click-timestamp=1783787356489&desktop-ul-exp-bucket=V&page-id=0%3A1',
  },
  {
    id: 'proj-figma-smoothie',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Pure Smoothie',
    title: 'Pure Smoothie Experience',
    desc: 'An ordering experience for a smoothie brand centered on freshness, simplicity, and speed.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/pure-smoothie-experience.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=3581-1493&viewport=603%2C-1055%2C0.11&t=YHFDSZXzqHcif2E4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3581%3A1493&show-proto-sidebar=1&desktop-link-click-timestamp=1783787378130&desktop-ul-exp-bucket=V&page-id=560%3A2',
  },
  {
    id: 'proj-figma-yogurt',
    tags: ['figma'],
    domain: 'Figma · UI/UX',
    shortTitle: 'Yogurt Project',
    title: 'Yogurt Project',
    desc: 'A brand and product interface exploration for a yogurt line, balancing warmth and clarity.',
    meta: 'Figma',
    cta: 'View Prototype →',
    image: '/work/figma/yogurt-project.png',
    link: 'https://www.figma.com/proto/MOVj036d2JcGSiSkkkqewW/PrimeNG--Copy-?node-id=4000-305&viewport=393%2C-791%2C0.05&t=iWueF9V5zv7Hh6j7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4000%3A167&show-proto-sidebar=1&page-id=610%3A119',
  },
];

export type SkillDomain = {
  title: string;
  pills: string[];
};

export const skillDomains: SkillDomain[] = [
  {
    title: 'UX Research & Design',
    pills: [
      'User Research & Usability Testing',
      'Design Systems',
      'Wireframing & Prototyping',
      'Journey Mapping',
      'Information Architecture',
      'Service Blueprinting',
      'Design Thinking',
      'WCAG & Accessibility',
    ],
  },
  {
    title: 'Service Design',
    pills: [
      'System Mapping',
      'Service Blueprinting',
      'Touchpoint Design',
      'Behaviour Change',
      'Co-design',
      'NPD Journey Mapping',
    ],
  },
  {
    title: 'Branding & Packaging',
    pills: ['Brand Identity', 'Visual Systems', 'Packaging Design', 'Typography', 'Illustration'],
  },
  {
    title: 'Design Tools',
    pills: ['Figma', 'Figma Make', 'Adobe Photoshop', 'Maze', 'Hotjar', 'Miro', 'Notion', 'Adobe Suite'],
  },
  {
    title: 'AI Tools',
    pills: ['Google AI Studio', 'Google Stitch', 'ChatGPT', 'Claude', 'Midjourney', 'Runway ML'],
  },
];

export const aboutStats = [
  { value: '3', label: 'Continents of inspiration — UK, India, Indonesia' },
  { value: '847', label: 'Post-its that gave their life' },
  { value: '528', label: 'Stickers bought for serotonin' },
  { value: '48', label: 'Times screamed "It\'s not working!!"' },
];
