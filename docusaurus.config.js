module.exports = {
  title: 'Personal Finance Guide',
  tagline: 'Consolidated information to help you manage your money',
  url: 'https://joshjluo.github.io',
  baseUrl: '/personal-finance-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/credit_card.svg',
  organizationName: 'joshjluo',
  projectName: 'personal-finance-guide',
  themeConfig: {
    navbar: {
      title: 'Personal Finance Guide',
      logo: {
        alt: 'Personal Finance Guide Logo',
        src: 'img/credit_card.svg',
      },
      items: [
        {
          to: 'docs',
          label: 'Guide',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/joshjluo/personal-finance-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Joshua Luo. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/joshjluo/personal-finance-guide/edit/main/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          editUrl:
            'https://github.com/joshjluo/personal-finance-guide/edit/main/blog',            
          blogTitle: 'Financial Docs',
          blogDescription: '',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
