export type Project = {
  title: string;
  meta: string;
  techs: string[]; // full list for each project
};

export const NAME = 'Chelvin John Miranda';
export const SUBTITLE = 'Full-Stack Developer | Integration Developer | Freelance Developer';
export const QUICK_INFO = 'Full-stack • Azure Integration • .NET • React';
export const CONTACT = {
  email: 'ct.miranda.w@gmail.com',
  phone: '+63 999 536 2897',
};

export const EXPERTISE = [
  'Full-Stack Development',
  'Integration & Middleware',
  'Cloud Solutions (Azure)',
  'API Design & Messaging',
];

export const PROJECTS: Project[] = [
  {
    title: 'Pricing System for Retail Gas Distribution in the US',
    meta: 'Full-Stack Developer — Accenture, Inc. (2026–Present)',
    techs: [
      'ReactJS',
      'Redux',
      'C# / .NET',
      'Durable Functions',
      'Azure Functions',
      'Queues (Service Bus)',
      'Microsoft SQL Server',
    ],
  },
  {
    title: 'Azure Integration for Retail Gas Distribution in the US',
    meta: 'Integration Developer — Accenture, Inc. (2025–2026)',
    techs: [
      'Azure Integration Services',
      'Service Bus',
      'Topics & Subscriptions',
      'Durable Functions',
      'Azure Functions',
      'C# / .NET',
      'Microsoft SQL Server',
    ],
  },
  {
    title: '(Internal) Expense and Service Management Web App',
    meta: 'Full-Stack Developer — Accenture, Inc. (2024–2025)',
    techs: [
      'ReactJS',
      'Redux',
      'ASP.NET Core (EF Core)',
      'Microsoft SQL Server',
    ],
  },
  {
    title: 'Pharmaceutical Logistics and Inventory System in the US',
    meta: 'Full-Stack Developer — Accenture, Inc. (2022–2024)',
    techs: [
      'Angular',
      'AngularJS',
      'TypeScript',
      'ASP.NET Core (EF Core)',
      'Microsoft SQL Server',
    ],
  },
  {
    title: '(Internal) Web Systems/Applications',
    meta: 'IT Specialist | Full-Stack Developer — Pricon Microelectronics, Inc. (2021–2022)',
    techs: [
      'Laravel',
      'Bootstrap',
      'HTML',
      'CSS',
      'Microsoft SQL Server',
    ],
  },
];

export const FOOTER_COPY = `© ${new Date().getFullYear()} ${NAME}`;

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/xyris-00', aria: 'GitHub' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chelvin-miranda/', aria: 'LinkedIn' },
];

export const MESSAGE_LINK = `mailto:${CONTACT.email}`;

