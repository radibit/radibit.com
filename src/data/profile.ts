import type { ImageMetadata } from 'astro';
import fydraShot from '../assets/projects/fydra.jpg';
import hsbShot from '../assets/projects/hsb-sylt.jpg';

export type Role = {
  start: string;
  end: string;
  title: string;
  company: string;
  url?: string;
  place: string;
};

// Source: LinkedIn experience, newest first
export const experience: Role[] = [
  {
    start: 'May 2023',
    end: 'Now',
    title: 'Staff Engineer',
    company: 'acb.studio',
    url: 'https://acb.studio',
    place: 'Düsseldorf · Remote',
  },
  {
    start: 'Jan 2019',
    end: 'Apr 2023',
    title: 'Senior Frontend Engineer',
    company: 'data4life',
    url: 'https://www.data4life.care',
    place: 'Berlin · Hybrid',
  },
  {
    start: 'Dec 2017',
    end: 'Jan 2021',
    title: 'Event Organizer',
    company: 'A11y Meetup Berlin',
    url: 'https://a11y-meetup-berlin.de/',
    place: 'Berlin',
  },
  {
    start: 'Aug 2017',
    end: 'Dec 2018',
    title: 'Senior Frontend Engineer',
    company: 'Project A Ventures',
    url: 'https://www.project-a.com',
    place: 'Berlin',
  },
  {
    start: 'Oct 2016',
    end: 'Jul 2017',
    title: 'Senior Frontend Engineer',
    company: 'Qunomedical',
    url: 'https://www.qunomedical.com/en',
    place: 'Berlin',
  },
  {
    start: 'Feb 2015',
    end: 'Oct 2016',
    title: 'Frontend Developer',
    company: 'Loopline Systems',
    url: 'https://www.loopline-systems.com/en/',
    place: 'Berlin',
  },
  {
    start: 'Nov 2012',
    end: 'Jan 2015',
    title: 'Frontend Developer',
    company: 'Tumba Solutions',
    place: 'Sofia',
  },
  {
    start: 'May 2012',
    end: 'Oct 2012',
    title: 'Junior Web Developer (ASP.NET, C#)',
    company: 'ICB',
    place: 'Sofia',
  },
];

export const firstYear = 2011;

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Accessibility',
    items: [
      'WCAG audits',
      'Screen reader testing',
      'Keyboard navigation',
      'Inclusive design patterns',
      'Accessibility tooling',
    ],
  },
  {
    group: 'Performance',
    items: [
      'Core Web Vitals',
      'Loading & caching strategies',
      'Render optimisation',
      'Performance audits',
      'Digital carbon reduction',
    ],
  },
  {
    group: 'Engineering & AI',
    items: [
      'Full-stack architecture',
      'Mobile development',
      'Security & privacy',
      'Agentic engineering',
      'AI integration',
      'Scalable systems',
    ],
  },
  {
    group: 'Sharing',
    items: [
      'Workshops & training',
      'Mentoring & onboarding',
      'Meetup organising',
      'Writing & talks',
      'Open source contributions',
    ],
  },
];

export const languages =
  'Bulgarian (native) · English (full professional) · German (intermediate)';

export type Project = {
  num: string;
  kind: string;
  name: string;
  url?: string;
  body: string;
  image?: ImageMetadata;
};

export const projects: Project[] = [
  {
    num: '01',
    kind: 'iPhone, iPad & Mac app',
    name: 'Fydra',
    url: 'https://fydra.app/',
    body: 'A vault for everything Apple Passwords cannot hold: notes, SSH and API keys, cards and documents. Encrypted locally, unlocked with biometrics.',
    image: fydraShot,
  },
  {
    num: '02',
    kind: 'Website',
    name: 'HSB Sylt',
    url: 'https://hsb-sylt.com/',
    body: 'Website for garden and landscape business on the island of Sylt.',
    image: hsbShot,
  },
  {
    num: '03',
    kind: 'Coming next',
    name: 'Not announced yet',
    body: 'Still taking shape.',
  },
];

export const brands: {
  name: string;
  logo: string;
  width: number;
  height: number;
}[] = [
  { name: 'Jacques’ Wein-Depot', logo: 'jacques.svg', width: 129, height: 48 },
  { name: 'Charité', logo: 'charite.svg', width: 128, height: 48 },
  { name: 'mytischtennis.de', logo: 'mytischtennis.svg', width: 211, height: 48 },
  { name: 'LIQID', logo: 'liqid.svg', width: 166, height: 48 },
  { name: 'Qunomedical', logo: 'qunomedical.svg', width: 332, height: 48 },
  { name: 'Loopline Systems', logo: 'loopline.png', width: 155, height: 48 },
  { name: 'Klara', logo: 'klara.svg', width: 152, height: 48 },
  { name: 'ZenMate', logo: 'zenmate.svg', width: 168, height: 48 },
  { name: 'Address.bg', logo: 'address.svg', width: 188, height: 48 },
];
