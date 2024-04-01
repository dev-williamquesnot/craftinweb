import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      links: [
      
        {
          text: 'Showcase site',
          href: getPermalink('/showcase-site'),
        },
        {
          text: 'E-commerce site',
          href: getPermalink('/ecommerce-site'),
        },
        {
          text: 'Custom Solution',
          href: getPermalink('/custom-solution'),
        },

      ],
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
  actions: [{ text: 'Collaborate Now', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Showcase site', href: '/showcase-site' },
        { text: 'E-commerce site', href: '/ecommerce-site' },
        { text: 'Custom solution', href: '/custom-solution' },
      ],
    },
    {
      title: 'Pricing',
      links: [
        { text: 'Packages', href: '/pricing' },
      ],
    },
    {
      title: 'Blog',
      links: [
        { text: 'Articles', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: `
    <span class="text-gray-400">Made by onWidget· All rights reserved.</span>
  `,
};
